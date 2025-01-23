import { store } from "./store.js";

export function init() {
  let unsubscribeTotal = null;
  let unsubscribeAverage = null;

  render();

  function render() {
    const contentDiv = document.getElementById("content");
    const rankContainer = document.createElement("div");

    const heading = document.createElement("h2");
    heading.innerText = "Test";
    rankContainer.appendChild(heading);

    const totalCheckboxLabel = document.createElement("label");
    totalCheckboxLabel.innerText = "Subscribe to Total Marks: ";
    const totalCheckbox = document.createElement("input");
    totalCheckbox.type = "checkbox";
    totalCheckbox.addEventListener("change", () =>
      toggleTotalSubscription(totalCheckbox.checked)
    );
    rankContainer.appendChild(totalCheckboxLabel);
    rankContainer.appendChild(totalCheckbox);

    const avgCheckboxLabel = document.createElement("label");
    avgCheckboxLabel.innerText = "Subscribe to Average Marks: ";
    const avgCheckbox = document.createElement("input");
    avgCheckbox.type = "checkbox";
    avgCheckbox.addEventListener("change", () =>
      toggleAverageSubscription(avgCheckbox.checked)
    );
    rankContainer.appendChild(avgCheckboxLabel);
    rankContainer.appendChild(avgCheckbox);

    const totalDiv = document.createElement("div");
    totalDiv.id = "totalMarks";
    rankContainer.appendChild(totalDiv);

    const avgDiv = document.createElement("div");
    avgDiv.id = "averageMarks";
    rankContainer.appendChild(avgDiv);

    contentDiv.innerHTML = "";
    contentDiv.appendChild(rankContainer);
  }

  function toggleTotalSubscription(checked) {
    const totalDiv = document.getElementById("totalMarks");

    if (checked) {
      unsubscribeTotal = store.subscribe(() => {
        const state = store.state;
        totalDiv.innerText = `Total Marks: ${state.total}`;
      });

      const state = store.state;
      totalDiv.innerText = `Total Marks: ${state.total}`;
    } else {
      if (unsubscribeTotal) {
        unsubscribeTotal();
        unsubscribeTotal = null;
      }

      totalDiv.innerText = "";
    }
  }

  function toggleAverageSubscription(checked) {
    const avgDiv = document.getElementById("averageMarks");

    if (checked) {
      unsubscribeAverage = store.subscribe(() => {
        const state = store.state;
        avgDiv.innerText = `Average Marks: ${state.average}`;
      });

      const state = store.state;
      avgDiv.innerText = `Average Marks: ${state.average}`;
    } else {
      if (unsubscribeAverage) {
        unsubscribeAverage();
        unsubscribeAverage = null;
      }

      avgDiv.innerText = "";
    }
  }

  return () => {
    if (unsubscribeTotal) {
      unsubscribeTotal();
      unsubscribeTotal = null;
    }
    if (unsubscribeAverage) {
      unsubscribeAverage();
      unsubscribeAverage = null;
    }
  };
}
