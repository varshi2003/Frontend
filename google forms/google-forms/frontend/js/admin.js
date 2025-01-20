// // Load responses for admin view with pagination
// export async function loadAdminResponses(apiUrl, page = 0, size = 5) {
//     const content = document.getElementById('content');
//     try {
//       const response = await fetch(`${apiUrl}/responses/page?page=${page}&size=${size}`);
//       if (!response.ok) throw new Error('Failed to fetch responses');
//       const { content: responses, totalPages } = await response.json();
  
//       content.innerHTML = '<h2>Admin: Responses</h2>';
//       responses.forEach(displayResponse);
  
//       setupPagination(apiUrl, totalPages, page);
//     } catch (error) {
//       content.innerHTML = '<p>Error loading responses.</p>';
//       console.error(error);
//     }
//   }
  
//   // Display individual response
//   function displayResponse(response) {
//     const responseContainer = document.createElement('div');
//     responseContainer.className = 'response-container';
  
//     responseContainer.innerHTML = `
//       <p><strong>Form ID:</strong> ${response.formId}</p>
//       <p><strong>Answers:</strong> ${response.answers.join(', ')}</p>
//       <p><strong>Status:</strong> ${response.status}</p>
//       <button>Approve</button>
//     `;
  
//     const approveButton = responseContainer.querySelector('button');
//     approveButton.addEventListener('click', async () => {
//       await approveResponse(response.id, apiUrl);
//     });
  
//     document.getElementById('content').appendChild(responseContainer);
//   }
  
//   // Approve a response
//   async function approveResponse(responseId, apiUrl) {
//     try {
//       const response = await fetch(`${apiUrl}/responses/${responseId}/approve`, {
//         method: 'PUT',
//       });
  
//       if (response.ok) {
//         alert('Response approved successfully!');
//         loadAdminResponses(apiUrl);
//       } else {
//         alert('Failed to approve response.');
//       }
//     } catch (error) {
//       alert('Error approving response.');
//       console.error(error);
//     }
//   }
  
//   // Setup pagination
//   function setupPagination(apiUrl, totalPages, currentPage) {
//     const pagination = document.createElement('div');
//     pagination.className = 'pagination';
  
//     for (let i = 0; i < totalPages; i++) {
//       const button = document.createElement('button');
//       button.textContent = i + 1;
//       button.disabled = i === currentPage;
//       button.addEventListener('click', () => loadAdminResponses(apiUrl, i));
//       pagination.appendChild(button);
//     }
  
//     document.getElementById('content').appendChild(pagination);
//   }
  