const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById('search-term').value;

  const searchResults = await searchForTerm(searchTerm);
  // Do something with the search results, such as display them on the page
});
