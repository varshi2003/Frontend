// // Load forms for user view
// export async function loadUserForms(apiUrl) {
//     const content = document.getElementById('content');
//     try {
//       const response = await fetch(`${apiUrl}/forms`);
//       if (!response.ok) throw new Error('Failed to fetch forms');
//       const forms = await response.json();
  
//       content.innerHTML = '<h2>Available Surveys</h2>';
//       forms.forEach(createForm);
//     } catch (error) {
//       content.innerHTML = '<p>Error loading forms.</p>';
//       console.error(error);
//     }
//   }
  
//   // Create a form dynamically
//   function createForm(form) {
//     const formContainer = document.createElement('div');
//     formContainer.className = 'form-container';
  
//     formContainer.innerHTML = `<h3>${form.title}</h3>`;
//     form.questions.forEach((question, index) => {
//       const label = document.createElement('label');
//       label.textContent = `Q${index + 1}: ${question}`;
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.name = `question${index + 1}`;
//       formContainer.appendChild(label);
//       formContainer.appendChild(input);
//       formContainer.appendChild(document.createElement('br'));
//     });
  
//     const submitButton = document.createElement('button');
//     submitButton.textContent = 'Submit Response';
//     formContainer.appendChild(submitButton);
  
//     submitButton.addEventListener('click', async () => {
//       const inputs = formContainer.querySelectorAll('input');
//       const answers = Array.from(inputs).map(input => input.value);
//       await submitResponse(form.id, answers, apiUrl);
//     });
  
//     document.getElementById('content').appendChild(formContainer);
//   }
  
//   // Submit a response
//   async function submitResponse(formId, answers, apiUrl) {
//     try {
//       const response = await fetch(`${apiUrl}/responses`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ formId, answers, status: 'Pending' }),
//       });
  
//       if (response.ok) {
//         alert('Response submitted successfully!');
//       } else {
//         alert('Failed to submit response.');
//       }
//     } catch (error) {
//       alert('Error submitting response.');
//       console.error(error);
//     }
//   }
  