

const handleKeyDown = (event) => {
    const imgEl = document.querySelector('.clapping');
    if (event.key === " ") {
        const audioEl = document.getElementById('audio');
        if (imgEl.src.includes('moving-clap.gif')) {
            audioEl.pause()
            imgEl.src = './assets/media/static-clap.gif'
        } else {
            audioEl.currentTime = 0
            audioEl.play()
            imgEl.src = './assets/media/moving-clap.gif'
            confetti()
        }
    }
};

const handleClick = () => {
    const imgEl = document.querySelector('.clapping');
    const audioEl = document.getElementById('audio');
    if (imgEl.src.includes('moving-clap.gif')) {
        audioEl.pause()
        imgEl.src = './assets/media/static-clap.gif'
    } else {
        audioEl.currentTime = 0
        audioEl.play()
        imgEl.src = './assets/media/moving-clap.gif'
        confetti()
    }
};



document.addEventListener("DOMContentLoaded", function() {
    const imgEl = document.querySelector('.clapping');
    if (imgEl) {
        imgEl.addEventListener("click", handleClick);
    } else {
        console.error("Element with class 'clapping' not found");
    }
    document.addEventListener("keydown", handleKeyDown)
});