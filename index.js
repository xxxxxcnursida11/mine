function changeMessage() {
    const messages = [
        "Welcome to our  community!",
        "Hello member! Glad to see you here.",
        "Enjoy your stay with us!"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = messages[randomIndex];
}
