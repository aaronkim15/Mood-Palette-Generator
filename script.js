let calmArray = ["#b3e6ff", "#99e6ff", "#c2f0f0","#99d6ff", "#99e6ff"]
let energeticArray = ["#ff9900","#ffcc00", "#ffbf00", "#ff8000", "#ff9933"]
let tiredArray = ["#666699","#9999ff","#809fff","#b3b3ff","#8080ff"]


document.getElementById("calmBtn").addEventListener("click", function() {
    const myElement = document.getElementById("colourBox");
    const elementHex = document.getElementById("colourHex");
    const randomVal = Math.floor(Math.random() * calmArray.length);
    myElement.style.backgroundColor = calmArray[randomVal];
    elementHex.textContent = "HEX Code: " + calmArray[randomVal];
});
document.getElementById("energeticBtn").addEventListener("click", function() {
    const myElement = document.getElementById("colourBox");
    const elementHex= document.getElementById("colourHex");
    const randomVal = Math.floor(Math.random() * energeticArray.length);
    myElement.style.backgroundColor = energeticArray[randomVal];
    elementHex.textContent = "HEX Code: " + energeticArray[randomVal];
});
document.getElementById("tiredBtn").addEventListener("click", function() {
    const myElement = document.getElementById("colourBox");
    const elementHex = document.getElementById("colourHex");
    const randomVal = Math.floor(Math.random() * tiredArray.length);
    myElement.style.backgroundColor = tiredArray[randomVal];
    elementHex.textContent = "HEX Code: " + tiredArray[randomVal];
});

document.getElementById("copyHexBtn").addEventListener("click", function(){
    const elementHex = document.getElementById("colourHex");
    const extractedHex = elementHex.textContent.slice(9);
    if (extractedHex){
        navigator.clipboard.writeText(extractedHex);
        alert("Copied to clipboard!")
    }
});