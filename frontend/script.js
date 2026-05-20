const API_URL = '/api/notes';

async function loadNotes() {

    const response = await fetch(API_URL);

    const notes = await response.json();

    const notesDiv = document.getElementById('notes');

    notesDiv.innerHTML = '';

    notes.forEach(note => {

        notesDiv.innerHTML += `
            <div class="note">
                ${note.text}
            </div>
        `;
    });
}

async function addNote() {

    const input = document.getElementById('noteInput');

    const text = input.value;

    if (!text) return;

    await fetch(API_URL, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ text })
    });

    input.value = '';

    loadNotes();
}

loadNotes();
