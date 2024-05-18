let Menu = () => {
    let faBars = document.querySelector(".fa.fa-bars");
    let Menu_List = document.querySelector(".Menu_List");

    faBars.addEventListener('click', () => {
        Menu_List.classList.toggle("Menu_Active");
    });
}
Menu();
let Login = () => {
    let faUser = document.querySelector(".fa.fa-user");
    let SignUp = document.querySelector(".Signup");

    faUser.addEventListener('click', () => {
        SignUp.classList.toggle("Signup_Active");
    });
}

Login();
