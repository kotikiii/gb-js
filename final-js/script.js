const stars = document.querySelectorAll('.bx-star');

stars.forEach((star, i) =>{
    star.addEventListener('click', ()=>{
        for (let j = 0; j <= i; j++) {
            const clickedStar = stars[j];
            clickedStar.classList.replace('bx-star', 'bxs-star')
        }
    })
})

function checkPassword(e){
    const password = document.querySelector('#client-password');
    const passwordValue = password.value;
    const verifyPassword = document.querySelector('#client-password-verify');
    const verifyPasswordValue = verifyPassword.value;
    if(passwordValue === verifyPasswordValue){
        password.classList.add('passwordTrue');
        verifyPassword.classList.add('passwordTrue');
    } else {
        password.classList.add('passwordFalse');
        verifyPassword.classList.add('passwordFalse');
    }
}


