const substeps = 10;
const chainLength = 15;
const netDimensions = [6, 5];
const ballRadius = 30;
const friction = 0.01;
const gameTime = 45;

let tick;
let startTime;
let timeElapsed;
let score;
let lastScore;

let gravity;
let hoopVel;

let joints = [];
let connections = [];
let ball = {};

let alreadyPlayed = false;
let stopped = true;
let timeInterval;

function setup() {
  createCanvas(400, 400);
}

function initialize() {
  gravity = createVector(0, 0.1);
  
  hoopVel = createVector(0.5, 0);
  
  ball = {
    pos: {x: width/2 - 40, y: height/2 - 100},
    mass: 3
  };

  joints = [];
  connections = [];
  
  for (var row = 0; row < netDimensions[0] + 1; row ++) {
    for (var column = 0; column < netDimensions[1] + 1; column ++) {
      joints.push({id: `${row}-${column}`, pos: {x: width/2 - netDimensions[1]*chainLength/2 + column*chainLength, y: height/2 + row*chainLength}, mass: 0.5, fixed: row === 0});
      if (row > 0) {
        connections.push({ends: [`${row - 1}-${column}`, `${row}-${column}`], length: chainLength});
      }
      if (column > 0) {
        connections.push({ends: [`${row}-${column - 1}`, `${row}-${column}`], length: chainLength});
      }
    }
  }
  
  joints.forEach((joint) => {
    joint.oldPos = joint.pos;
  });
  
  ball.oldPos = {x: ball.pos.x - 2, y: ball.pos.y};
  
  timeInterval = setInterval(() => {
    timeElapsed++;
  }, 1000);
}

function mousePressed() {
  if (!stopped) {
    return;
  }
  stopped = false;
  alreadyPlayed = true;
  tick = 0;
  startTime = new Date().getTime();
  timeElapsed = 0;
  score = 0;
  lastScore = null;
  initialize();
  loop();
}

function draw() {
  if (stopped) {
    background(100, 100, 100, 245);
    textAlign(CENTER);
    textSize(60);
    fill(255);
    if (alreadyPlayed) {
      text('Game over', width/2, height/2 - 30);
      textSize(40);
      text(`Final score: ${score}`, width/2, height/2 + 30);
    } else {
      text('Tap to play', width/2, height/2);
    }
    noLoop();
    return;
  }
  
  background(40);
  
  joints.forEach((joint) => {
    if (joint.fixed) {
      joint.pos.x += hoopVel.x;
      joint.pos.y += hoopVel.y;
    }
  });
  
  drawScene();
  applyVerlet();
  applyConstraints();
  
  if (keyIsDown(LEFT_ARROW)) {
    ball.pos.x -= 0.1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ball.pos.x += 0.05;
  }
  
  if (jointById(`0-${netDimensions[1]}`).pos.x > width - 80) {
    hoopVel.x = -0.5;
  }
  if (jointById('0-0').pos.x < 80) {
    hoopVel.x = 0.5;
  }
  
  if (jointById('0-0').pos.x < ball.pos.x && ball.pos.x < jointById(`0-${netDimensions[1]}`).pos.x) {
    if (ball.oldPos.y <= jointById('0-0').pos.y && ball.pos.y > jointById('0-0').pos.y) {
      score++;
      lastScore = tick;
    } else if (ball.oldPos.y > jointById('0-0').pos.y && ball.pos.y <= jointById('0-0').pos.y) {
      score--;
    }
  }
  
  tick++;
  if (timeElapsed > gameTime) {
    stopped = true;
    clearInterval(timeInterval);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ball.pos.y -= 5;
  }
  if (keyCode === DOWN_ARROW) {
    ball.pos.y += 10;
  }
}

function jointById(id) {
  var targetJoint = null;
  joints.forEach((joint) => {
    if (joint.id === id) {
      targetJoint = joint;
      return;
    }
  });
  
  return targetJoint;
}

