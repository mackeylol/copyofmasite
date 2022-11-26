$(document).ready(function(){
	var cmpt = "";	//电脑用的
	var user = "";	//用户用的
	var group = [0,0,0,0,0,0,0,0,0];	//记录九个棋格，0表示没下，1表示电脑，2表示玩家

	$(".choose").fadeIn(1000);
	$("#cha").on("click",function(){
		$(".choose").fadeOut(1);
		$(".back").fadeOut(1);
		cmpt = "O";
		user = "×";
		pcStep();
	});
	$("#O").on("click",function(){
		$(".choose").fadeOut(1);
		$(".back").fadeOut(1);
		cmpt="×";
		user="O";
		pcStep();
	});

	//电脑下棋，只下一步
	var pcStep = function(){
		var step = 0;		//记录当前是电脑下的第几步
		for(var i in group){
			if(group[i] !== 0){
				//如果某格已经下过了，step++
				step++;
			}
		}
		if(step %2 !== 0){
			//如果用户还没下，就return
			return;
		}

		if(step === 0){
			//如果电脑当前需要下第一步，因为是第一步所以不需要考虑该位置是否被别人下过的问题
			var proStep = [0,2,6,8,4];	//第一步允许下的地方，四个角与中央，这里用的是从0开始
			var posit = parseInt(Math.random()*5,10);		//从0-4中随机生成一个数，作为proStep的下标，即随机选择一个格子下棋
			group[proStep[posit]] = 1;			//电脑下棋
			$("#span-"+(proStep[posit]+1)).html(cmpt);

			judge();
			return;
		}

		if(step === 2){
			//如果是电脑下的第二步,分两种情况，分别是电脑第一步下了正中和四个角
			if(group[4] === 1){
				//如果电脑第一步下的正中，又分两种情况，对方下的是四个角还是中间
				var corStep = [0,2,6,8];	//四个角在group的索引
				for(var t = 0; t<4;t++){
					if(group[corStep[t]] === 2){
						//如果玩家下的是某一个角，那就下他对角
						var posit = 0;		//这里表示的是电脑要下的位置
						if(corStep[t] === 0){
							posit = 8;
						}else if(corStep[t] === 8){
							posit = 0;
						}else if(corStep[t] === 2){
							posit = 6;
						}else if(corStep[t] === 6){
							posit = 2;
						}
						posit = parseInt(posit);
						group[posit] = 1;	//电脑下棋
						$("#span-"+(posit+1)).html(cmpt);
						judge();
						return;
					}
				}
				//电脑下的不是某个角，而是在每一行或列的中间位置,电脑就下一个靠着它的角
				var posit_g=[0,0];	//如果下在中间，就会有两个角靠着它，随机选一个
				var posit = 0;				//这就是随机选择之后的位置
				if(group[1] === 2){
					posit_g[0] = 0;
					posit_g[1] = 2;
				}else if(group[3] === 2){
					posit_g[0] = 0;
					posit_g[1] = 6;
				}else if(group[5] === 2){
					posit_g[0] = 2;
					posit_g[1] = 8;
				}else if(group[7] === 2){
					posit_g[0] = 6;
					posit_g[1] = 8;
				}
				posit = posit_g[parseInt(Math.random()*2)];
				posit = parseInt(posit);
				group[posit] = 1;	//电脑下棋
				$("#span-"+(posit+1)).html(cmpt);
				judge();
				return;
			}else{
				//如果电脑第一步下的不是正中，而是四个角
				//分两种情况，如果对方没下正中，那么就下正中，如果对方下了正中，就下第一步的对角
				if(group[4] === 0){
					//玩家没下正中，则下正中
					group[4] = 1;
					$("#span-5").html(cmpt);
					judge();
					return;
				}
				//下第一步的对角
				var posit = 0;	//记录要下的从0起的位置
				if(group[0] === 1){
					posit = 8;
				}else if(group[8] === 1){
					posit = 0;
				}else if(group[2] === 1){
					posit = 6;
				}else if(group[6] === 1){
					posit = 2;
				}
				posit = parseInt(posit);
				group[posit] = 1;	//电脑下棋
				$("#span-"+(posit+1)).html(cmpt);
				judge();
				return;
			}
		}

		/*如果是第二步以后，分三步
		* 1、判断自己是否可以三连珠，如果可以就连上就赢了
		* 2、判断对方是否可以三连珠，如果有就堵上，不然就输了
		* 3、遍历剩下的还没下的格子，看下在哪一个，能让自己一条线上存在两粒棋子且都能实现三连珠的  这样的线最多		
		*/

		//第一步
		var first_arr = checkThree(1,group);
		if(first_arr.length !== 0){
			//如果自己可以三连珠
			var posit = first_arr[0];
			posit = parseInt(posit);
			group[posit] = 1;	//电脑下棋
			$("#span-"+(posit+1)).html(cmpt);
			judge();
			return;
		}
		//如果自己不能三连珠，就第二步，检查对方是否能三连珠
		var second_arr = checkThree(2,group);
		if(second_arr.length !== 0){
			//如果对方可以三连珠
			//console.log(second_arr[0]);
			var posit = second_arr[0];
			posit = parseInt(posit);
			group[posit] = 1;	//电脑下棋
			$("#span-"+(posit+1)).html(cmpt);
			judge();
			return;
		}
		//如果自己和对方都不能三连珠，进入第三步
		var third_posit = 0;
		var third_max = -1;
		for(var temp in group){
			if(group[temp] === 0){
				if(third_max === -1){
					third_posit = temp;
					third_max = 0;
				}
				var ttt = [].concat(group);
				ttt[temp] = 1;
				var temp_arr = checkThree(1,ttt);
				if(temp_arr.length > third_max){
					//如果当前点能让更多个连珠，就决定是它了
					third_max = temp_arr.length;
					third_posit = temp;
				}
			}
		}
		group[third_posit] = 1;	//电脑下棋
		//这里必须先转成数字，不然会当成字符串相加，会不对
		var wtf = parseInt(third_posit);
		wtf+=1;
		$("#span-"+wtf).html(cmpt);
		judge();
		return;
	};

	//检查是否有一点可以三连珠，参数kind如果是1，检查电脑，参数如果是2，检查玩家，如果检查到下某一点可以三连珠，
	//就返回该格从0开始的下标（数组形式，所有情况都在），如果没找到，返回[]
	//参数gp是参考的数组，正常情况下就是group，但是考虑到第三步需要判断每一个格子的，那时候要传一个临时数组了
	var checkThree = function(kind,gp){
		var situ = [];			//用来记录所有需要返回的值
		var allPossible = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];		//记录八条线
		for(var i in allPossible){
			var x = allPossible[i][0];
			var y = allPossible[i][1];
			var z = allPossible[i][2];
			if((gp[x] === kind && gp[y] === kind && gp[z] === 0) || (gp[x] === 0 && gp[y] === kind && gp[z] === kind) || (gp[x] === kind && gp[y] === 0 && gp[z] === kind)){
				//迭代判断吧，就不复制粘贴了
				//如果满足上述条件
				//console.log("Three:"+allPossible[i]);
				if(gp[x] === 0){
					situ.push(x);
					continue;
				}else if(gp[y] === 0){
					situ.push(y);
					continue;
				}else if(gp[z] === 0){
					situ.push(z);
					continue;
				}
			}
		}
		return situ;
	};


	//输赢平的结果显示  state取值1,2,3,1表示电脑赢，2表示玩家赢，3表示平局，a,b,c表示连起来的三格
	var result = function(state,a,b,c){
		if(state === 1){
			console.log('lose');
			$(".loser").html("LOSE!");

		}else if(state === 2){
			console.log('win');
			$(".loser").html("WIN!");

		}else if(state === 3){
			console.log('tie');
			$(".loser").html("TIE!");

		}
		if(state !== 3){
			$("#tic-"+a).css("background-color","#877f6c");
			$("#tic-"+b).css("background-color","#877f6c");
			$("#tic-"+c).css("background-color","#877f6c");
		}
		setTimeout(function(){
			if(state !== 3){
				$("#tic-"+a).css("background-color","#fff");
				$("#tic-"+b).css("background-color","#fff");
				$("#tic-"+c).css("background-color","#fff");
			}
			$(".loser").fadeIn(400,function(){
					setTimeout(function(){
					beginAgain();
				},2000);
			});
		},1500);

		
		
	};

	//出了结果就重新开始
	var beginAgain= function(){
		for(var yyy = 0; yyy < 9;yyy++){
			group[yyy]=0;
			$("#span-"+(yyy+1)).html("");
		}
		$(".loser").fadeOut(1,function(){
			pcStep();
		});
		
	}

	//判断输赢与和棋，一共10种情况，8负1平1还没下完
	var judge = function(){
		if(group[0] === group[1] && group[1] === group[2] && group[0]!== 0){
			//第一行连起来了，这样写是因为格子的编号是从0开始，
			result(group[0],1,2,3);
		}else if(group[3] === group[4] && group[4] === group[5] && group[3] !== 0){
			//第二行
			result(group[3],4,5,6);
		}else if(group[6] === group[7] && group[7] === group[8] && group[6] !== 0){
			//第三行
			result(group[6],7,8,9);
		}else if(group[0] === group[3] && group[3] === group[6] && group[0] !== 0){
			//第一列
			result(group[0],1,4,7);
		}else if(group[1] === group[4] && group[4] === group[7] && group[1] !== 0){
			//第二列
			result(group[1],2,5,8);
		}else if(group[2] === group[5] && group[5] === group[8] && group[2] !== 0){
			//第三列
			result(group[2],3,6,9);
		}else if(group[0] === group[4] && group[4] === group[8] && group[0] !== 0){
			//主对角线
			result(group[0],1,5,9);
		}else if(group[2] === group[4] && group[4] === group[6] && group[2] !== 0){
			//次对角线
			result(group[2],3,5,7);
		}else{
			//没分出胜负
			var isTie = true;
			for(var i = 0; i < 9;i++){
				if(group[i] === 0){
					//还有格子没下，表示棋还没下完
					isTie = false;
				}
			}
			//平局
			if(isTie){
				result(3,0,0,0);
			}else{
				var step = 0;		//记录当前是电脑下的第几步
				for(var i in group){
					if(group[i] !== 0){
					//如果某格已经下过了，step++
						step++;
					}
				}
				if(step %2 === 0 && step !== 0){
					//如果用户下了，就电脑下
					pcStep();	
				}
			}
		}
	};


	//初始化棋盘点击事件,闭包以获取对应的o
	var initClick = function(i){
		$("#tic-"+i).on("click",function(){
			var step = 0;		//记录当前是下的第几步
			for(var j in group){
				if(group[j] !== 0){
					//如果某格已经下过了，step++
					step++;
				}
			}
			if(step %2 === 0){
				//如果电脑还没下，点了也没用
				return;
			}


			if(group[i-1] === 0){
				//如果没下,那么按了才有效,并将之设置为玩家下的，并判断是否和棋或者赢了
				//console.log("pressed:"+i);
				//console.log(group);
				group[i-1] = 2;
				$("#span-"+i).html(user);
				judge();
			}
		});
	};

	for(var i=1;i<=9;i++){
		initClick(i);		//初始化棋盘点击事件	
	}

	


});