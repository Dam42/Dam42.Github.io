// ---------------------------------- Karuzela z miejscami----------------------------------

const places = document.querySelectorAll(".places");
const goLeft = document.querySelector(".go-left");
const goRight = document.querySelector(".go-right");

let currentPlace = 0, previousPlace = 0;

goLeft.addEventListener("click", () => {
    previousPlace = currentPlace;
    (currentPlace) ? currentPlace-- : currentPlace = places.length-1; 
    changePlace(); 
})
goRight.addEventListener("click", () => {
    previousPlace = currentPlace;
    (currentPlace == places.length-1) ? currentPlace = 0 : currentPlace++;
    changePlace();  
})

const changePlace = () => {
    places[previousPlace].classList.add("hidden");
    places[currentPlace].classList.remove("hidden");
}

// ---------------------------------- Sprawdzanie hasła Dungeon ----------------------------------

let correctPasswordDungeon = "HADES";

let attemptetPasswordDungeon = "", userPasswordDungeon = "";

const lettersDungeon = document.querySelectorAll(".letter-dungeon");

const chechDungeonLetters = () => {
    for(let i = 0; i < correctPasswordDungeon.length; i++) {
    if(lettersDungeon[i].value.toUpperCase() == correctPasswordDungeon[i]) {
        lettersDungeon[i].classList.add("letter-dungeon-correct");
    }
}
}

lettersDungeon.forEach(letter => {
    letter.addEventListener("input", (e) => {
        attemptetPasswordDungeon="";
        lettersDungeon.forEach(letter => {
             attemptetPasswordDungeon+=letter.value;
          });
        userPasswordDungeon = attemptetPasswordDungeon.toUpperCase();
        chechDungeonLetters();
        if(correctPasswordDungeon === userPasswordDungeon) alert("Dobrze Dungeon");  
    });
});

// ---------------------------------- Sprawdzanie hasła fortress ----------------------------------

let correctPasswordFortress = "AEGIS";

let attemptetPasswordFortress = "", userPasswordFortress = "";

const lettersFortress = document.querySelectorAll(".letter-fortress");

const chechFortressLetters = () => {
    for(let i = 0; i < correctPasswordFortress.length; i++) {
    if(lettersFortress[i].value.toUpperCase() == correctPasswordFortress[i]) {
        lettersFortress[i].classList.add("letter-fortress-correct");
    }
}
}

lettersFortress.forEach(letter => {
    letter.addEventListener("input", (e) => {
        attemptetPasswordFortress="";
        lettersFortress.forEach(letter => {
             attemptetPasswordFortress+=letter.value;
          });
        userPasswordFortress = attemptetPasswordFortress.toUpperCase();
        chechFortressLetters();
        if(correctPasswordFortress === userPasswordFortress) alert("Dobrze Fortress");  
    });
});

// ---------------------------------- Sprawdzanie hasła Dungeon ----------------------------------

let correctPasswordAcademy = "MIGHT";

let attemptetPasswordAcademy = "", userPasswordAcademy = "";

const lettersAcademy = document.querySelectorAll(".letter-academy");

const chechAcademyLetters = () => {
    for(let i = 0; i < correctPasswordAcademy.length; i++) {
    if(lettersAcademy[i].value.toUpperCase() == correctPasswordAcademy[i]) {
        lettersAcademy[i].classList.add("letter-academy-correct");
    }
}
}

lettersAcademy.forEach(letter => {
    letter.addEventListener("input", (e) => {
        attemptetPasswordAcademy="";
        lettersAcademy.forEach(letter => {
             attemptetPasswordAcademy+=letter.value;
          });
        userPasswordAcademy = attemptetPasswordAcademy.toUpperCase();
        chechAcademyLetters();
        if(correctPasswordAcademy === userPasswordAcademy) alert("Dobrze Academy");  
    });
});
