// Crear el título
const title = document.createElement('h1');
title.textContent = 'Gestión de Eventos para el Festival';
document.body.appendChild(title);

// Crear el formulario
const form = document.createElement('form');
form.id = 'event-form';

// Campo de nombre
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'event-name';
nameInput.placeholder = 'Nombre del evento';
nameInput.required = true;

// Campo de fecha
const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.id = 'event-date';
dateInput.required = true;

// Campo de descripción
const descriptionInput = document.createElement('textarea');
descriptionInput.id = 'event-description';
descriptionInput.placeholder = 'Descripción breve';
descriptionInput.required = true;

// Botón de agregar evento
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Agregar Evento';

form.appendChild(nameInput);
form.appendChild(dateInput);
form.appendChild(descriptionInput);
form.appendChild(submitButton);
document.body.appendChild(form);

// Crear lista de eventos
const eventListTitle = document.createElement('h2');
eventListTitle.textContent = 'Lista de Eventos';
document.body.appendChild(eventListTitle);

const eventList = document.createElement('ul');
eventList.id = 'event-list';
document.body.appendChild(eventList);

// Crear contador de eventos pendientes
const pendingCountText = document.createElement('p');
pendingCountText.id = 'pending-count';
pendingCountText.textContent = 'Eventos pendientes: 0';
document.body.appendChild(pendingCountText);

// Lógica de la aplicación
let pendingCount = 0;

// Agregar evento
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;

    const eventItem = document.createElement('li');
    eventItem.classList.add('event-item');

    const eventCheckbox = document.createElement('input');
    eventCheckbox.type = 'checkbox';
    eventCheckbox.addEventListener('change', toggleEvent);

    const eventContent = document.createElement('span');
    eventContent.innerHTML = `<strong>${name}</strong> (${date}): ${description}`;

    eventItem.appendChild(eventCheckbox);
    eventItem.appendChild(eventContent);
    eventList.appendChild(eventItem);

    updatePendingCount(1);

    form.reset();
});

// Marcar o desmarcar evento como completado
function toggleEvent(e) {
    const eventItem = e.target.parentElement;
    eventItem.classList.toggle('completed');
    updatePendingCount(eventItem.classList.contains('completed') ? -1 : 1);
}

// Actualizar contador de eventos pendientes
function updatePendingCount(change) {
    pendingCount += change;
    pendingCountText.textContent = `Eventos pendientes: ${pendingCount}`;
}

// Estilos en JavaScript
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.maxWidth = '600px';
document.body.style.margin = '0 auto';
document.body.style.padding = '20px';

title.style.color = '#333';
eventListTitle.style.color = '#333';

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';
form.style.marginBottom = '20px';

eventList.style.listStyle = 'none';
eventList.style.padding = '0';

submitButton.style.padding = '10px';
submitButton.style.backgroundColor = '#007bff';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.cursor = 'pointer';
