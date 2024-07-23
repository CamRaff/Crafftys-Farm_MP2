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

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardRevealed);

        card.appendChild(cardInner);

        // Adding the barn image to the card front

        const cardFrontImage = document.createElement("img");
        cardFrontImage.src = 'assets/images/barn.webp';
        cardFrontImage.alt = "Barn Image";
        cardFront.appendChild(cardFrontImage);

        // Setting the dimensions of the barn image

        const cardFrontImageDimensions = { width:'100%', height: '100%' };

        Object.assign(cardFrontImage.style, cardFrontImageDimensions);

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

    function checkIfCardsMatch(card) {

        // Check if user has clicked a matched card

        if (card.classList.contains('disabledcard') || card.classList.contains('click')) {
            return;
        }

        // Check user has clicked two cards

        if (tempFlippedCards.length >= 2) {
            setTimeout(function() {
                processFlippedCards();
            }, 1000);
            return;
        }

        // Holding first card

        if (tempFlippedCards.length === 0) {
            tempFlippedCards.push(card.id);
            return;
        }

        // If second card clicked was not the same 

        if (tempFlippedCards.length > 0 && tempFlippedCards[0].id !== card.id) {
            tempFlippedCards= [];

            setTimeout(function() {
                unflippingCard();
            }, 500);
            return;
        }

        if (tempFlippedCards.length > 0 && tempFlippedCards.includes(card.id)) {
            tempFlippedCards = [];
            setTimeout(function() {
                markAsMatched(card.id);
            }, 1000);
            return;
        }

        function unflippingCard () {
            tempFlippedCards = [];

            const cards = document.querySelectorAll('.card');

            cards.forEach(function(card) {
                if (!card.classList.contains('disabledcard')) {
                    card.classList = ['card'];
                }
            });
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
            // animalCards.appendChild(addAnimalToCard(card));
        }
    }

    startGame();
});