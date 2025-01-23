import { store } from './store.js';

export function init() {
  
    render(); 

    
    store.subscribe(render);

    
    return () => store.unsubscribe(render);
}

function render() {
    const state = store.state;

    
    const resultsContainer = document.createElement('div');
    
   
    const resultsHeading = document.createElement('h2');
    resultsHeading.textContent = 'Results';
    resultsContainer.appendChild(resultsHeading);

   
    const marksList = document.createElement('div');
    for (const subject in state.marks) {
        const subjectElement = document.createElement('p');
        subjectElement.textContent = `${capitalize(subject)}: ${state.marks[subject]}`;
        marksList.appendChild(subjectElement);
    }

    resultsContainer.appendChild(marksList);

  
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total Marks: ${state.total}`;
    resultsContainer.appendChild(totalElement);

    const averageElement = document.createElement('p');
    averageElement.textContent = `Average Marks: ${state.average.toFixed(2)}`;
    resultsContainer.appendChild(averageElement);

  
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    contentDiv.appendChild(resultsContainer);
}


function capitalize(subject) {
    return subject.charAt(0).toUpperCase() + subject.slice(1);
}