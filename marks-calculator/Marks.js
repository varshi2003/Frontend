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

  const updateMarksContainer = document.createElement("div");
  updateMarksContainer.className = "marks-container";

  const heading = document.createElement("h2");
  heading.innerText = "Input Marks";
  updateMarksContainer.appendChild(heading);

  const form = document.createElement("form");
  form.id = "updateMarksForm";

  const subjects = {
    os: "Operating Systems",
    cn: "Computer Networks",
    dbms: "DBMS",
    dsa: "Data Structures",
    java: "Java",
  };

  Object.keys(subjects).forEach((subjectKey) => {
    const wrapper = document.createElement("div");
    wrapper.className = "input-group";

    const label = document.createElement("label");
    label.setAttribute("for", subjectKey);
    label.innerText = `${subjects[subjectKey]}: `;

    const input = document.createElement("input");
    input.type = "number";
    input.id = subjectKey;
    input.value = state.marks[subjectKey] || 0;
    input.className = "marks-input";

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    form.appendChild(wrapper);
  });

  const submitButton = document.createElement("button");
  submitButton.className = "submit-btn";
  submitButton.type = "submit";
  submitButton.innerText = "View result";

  form.appendChild(submitButton);
  updateMarksContainer.appendChild(form);

  const feedbackParagraph = document.createElement("p");
  feedbackParagraph.id = "feedback";
  updateMarksContainer.appendChild(feedbackParagraph);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const updatedMarks = {};
    Object.keys(subjects).forEach((subjectKey) => {
      const value = document.getElementById(subjectKey).value;
      updatedMarks[subjectKey] = value ? parseInt(value) : 0;
    });

    store.setState({ marks: updatedMarks });
    store.calculateDerivedState();

    feedbackParagraph.innerText = "Updated successfully!";
    feedbackParagraph.style.color = "Blue";
    feedbackParagraph.style.animation = "fadeIn 0.5s";

    setTimeout(() => {
      feedbackParagraph.innerText = "";
    }, 3000);
  });

  contentDiv.appendChild(updateMarksContainer);
}
