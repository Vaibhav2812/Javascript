let progressBar = document.getElementById('progress-bar');
let progress = document.getElementById('progress');
let width = '10'
console.log(progress);
nIntervId  = setInterval(() => {
    if (width >= 100) {
        clearInterval(nIntervId);
        return;
    }
    width = `${(+width) + 10}`
    progress.style.width = width + '%';
}, 1000)

function stopProgress(w) {
    if (w >= 100) {
        clearInterval(nIntervId);
    }
}

