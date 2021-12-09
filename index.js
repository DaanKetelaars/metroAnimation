let metro = document.querySelector('.metro');
const haltes = document.getElementsByClassName("haltes");

const DOMstrings = {
    start: 'svg #group ellipse:nth-of-type(1)',
    eind: 'svg #group ellipse:nth-of-type(2)',
    popupOne: '.popupOne',
    popupTwo: '.popupTwo',
    popupThree: '.popupThree',
    popupFour: '.popupFour',
    popupFive: '.popupFive',
    popupSix: '.popupSix',
}

const popupOne = document.querySelector(DOMstrings.popupOne);
const popupTwo = document.querySelector(DOMstrings.popupTwo);
const popupThree = document.querySelector(DOMstrings.popupThree);
const popupFour = document.querySelector(DOMstrings.popupFour);
const popupFive = document.querySelector(DOMstrings.popupFive);
const popupSix = document.querySelector(DOMstrings.popupSix);

let endPosition = document.querySelector(DOMstrings.eind);
let startPosition = document.querySelector(DOMstrings.start);



const startPos = () => {
    let x = 80;
    let y = 70;
    startPosition.style.transform = "translate(" + x + "px, " + y + "px)";
}
startPos()

const haltePos = () => {
    let elementCount = 4;
    for (let i = 0; i < elementCount; i++) {
        const svgGroup = document.querySelector('svg #group #haltes');
        const el = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        let defaultPos = 200;
        el.classList.add("haltes");
        el.setAttribute('fill', "#1d1d1b");
        el.setAttribute('rx', 70);
        el.setAttribute('ry', 70);
        let x = (320 * i + defaultPos);
        let y = 220
        el.style.transform = "translate(" + x + "px, " + y + "px)";
        svgGroup.appendChild(el);
    }
}
haltePos()



const endPos = () => {
    let x = 1300;
    let y = 80;
    endPosition.style.transform = "translate(" + x + "px, " + y + "px)";
}
endPos()



// const startStyle = window.getComputedStyle(startPosition, null).getPropertyValue("transform")
// metro.style.transform = startStyle;

const keyFunc = (e) => {
    e.preventDefault();
    if (e.keyCode == 48) {
        const startStyle = window.getComputedStyle(startPosition, null).getPropertyValue("transform");
        let matrixArr = startStyle.split(", ");
        let translateX = parseInt(matrixArr[4]) - 5;
        let translateY = parseInt(matrixArr[5]) + 25;
        metro.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
        popupOne.classList.add('visible');
        popupTwo.classList.remove('visible');
        popupThree.classList.remove('visible');
        popupFour.classList.remove('visible');
        popupFive.classList.remove('visible');
        popupSix.classList.remove('visible');
    } else if (e.keyCode == 49) {
        const haltesStyle = window.getComputedStyle(haltes[0], null).getPropertyValue("transform");
        let matrixArr = haltesStyle.split(", ");
        let translateX = parseInt(matrixArr[4]) - 10;
        let translateY = parseInt(matrixArr[5]) + 23;
        metro.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
        popupTwo.classList.add('visible');
        popupOne.classList.remove('visible');
        popupThree.classList.remove('visible');
        popupFour.classList.remove('visible');
        popupFive.classList.remove('visible');
        popupSix.classList.remove('visible');
    } else if (e.keyCode == 50) {
        const haltesStyle = window.getComputedStyle(haltes[1], null).getPropertyValue("transform");
        let matrixArr = haltesStyle.split(", ");
        let translateX = parseInt(matrixArr[4]) - 22;
        let translateY = parseInt(matrixArr[5]) + 23;
        metro.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
        popupThree.classList.add('visible');
        popupOne.classList.remove('visible');
        popupTwo.classList.remove('visible');
        popupFour.classList.remove('visible');
        popupFive.classList.remove('visible');
        popupSix.classList.remove('visible');
    } else if (e.keyCode == 51) {
        const haltesStyle = window.getComputedStyle(haltes[2], null).getPropertyValue("transform");
        let matrixArr = haltesStyle.split(", ");
        let translateX = parseInt(matrixArr[4]) - 35;
        let translateY = parseInt(matrixArr[5]) + 23;
        metro.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
        popupFour.classList.add('visible');
        popupOne.classList.remove('visible');
        popupTwo.classList.remove('visible');
        popupThree.classList.remove('visible');
        popupFive.classList.remove('visible');
        popupSix.classList.remove('visible');
    } else if (e.keyCode == 52) {
        const haltesStyle = window.getComputedStyle(haltes[3], null).getPropertyValue("transform");
        let matrixArr = haltesStyle.split(", ");
        let translateX = parseInt(matrixArr[4]) - 48;
        let translateY = parseInt(matrixArr[5]) + 23;
        metro.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
        popupFive.classList.add('visible');
        popupOne.classList.remove('visible');
        popupTwo.classList.remove('visible');
        popupThree.classList.remove('visible');
        popupFour.classList.remove('visible');
        popupSix.classList.remove('visible');
    } else if (e.keyCode == 53) {
        const endStyle = window.getComputedStyle(endPosition, null).getPropertyValue("transform")
        let matrixArr = endStyle.split(", ");
        let translateX = parseInt(matrixArr[4]) - 52;
        let translateY = parseInt(matrixArr[5]) + 25;
        metro.style.transform = "translate(" + translateX + "px, " + translateY + "px)";
        popupSix.classList.add('visible');
        popupOne.classList.remove('visible');
        popupTwo.classList.remove('visible');
        popupThree.classList.remove('visible');
        popupFour.classList.remove('visible');
        popupFive.classList.remove('visible');
    } else {
        return false;
    }
}

const Func = (e) => {
    keyFunc(e)
}
document.addEventListener("keydown", Func);