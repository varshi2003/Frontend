import { store } from "./store.js";

export function init() {
  render();
  store.subscribe(render);
  return () => store.unsubscribe(render);
}

function render() {
  const state = store.state;

  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const resultsContainer = document.createElement("div");

  const resultsHeading = document.createElement("h2");
  resultsHeading.textContent = "Results";
  resultsContainer.appendChild(resultsHeading);

  const subjects = {
    os: "Operating Systems",
    cn: "Computer Networks",
    dbms: "DBMS",
    dsa: "Data Structures",
    java: "Java",
  };

  const marksList = document.createElement("div");
  for (const subject in state.marks) {
    const subjectElement = document.createElement("p");
    subjectElement.textContent = `${subjects[subject]}: ${state.marks[subject]}`;
    marksList.appendChild(subjectElement);
  }
  resultsContainer.appendChild(marksList);

  const totalElement = document.createElement("p");
  totalElement.textContent = `Total Marks: ${state.total}`;
  resultsContainer.appendChild(totalElement);

  const averageElement = document.createElement("p");
  averageElement.textContent = `Average Marks: ${state.average.toFixed(2)}`;
  resultsContainer.appendChild(averageElement);

  const listIn100Element = document.createElement("p");
  listIn100Element.textContent = `List in 100: [${state.list_in_100.join(
    ", "
  )}]`;
  resultsContainer.appendChild(listIn100Element);

  const listIn200Element = document.createElement("p");
  listIn200Element.textContent = `List in 200: [${state.list_in_200.join(
    ", "
  )}]`;
  resultsContainer.appendChild(listIn200Element);

  contentDiv.appendChild(resultsContainer);
}
