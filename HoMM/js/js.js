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
        if(correctPasswordDungeon === userPasswordDungeon) {
            correctPasswords++;  
            guessedPassword = "dungeon";
            createKey(guessedPassword);
            document.querySelector(".label-dungeon").innerHTML="Dungeon<sup>&#9745;</sup>";
        }
    });
});

// ---------------------------------- Sprawdzanie hasła fortress ----------------------------------

let correctPasswords = 0; 

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
        if(correctPasswordFortress === userPasswordFortress) {
            correctPasswords++;  
            guessedPassword = "fortress";
            createKey(guessedPassword);
            document.querySelector(".label-fortress").innerHTML="Fortress<sup>&#9745;</sup>";
        }
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
        if(correctPasswordAcademy === userPasswordAcademy) { 
            correctPasswords++; 
            guessedPassword = "academy";
            createKey(guessedPassword);
            document.querySelector(".label-academy").innerHTML="Academy<sup>&#9745;</sup>";
        }
    });
});

// ---------------------------------- Mechanika Klucza ----------------------------------

const key = document.querySelector(".key");

let collectedKeys = 0;

const createKey = (place) => {
    newKeyPiece = document.createElement("img");
    newKeyPiece.src=`img/keyPiece${correctPasswords}of3.png`;
    newKeyPiece.classList.add(`key-piece-${place}`);
    document.querySelector(`.container-${place}`).appendChild(newKeyPiece);
    finalizeKey(newKeyPiece);
}

 const finalizeKey = (klucz) => {
    klucz.addEventListener("click", () => {
        collectedKeys++
        klucz.classList.add(`collected-key`);
        setTimeout(() => {klucz.classList.add(`hidden`);
        key.src=`img/key${collectedKeys}of3.png`;}, 1300)
    });
}