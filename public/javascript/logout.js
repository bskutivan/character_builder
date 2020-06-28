const logout = document.querySelector('#logout');

async function logoutHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'Content-type':'application/json'}
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.status)
    }
    
}

logout.addEventListener('click', logoutHandler);
