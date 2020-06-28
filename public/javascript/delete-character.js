async function deleteFormHandler(event) {
    event.preventDefault();

    const character_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ]

    const response = await fetch(`/api/character/${character_id}`, {
        method: 'DELETE',
    });

    if(response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}



document.querySelector('.delete-btn').addEventListener('click', deleteFormHandler);