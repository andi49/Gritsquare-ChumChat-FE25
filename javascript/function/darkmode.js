function darkMode() {
    const darkmodeButton = document.querySelector('#darkmodeButton');
    const main = document.querySelector('#main');
    const footer = document.querySelector('footer');
    const nav = document.querySelector('nav');
    const sendChatInputMessage = document.querySelector('.send-message');
    const sendChatInputArea = document.querySelector('.message-area');
    const headerLogin = document.querySelector('.header');
    const formBody = document.querySelector('.register-card');
    const inputlogin = document.querySelectorAll('.input-group');
    const loginButton = document.querySelector('#login-button')
    const registerButton = document.querySelector('#register-button')
    const placeHolderImg = document.querySelector('.placeHolderImg')

    if (!darkmodeButton || !main) {
        console.error("Element saknas i DOM");
        return;
    }

    darkmodeButton.addEventListener('click', () => {
        main.classList.toggle("dark-mode");
        if (footer) footer.classList.toggle('footer-dark');
        if (sendChatInputMessage) sendChatInputMessage.classList.toggle('send-message-dark');
        if (sendChatInputArea) sendChatInputArea.classList.toggle('message-area-dark');
        if (nav) nav.classList.toggle('nav-dark');
        if (headerLogin) headerLogin.classList.toggle('header-dark');
        if (formBody) formBody.classList.toggle('formBody-dark');
        if (inputlogin) {inputlogin.forEach(el => el.classList.toggle('input-group-dark'));}
        if (loginButton) loginButton.classList.toggle('loginButton-dark');
        if (registerButton) registerButton.classList.toggle('loginButton-dark');
         if (placeHolderImg) placeHolderImg.classList.toggle('placeHolderImg-dark');

    });
}

darkMode();