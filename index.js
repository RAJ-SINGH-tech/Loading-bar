const bar = document.querySelector('.loading-bar-front');
const counter = document.querySelector('.counter');

let idx = 0;

updateLoading();

function updateLoading() {
    counter.textContent = idx + "%";
    bar.style.width = idx + "%";
    idx++;
    if(idx < 101)
        setTimeout(updateLoading, 20);
}

