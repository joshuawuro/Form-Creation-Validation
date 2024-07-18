async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const users = await response.json();

        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        userList.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch {
        dataContainer.innerHTML = '';
        dataContainer.textContent = ('Failed to load user data.');
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
});