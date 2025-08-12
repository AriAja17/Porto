function avatarClick() {
    const avatar = document.querySelector('.avatar');
    const emojis = ['🤖', '👽', '🦾', '🧠', '💀', '🎭', '🔥', '⚡'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    avatar.textContent = randomEmoji;
    
    avatar.style.transform = 'scale(0) rotate(720deg)';
    setTimeout(() => {
        avatar.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
}

setInterval(() => {
    const elements = document.querySelectorAll('.skill-card, .social-card, .contact-card');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    if (Math.random() > 0.8) {
        randomElement.style.filter = 'hue-rotate(180deg) saturate(2)';
        setTimeout(() => {
            randomElement.style.filter = 'none';
        }, 500);
    }
}, 2000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let konamiCode = [];
const konami = [38,38,40,40,37,39,37,39,66,65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > 10) konamiCode.shift();
    
    if (konamiCode.join(',') === konami.join(',')) {
        document.body.style.animation = 'chaos 1s linear infinite';
        document.body.style.filter = 'invert(1) hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.animation = '';
            document.body.style.filter = 'none';
        }, 5000);
    }
});

const cursors = ['🐸', '🦄', '👾', '🔥', '⚡', '🌮'];
let cursorIndex = 0;

document.addEventListener('click', function() {
    cursorIndex = (cursorIndex + 1) % cursors.length;
    document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><text x="10" y="15" text-anchor="middle" font-size="16">${cursors[cursorIndex]}</text></svg>'), auto`;
});