function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect


const texts = [
    "ANALYTICS ENGINEER",
    "DATA ENGINEER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

function changeColor() {
    
    // Change la couleur de tous les éléments de classe "description"
    const descriptions = Array.from(document.getElementsByClassName("description"));
    descriptions.forEach(description => {
        description.style.color = "#b74b4b"; // Change la couleur de chaque description en rouge
    });

    // Ajoute un event listener pour chaque élément de la classe "box"
    const boxes = Array.from(document.getElementsByClassName("box"));
    boxes.forEach(box => {
        box.addEventListener("mouseover", function() {
            const description = this.querySelector(".description");
            if (description) {
                description.style.color = "white"; // Change la couleur en blanc lors du survol
            }
        });

        box.addEventListener("mouseout", function() {
            const description = this.querySelector(".description");
            if (description) {
                description.style.color = "#b74b4b"; // Restaure la couleur originale
            }
        });
    });
}

window.onload =function(){
    typeWriter();
    changeColor();

}


/* Bouton univ et perso */

function toggleOption() {
    let university = document.getElementById("university");
    let personal = document.getElementById("personal");

    university.classList.toggle("active");
    personal.classList.toggle("active");
}


/* mettre streamlit app en perso project sans retoucher à toutes les class */

document.addEventListener("DOMContentLoaded", function () {
    const universityBtn = document.getElementById("university");
    const personalBtn = document.getElementById("personal");
    const boxes = document.querySelectorAll(".boxes .box");

    function showProjects(type) {
        boxes.forEach(box => {
            const isPersonalProject = box.querySelector(".topic").innerText.includes("Interactive SQL Revision App with Streamlit");
            if (type === "personal" && !isPersonalProject) {
                box.style.display = "none";
            } else {
                box.style.display = "block";
            }
        });
    }

    universityBtn.addEventListener("click", function () {
        universityBtn.classList.add("active");
        personalBtn.classList.remove("active");
        showProjects("university");
    });

    personalBtn.addEventListener("click", function () {
        personalBtn.classList.add("active");
        universityBtn.classList.remove("active");
        showProjects("personal");
    });

    // Afficher tous les projets au chargement
    showProjects("university");
});



