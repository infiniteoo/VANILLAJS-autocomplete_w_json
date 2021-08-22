const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

search.addEventListener("input", () => searchStates(search.value));

// search data.json and filter it
const searchStates = async (searchText) => {
  const res = await fetch("data.json");
  const states = await res.json();
  console.log(states);
};
