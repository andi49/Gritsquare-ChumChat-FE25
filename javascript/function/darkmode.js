function darkMode() {
    const darkmodeButton = document.querySelector('#darkmodeButton');
    const main = document.querySelector('#main');
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    const sendChatInputMessage = document.querySelector('.send-message')
    const sendChatInputArea = document.querySelector('.message-area')
    const headerLogin = document.querySelector('.header')
    const formBody = document.querySelector('.register-card')
   
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

    });
}

darkMode();