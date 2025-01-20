// API base URL
const BASE_URL = "http://localhost:8080/api";

// References to DOM elements
const toggleViewButton = document.getElementById("toggleView");
const contentDiv = document.getElementById("content");

// Variable to track current view
let isAdminView = false;

// Event listener for toggle button
toggleViewButton.addEventListener("click", () => {
  isAdminView = !isAdminView;
  toggleViewButton.textContent = isAdminView
    ? "Switch to User View"
    : "Switch to Admin View";
  renderContent();
});

// Render content based on the current view
function renderContent() {
  if (isAdminView) {
    renderAdminView();
  } else {
    renderUserView();
  }
}

// Fetch and render user view
function renderUserView() {
  contentDiv.innerHTML = `
    <h2>User Survey Form</h2>
    <form id="surveyForm">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" required><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br>
      <label for="response">Response:</label><br>
      <textarea id="response" name="response" required></textarea><br>
      <button type="submit">Submit</button>
    </form>
  `;

  const surveyForm = document.getElementById("surveyForm");
  surveyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      response: document.getElementById("response").value,
    };

    try {
      await fetch(`${BASE_URL}/responses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Response submitted successfully!");
      surveyForm.reset();
    } catch (error) {
      console.error("Error submitting response:", error);
      alert("Failed to submit response.");
    }
  });
}

// Fetch and render admin view
async function renderAdminView() {
  contentDiv.innerHTML = `<h2>Admin View</h2><div id="adminContent"></div>`;
  const adminContent = document.getElementById("adminContent");

  try {
    const response = await fetch(`${BASE_URL}/responses?page=1&size=5`);
    const data = await response.json();

    adminContent.innerHTML = `
      <table border="1" style="width: 100%; text-align: left;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Response</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${data.content
            .map(
              (item) => `
            <tr>
              <td>${item.name}</td>
              <td>${item.email}</td>
              <td>${item.response}</td>
              <td>${item.status}</td>
              <td>
                <button data-id="${item.id}" class="approveButton">Approve</button>
              </td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;

    document.querySelectorAll(".approveButton").forEach((button) => {
      button.addEventListener("click", async () => {
        const id = button.getAttribute("data-id");
        try {
          await fetch(`${BASE_URL}/responses/${id}/approve`, {
            method: "PUT",
          });
          alert("Response approved!");
          renderAdminView();
        } catch (error) {
          console.error("Error approving response:", error);
          alert("Failed to approve response.");
        }
      });
    });
  } catch (error) {
    console.error("Error fetching responses:", error);
    adminContent.innerHTML = `<p>Failed to load responses.</p>`;
  }
}

// Initial rendering
renderContent();
