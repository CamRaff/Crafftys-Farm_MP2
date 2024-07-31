/*jshint esversion: 6 */ 

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded with JavaScript');

    // Array containing the animal images

    const animals = [{src: "assets/images/animals/cartoon/chicken3.webp", alt: "Chicken Image"}, {src: "assets/images/animals/cartoon/cow3.webp", alt: "Cow Image"}, {src: "assets/images/animals/cartoon/pig1.webp", alt: "Pig Image"}];
    console.log(animals);

    // Select the animal-cards div

    const animalCards = document.querySelector('.animal-cards');

    // Temporary array to store flipped cards

    let tempFlippedCards = [];

    // Creating the animal cards

    function createAnimalCards() {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const cardRevealed = document.createElement('div');
        cardRevealed.classList.add('card-revealed');

        
        cardInner.appendChild(cardRevealed);

        card.appendChild(cardInner);

        cardInner.appendChild(cardFront);

        // Adding the barn image to the card front

        const cardFrontImage = document.createElement("img");
        cardFrontImage.src = 'assets/images/barn.webp';
        cardFrontImage.alt = "Barn Image";
        cardFront.appendChild(cardFrontImage);

        return card;
    }

    let animalCount = {};

    // Adding the animal images to the revealed cards

    function addAnimalToCard(card) {
        const cardRevealed = card.querySelector('.card-revealed');

        // Randomly selecting an animal image

        let animalIndex;

        do {
            animalIndex = Math.floor(Math.random() * animals.length);
        } while (animalCount[animalIndex] >= 2);
        animalCount[animalIndex] = (animalCount[animalIndex] || 0) + 1;

        // Adding animal index to card for later comparison
        
        card.setAttribute("id", animalIndex);

        // Adding the animal image to the card

        const image = document.createElement("img");
        image.src = animals[animalIndex].src;
        image.alt = animals[animalIndex].alt;

        // Appending the revealed image

        cardRevealed.append(image);

        return card;
    }

    // Check if user has clicked a matched card

    function checkIfCardsMatch(card) {
        
        if (card.classList.contains('disabledcard') || card.classList.contains('click')) {
            return;
        }

        // Check user has clicked two cards

        if (tempFlippedCards.length >= 2) {
            setTimeout(function() {
                // processFlippedCards();
            }, 1000);
            return;
        }

        // Holding first card

        if (tempFlippedCards.length === 0) {
            tempFlippedCards.push(card.id);
            return;
        }

        // If second card clicked was not the same 

        if (tempFlippedCards.length > 0 && tempFlippedCards[0] !== card.id) {
            tempFlippedCards= [];

            setTimeout(function() {
                unflippingCard();
            }, 500);
            return;
        }

        if (tempFlippedCards.length > 0 && tempFlippedCards.includes(card.id)) {
            console.log('tempFlippedCards', tempFlippedCards);
            console.log('card', card);
            tempFlippedCards = [];
            setTimeout(function() {
                markAsMatched(card.id);
            }, 1000);
            return;
        }

        // Flipping the cards back to the barn image

        function unflippingCard () {
            tempFlippedCards = [];

            const cards = document.querySelectorAll('.card');

            cards.forEach(function(card) {
                if (!card.classList.contains('disabledcard')) {
                    card.classList = ['card'];
                }
            });
        }   

        // Marking the cards as matched and producing the win popup

        function markAsMatched(id) {
            const cards = document.querySelectorAll('.card');

            cards.forEach(function(card) {
                if (card.id === id) {
                    card.classList = ['card disabledcard click'];
                }
            });

            console.log('WINNER WINNER');

            // Loading the win popup

            document.querySelector('.win-popup').style.visibility = 'visible';

            if (id == 0) {
                document.querySelector('.win-popup-inner').innerHTML = `<h2>Congratulations!</h2> <p>You have found the Charlie the Chicken!</p> <p>Click the button below to learn more about Charlie!</p> <button onclick="window.location.href='chicken.html'">Lets meet Charlie!</button> <button onclick="window.location.href='game.html'">Back to the Farm!</button>`;
            } else if (id == 1) {
                document.querySelector('.win-popup-inner').innerHTML = `<h2>Congratulations!</h2> <p>You have found the Coco the Cow!</p> <p>Click the button below to learn more about Coco!</p> <button onclick="window.location.href='cow.html'">Lets meet Coco!</button> <button onclick="window.location.href='game.html'">Back to the Farm!</button>`;
            } else {
                document.querySelector('.win-popup-inner').innerHTML = `<h2>Congratulations!</h2> <p>You have found the Piper the Pig!</p> <p>Click the button below to learn more about Piper!</p> <button onclick="window.location.href='pig.html'">Lets meet Piper!</button> <button onclick="window.location.href='game.html'">Back to the Farm!</button>`;
            }
        }

    }



    // Start Game

    function startGame() {
        for (let i=0; i<6; i++) {
            const card = createAnimalCards();

            const cardWithAnimal = addAnimalToCard(card);

            card.addEventListener('click', function() {
                checkIfCardsMatch(card);
                card.classList.add('click');
            });

            animalCards.appendChild(cardWithAnimal);
        }
    }

    startGame();
});