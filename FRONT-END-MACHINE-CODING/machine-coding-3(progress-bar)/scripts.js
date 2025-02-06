const innerProgrssbarElem = document.getElementById('inner');
const startBtnElem = document.getElementById('start-btn');
console.log(innerProgrssbarElem);
console.log("document", document);

let isRunning = false;
startBtnElem.addEventListener("click", () => {
    if(isRunning) {
        return;
    }
    let width = 0;
    let id = setInterval(() => {
        isRunning = true;
        innerProgrssbarElem.style.width = `${width}%`;
        innerProgrssbarElem.innerText = `${width}%`;
        width = width + 10
        if(width > 100) {
            clearInterval(id);
            isRunning = false;
        }
    }, 1000)
})


