const dataJs = JSON.parse(dataJson);

const usersBox = document.querySelector('.users-box')
dataJs.forEach((el) => {
    usersBox.insertAdjacentHTML(
    'beforeend',
    `
    <div class="user" id="${el.id}">
    <img src="${el.photo}">
    <div class="user-content">
    <p class="user-name"> <span>Name: </span>${el.name}</p>
    <p class="user-username"><span>Username: </span>${el.username}</p>
    <p class="user-email"><span>E-mail: </span>${el.email}</p>
    <p class="user-phone"><span>Phone Number: </span>${el.phone}</p>
    </div>
    </div>
    `
    );
});

