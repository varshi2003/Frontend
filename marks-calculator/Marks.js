import { store } from './store.js';

export function init() {
    render();  
    store.subscribe(render);

    return () => store.unsubscribe(render);
}

function render() {
    const state = store.state;
    const contentDiv = document.getElementById('content');

   
    const updateMarksContainer = document.createElement('div');

    

   
    const heading = document.createElement('h2');
    heading.innerText = " Input Marks";
    updateMarksContainer.appendChild(heading);


    const form = document.createElement('form');
    form.id = 'updateMarksForm';


    const subjects = ['Operating Systems', 'Computer Networks', 'DBMS', 'Data Structures', 'Java'];
    subjects.forEach(subject => {
        const label = document.createElement('label');
        label.setAttribute('for', subject);
        label.innerText = `${subject.charAt(0).toUpperCase() + subject.slice(1)}: `;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = subject;
        input.value = state.marks[subject];
        
        form.appendChild(label);
        form.appendChild(input);
    });

   
    const submitButton = document.createElement('button');
    submitButton.className = 'submit-btn';
    submitButton.type = 'submit';
    submitButton.innerText = 'View result';

    form.appendChild(submitButton);
    updateMarksContainer.appendChild(form);

    
    const feedbackParagraph = document.createElement('p');
    feedbackParagraph.id = 'feedback';
    updateMarksContainer.appendChild(feedbackParagraph);

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

     
        const updatedMarks = {};
        subjects.forEach(subject => {
            updatedMarks[subject] = parseInt(document.getElementById(subject).value);
        });

       
        const total = Object.values(updatedMarks).reduce((sum, mark) => sum + mark, 0);
        const average = total / subjects.length;

        
        store.setState({
            marks: updatedMarks,
            total: total,
            average: average
        });

      
        const feedbackParagraph = document.getElementById('feedback');
        feedbackParagraph.innerText = "Updated successfully!";
        feedbackParagraph.style.color = 'Blue';

      
        setTimeout(() => {
            feedbackParagraph.innerText = '';  
        }, 3000);
    });

   
    contentDiv.innerHTML = '';  
    contentDiv.appendChild(updateMarksContainer);
}