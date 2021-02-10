const navOpen = () => {
    const burger = document.querySelector(".burger");
    const container = document.querySelector(".container")
    const links = document.querySelector(".links")
    const login = document.querySelector(".login")

    burger.addEventListener('click', () => {
        container.classList.toggle("container-active");
        links.classList.toggle("links-active");
        login.classList.toggle("login-active");
    });
}

navOpen();







// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// function isValidPassword(password, username) {
//     if (password.length < 8) {
//         return false;
//     }
//     if(password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if(password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true;
// }


1


// var showNav = document.getElementById("bgcover")
// var hideNav = document.getElementById("hamburger")

// function toggleHamburger(){
//     showNav.classList.toggle("bgcover")
//     hideNav.classList.toggle("hamburger")
// }

// hamburger.addEventListener("click", toggleHamburger)


// var menuLinks = document.querySelectorAll(".navlist")
// menuLinks.forEach(
//     function(menuLink) {
//         menuLink.addEventListener("click", toggleHamburger)
//     }
// )




















































// var bgcover = document.querySelector('.bgcover')
// var hamburger = document.querySelector('.hamburger')

// // const container = document.getElementById('container')

// hamburger.addEventListener('click', () => hamburger.classList.add('showClose')) 

// bgcover.addEventListener('click', () => bgcover.classList.add('showNav')) 