function drawScene() {
  noStroke();
  fill(180);
  
  if (lastScore && tick - lastScore < 40) {
    fill(lerpColor(color(173, 235, 177), color(180), (tick - lastScore)/40));
  }
  
  rect(jointById('0-0').pos.x - netDimensions[1]*chainLength, jointById('0-0').pos.y + 20, netDimensions[1]*chainLength*3, -netDimensions[1]*chainLength*2);
  
  strokeWeight(3);
  stroke(40);
  fill(255, 165, 0);
  circle(ball.pos.x, ball.pos.y, ballRadius*2);
  var fixedConnections = [];
  connections.forEach((connection) => {
    if (jointById(connection.ends[0]).fixed && jointById(connection.ends[1]).fixed) {
      fixedConnections.push(connection)
    } else {
      stroke(255, 255, 255);
      strokeWeight(3);
    }
    line(jointById(connection.ends[0]).pos.x, jointById(connection.ends[0]).pos.y, jointById(connection.ends[1]).pos.x, jointById(connection.ends[1]).pos.y);
  });
  
  fixedConnections.forEach((connection) => {
    stroke(255, 50, 50);
    strokeWeight(10);
    line(jointById(connection.ends[0]).pos.x, jointById(connection.ends[0]).pos.y, jointById(connection.ends[1]).pos.x, jointById(connection.ends[1]).pos.y);
  });
  
  noStroke();
  fill(255);
  textAlign(LEFT);
  textSize(32);
  text(score, 20, 40);
  
  textAlign(RIGHT);
  text(`${max(gameTime - timeElapsed, 0)}s`, width - 20, 40);
}

function applyVerlet() {
  joints.forEach((joint) => {
    if (!joint.fixed) {
      oldPos = joint.oldPos;
      joint.oldPos = JSON.parse(JSON.stringify(joint.pos));
      joint.pos.x += (joint.pos.x - oldPos.x)*(1 - friction) + gravity.x*!joint.fixed;
      joint.pos.y += (joint.pos.y - oldPos.y)*(1 - friction) + gravity.y*!joint.fixed;
    }
  })
  
  oldPos = ball.oldPos;
  ball.oldPos = JSON.parse(JSON.stringify(ball.pos));
  ball.pos.x += (ball.pos.x - oldPos.x)*(1 - friction) + gravity.x;
  ball.pos.y += (ball.pos.y - oldPos.y)*(1 - friction) + gravity.y;
}

function applyConstraints() {
  for (var i = 0; i < substeps; i++) {
    constrainAll();
  }
}

function constrainAll() {
  joints.forEach((joint) => {
    if (!(joint.id.endsWith('0') || joint.id.endsWith(netDimensions[1]))) {
      return;
    }
    
    var distVec = createVector(joint.pos.x - ball.pos.x, joint.pos.y - ball.pos.y);
    var oldDistVec = distVec.copy();
    if (distVec.mag() < ballRadius) {
      distVec.setMag(ballRadius);
      if (joint.fixed) {
        ball.pos.x = joint.pos.x - distVec.x;
        ball.pos.y = joint.pos.y - distVec.y;
      } else {
        ball.pos.x += (oldDistVec.x - distVec.x)*joint.mass/(ball.mass*joint.mass);
        ball.pos.y += (oldDistVec.y - distVec.y)*joint.mass/(ball.mass*joint.mass);

        joint.pos.x -= (oldDistVec.x - distVec.x)*ball.mass/(ball.mass*joint.mass);
        joint.pos.y -= (oldDistVec.y - distVec.y)*ball.mass/(ball.mass*joint.mass);
      }
    }
  });
  
  if (ball.pos.y > height - 30 - ballRadius) {
    ball.pos.y = height - 30 - ballRadius;
  }
  if (ball.pos.y < 30 + ballRadius) {
    ball.pos.y = 30 + ballRadius;
  }
  if (ball.pos.x > width - 30 - ballRadius) {
    ball.pos.x = width - 30 - ballRadius;
  }
  if (ball.pos.x < 30 + ballRadius) {
    ball.pos.x = 30 + ballRadius;
  }
  
  connections.forEach((connection) => {
    var ends = [jointById(connection.ends[0]), jointById(connection.ends[1])];
    var oldEnds = JSON.parse(JSON.stringify(ends));
    var jointConnection = createVector(ends[1].pos.x - ends[0].pos.x, ends[1].pos.y - ends[0].pos.y);
    var oldJointConnection = jointConnection.copy();
    jointConnection.setMag(connection.length);
    
    if (ends[0].fixed) {
      ends[1].pos.x = ends[0].pos.x + jointConnection.x;
      ends[1].pos.y = ends[0].pos.y + jointConnection.y;
    } else if (ends[1].fixed) {
      ends[0].pos.x = ends[1].pos.x - jointConnection.x;
      ends[0].pos.y = ends[1].pos.y - jointConnection.y;
    } else {
      ends[0].pos.x += (oldJointConnection.x - jointConnection.x)/2;
      ends[0].pos.y += (oldJointConnection.y - jointConnection.y)/2;
      
      ends[1].pos.x -= (oldJointConnection.x - jointConnection.x)/2;
      ends[1].pos.y -= (oldJointConnection.y - jointConnection.y)/2;
    }
  });
}