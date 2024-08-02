# CamRaff - Milestone Project 2 - Craffty's Farm

![displays](assets/images/readme-images/responsive-screens.png)

Here is a link to the deployed site: [Craffty's Farm](https://camraff.github.io/Crafftys-Farm_MP2/ "Craffty's Farm")

For my second MilestoneProject on my course through Code Institute via UCP (University Centre Peterborough), I thought it would be fun to produce a site which had the opportunity to be used in an educational way, with a scope to make it usable for parents and teachers to make learning fun for their children. The idea was to make it fun and informative, while also keeping it relatively basic so that children would be able to navigate it themselves.

# Contents

- [User Experience](#user-experience-ux)

    - [User Stories](#user-stories)

- [Design and Development](#design-and-development)

    - [Wireframes](#wireframes)
        
        - [Desktop](#desktop)

        - [Mobile](#mobile)

    - [Images](#images)

        - [Background](#background)

        - [Game Tiles](#game-tiles)

        - [Info Pages](#info-pages)

        - [Favicons](#favicons)

    - [Fonts](#fonts)

        - [Margarine](#margarine)

        - [LXGW](#lxgw-wenkai-mono-tc)

    - [Features](#features)

        - [Home Page](#home-page)

        - [Game Page](#game-page)

        - [Animal/Info Page](#animalinformation-pages)

    - [Deployment and Local Development](#deployment-and-local-development)

        - [Deployment](#deployment)

        - [Local Development](#local-development)

            - [Fork](#fork)

            - [Clone](#clone)

- [Testing](#testing)

    - [Automated](#automated)

        - [W3C Validator - HTML](#w3c-validator---html)

        - [W3C Validator - CSS](#w3c-validator---css)

        - [JSHint](#jshint)

        - [Lighthouse](#lighthouse)

    - [Manual](#manual)

- [Credits](#credits)


---

# User Experience (UX)

## User Stories

### First Time Visitors

- I want to find something I can use to keep my kids entertained.
- I want something that is fun, yet has the ability to teach my kids something they may not have known before.

### Returning and Frequent Users

- I want something I know is going to entertain the kids.

---

# Design and Development

## Wireframes

Below you can see the initial mock-ups for each page of the website. The ideas behind each page will be explained beneath the images.

### Desktop

This is the initial mock-up for the three different kinds of pages on the site when displayed on a wide or desktop view.

- #### Home

![dektop-home-wireframe](assets/images/readme-images/wireframes/home.png)

For this page, I wanted to keep the design simple with a main navigation bar and a footer which will be displayed the same across all pages. As this is just the home/landing page, I didn't want to flood the user with too much information. There will be a brief introduction to the site displayed in the center of the page, and a button which will take you to the interactive/game area. The button to access the interactive/game area will also be the same as one of the links in the navigation bar, for ease of access. 

- #### Game Area

![game-area](assets/images/readme-images/wireframes/game-area.png)

![game-area-congratulations](assets/images/readme-images/wireframes/game-area-congratulations.png)

This is where most of the interactivity will be encountered. This page will display something similar to a memory game, however it is not actually a game, so there will be no score or anything being counted. The purpose of finding a match is to hear the sounds of the animal which you've found the matching pair for, and to have the user then be able to access the information page available for that animal. Upon finding a match, you will see in the 2nd image that a box will appear, congratulating you and giving you the option to continue on to the information page, or return back to the interactive area. 

- #### Info Page

![info-page](assets/images/readme-images/wireframes/animal-info.png)

This is where the user will find the information page. Here, there will be images of the animal they correctly matched the pair for, and also a body of text containing the information about that animal. 

### Mobile

As I decided to keep the home page relatively basic, that will be displayed the same on mobiles and tablets (aside from the relocation of the nav bar seen below), so I have only provided images of the game area and information pages.

- #### Game Area

<img src="assets/images/readme-images/wireframes/game-area-mobile.png" alt="wireframe for the mobile version of the game area" height="600">

- #### Info Page

<img src="assets/images/readme-images/wireframes/animal-info-mobile.png" alt="wireframe for the mobile version of the info page" height="600">

The mobile versions once more don't change much, it is mostly just a shift from a horizontal display to more of a vertical display.

---

## Images

Because I wanted to have this project designed so it could be used as a way to entertain kids by their parents or teachers, I decided to go with a majority cartoon-y theme. All of the images used for the game tiles were designed by AI from [Microsoft's Copilot AI](https://copilot.microsoft.com) using prompts from myself. The background was acquired from [Freepik](https://www.freepik.com), and was designed [@brgfx](https://www.freepik.com/author/brgfx).

### README Title Image

The image seen at the top of the README document was created using a website called [Am I Responsive](https://ui.dev/amiresponsive).

### Background

<img src="assets/images/background.webp" alt="the image used as the background of the website" height="400"><br>

In keeping with the farm theme, I wanted something that was simple but also visually appealing, and would look nice as a background. I found this image while searching for images of empty fields and thought the addition of the fence was great, so I decided to use this as the background for the entire site.

### Game Tiles

<img src="assets/images/animals/cartoon/chicken3.webp" alt="the image of the chicken used in the game area" height="200" width="200"> <img src="assets/images/animals/cartoon/cow3.webp" alt="the image of the cow used in the game area" height="200" width="200"> 

<img src="assets/images/animals/cartoon/pig1.webp" alt="the image of the pig used in the game area" height="200" width="200"> <img src="assets/images/barn.webp" alt="the image of the barn used in the game area" height="200" width="200">

As with the background, since I was designing this towards children, I went with very cartoon-y, almost cutesy designs.

### Info Pages

On the information pages, I decided it would be a good idea to have some realistic images of the animals as this is where the learning will occur, and though learning via cartoons is possible, I felt it would be better for them to get an actual understanding of the real life animals. I also thought it would be a good idea for them to see both sides of the animal, with one image being slightly more humorous than the other. On mobile, one of the images will be hidden, so I am going to go with the humorous photo to be displayed on smaller screens. All of the images seen below were acquired from [Pexels](https://www.pexels.com), and the individuals have been tagged under each image.

#### Chicken 

<img src="assets/images/animals/realistic/real-chicken1.webp" alt="first image of a chicken" height="200"> <img src="assets/images/animals/realistic/real-chicken2.webp" alt="second image of a chicken" height="200">

Left image belongs to [Engin Ukyuart](https://www.pexels.com/@enginakyurt/). Right image belongs to [Rachel Vine](https://www.pexels.com/@camerashy/).

Facts 1 and 2 were found on the website [BCSPA](https://spca.bc.ca/news/fun-facts-about-chickens/).

Fact 3 was found on the website [The Humane League](https://thehumaneleague.org.uk/article/10-facts-about-chickens-you-may-not-know?gad_source=1&gclid=EAIaIQobChMI9IaXwYDFhwMVmnR_AB0fLC0jEAAYASAAEgKMOfD_BwE).

#### Cow

<img src="assets/images/animals/realistic/real-cow1.webp" alt="first image of a cow" height="200"> <img src="assets/images/animals/realistic/real-cow2.webp" alt="second image of a cow" height="200">

Left image belongs to [Julie Aagaard](https://www.pexels.com/@julieaagaard/). Right image belongs to [Tobi](https://www.pexels.com/@pripicart/).

Facts 1 and 2 were found on the website [The Humane League](https://thehumaneleague.org.uk/article/10-facts-about-cows-that-you-might-not-know?gad_source=1&gclid=EAIaIQobChMIl5b34OrEhwMVKqhoCR0hNhc-EAAYAiAAEgKgVvD_BwE).

Fact 3 was found on the website [BBC](https://www.bbc.co.uk/programmes/articles/cfKXgwHG4YqR7DfGBW6GsQ/nine-udderly-fascinating-facts-about-cows).

#### Pig

<img src="assets/images/animals/realistic/real-pig1.webp" alt="first image of a pig" height="200"> <img src="assets/images/animals/realistic/real-pig2.webp" alt="second image of a pig" height="200">

Left image belongs to [Brett Sayles](https://www.pexels.com/@brett-sayles/). Right image belongs to [Barbara Barbosa](https://www.pexels.com/@barbara-barbosa-2859157/).

Facts 1 and 2 were found on the website [Animal Equality](https://animalequality.org.uk/blog/2021/03/10/five-extraordinary-facts-about-pigs/?gad_source=1&gclid=EAIaIQobChMI-MrauYjFhwMVBnR_AB2AqDVzEAAYASAAEgJUY_D_BwE).

Fact 3 was found on the website [Peta](https://www.peta.org.uk/blog/10-things-you-never-knew-about-pigs-with-photos/?utm_source=PETA%20UK::Google&utm_medium=Ad&utm_campaign=1120::gen::PETA%20UK::Google::s-grant-awa-dsa::::searchad&gad_source=1&gclid=EAIaIQobChMI-MrauYjFhwMVBnR_AB2AqDVzEAAYAiAAEgI8xvD_BwE).

### Favicons

The browser tab image used in this site were acquired using the [Favicon](https://favicon.io/favicon-converter/). 

---

## Colour Scheme

I chose lighter colours for the website, opting for blue (#rgba(0, 150, 255, .7)) as the background for divs, navigation and footer to provide a contrast between that and the white (#white) text while also maintaining the visibility of the background behind it. I used a green (#rgb(94, 244, 114)) for highlights on hover and buttons. All of these colors were chosen as they were shades of the background, meaning the colour scheme was able to be maintained throughout and it matched the background on all pages.

---

## Fonts

For the font on the site, I decided to go with something that was quite rounded on the edges and soft on the eyes, as it is designed for children. I didn't want the ltters and words to be too sharp. I got this idea when doing a bit of research on childrens sites and I came across the [Peppa Pig](https://www.peppapig.com/en-us) website. 

After taking a look at the fonts available on [Google Fonts](https://fonts.google.com), I decided upon two different fonts, one to be used for headers and in the navigation bar, and one for body text. 

### Margarine

<img src="assets/images/readme-images/margarine.png" alt="the font Margarine, acquired from Google Fonts" height="100">

I chose the font [Margarine](https://fonts.google.com/specimen/Margarine?preview.text=Welcome%20to%20Craffys%20Farm&preview.layout=grid) for the headers and navigation bars as it is very soft but also stands out very well.

### LXGW WenKai Mono TC

<img src="assets/images/readme-images/lxgw.png" alt="the font LXGW WenKai Mono TC, acquired from Google Fonts" height="100">

I chose the font [LXGW WenKai Mono TC](https://fonts.google.com/specimen/LXGW+WenKai+Mono+TC?preview.text=Welcome%20to%20Craffys%20Farm&preview.layout=grid) for the body text as it is a bit easier to read over long periods than Margarine, yet it still has a soft and rounded feel.

---

## Features

The project I have created for Milestone Project 2 consists of 5 pages in total, the home page, the game page, and 3 animal/information pages.

- #### Home Page

The home page is kept very simple, with a navigation bar at the top with a logo serving as a link back to the home page, a home link and a link to the game. There is an introduction to the site in the main body, as well as another link to the farm, prompting users to "begin your search". There is also a footer consisting of copyright information and a link to the GitHub repository. 

<img src="assets/images/readme-images/home-page-desktop.png" alt="Home page on desktop" height="500">

- #### Game Page

The game page features the same navigation bar and footer as the home page, but differs as it features a tile flipping memory game, where the user must match 2 cards in order to progress to the animal/information pages. This page features a 3x2 grid of flippable cards on desktop screens which converts to a 2x3 grid on smaller screens. 

<img src="assets/images/readme-images/game-page-desktop.png" alt="Game page on desktop" height="500">

<img src="assets/images/readme-images/game-page-mobile.png" alt="Game page on mobile" height="500"><br>

The tiles feature a barn as the outter and then when flipped you can see the animal card, as shown below:

<img src="assets/images/readme-images/card-flipped.png" alt="Flipped card" height="400"><br>

Flipping 2 of the same tiles brings up the win popup, giving you the option to proceed to the information page for the animal you've correctly matched, or to return to the farm and continue matching pairs: 

<img src="assets/images/readme-images/win-popup.png" alt="Win popup" height="400">

- #### Animal/Information Pages

The animal/information pages are very straight forward and maintains the navigation bar from the game and home pages, with added information in the footer. On these pages there is an image, a text box with a scroll bar and another image horizontally on the page with a button to return to the farm below. This page transforms vertically on smaller screens and removes one of the images to make it a bit more pleasant for the user. As all 3 of the animal pages follow the same structure, I've only displayed one of them below.

<img src="assets/images/readme-images/chicken-page-desktop.png" alt="Chicken page on desktop" height="500">

<img src="assets/images/readme-images/chicken-page-mobile.png" alt="Chicken page on mobile" height="500">

- #### 404 Page

The 404 error page has the exact same layout and structure as the home page, with slightly different content. 

<img src="assets/images/readme-images/404-page-desktop.png" alt="404 page on desktop" height="500">

## Development

For this project, as per the requirements, the languages I used to create this website were HTML, CSS and Javascript. 

### Libraries, Websites and Programs 

- I used [VSCode](https://code.visualstudio.com) as my IDE of choice. 
- I used [Git](https://git-scm.com/) for version control.
- I used [GitHub](https://github.com/) to commit and store all files relating to the project.
- I used [Balsamiq](https://balsamiq.com/) to produce the above wireframes.
- I used [Favicon](https://favicon.io/) to produce the favicon used in the title.
- I used [Google Fonts](https://fonts.google.com/) to evaluate and decide which fonts to use throughout the website.
- I used [Font Awesome](https://fontawesome.com/) to acquire the icons used for the GitHub icon in the footer.
- I used [Google Dev Tools](https://developer.chrome.com/docs/) as a means of testing the website throughout its production.
- I used [Am I Responsive](https://ui.dev/amiresponsive) to create the main image atop the ReadMe.
- I used [Ezgif](https://ezgif.com/video-to-gif) to create the gifs used in the ReadMe.

---

## Deployment and Local Development

### Deployment

This site is available for deployment via GitHub Pages. In order to deploy this site, you must:

1. Log in to Github (or sign up).
2. Go to the repository for this project - <https://github.com/CamRaff/Crafftys-Farm_MP2>
3. Click the "Settings" button above the project name.
4. Select "Pages" from the navigation bar at the left of the screen.
5. From the source dropdown, select "Deploy from a branch", and then "main".
6. The site is now deployed. This may take a few moments, but upon completion you should be able to acquire the link and visit the site via the top of GitHub Pages.

### Local Development

#### Fork

In order to Fork this repository, you must:

1. Log in to GitHub (or sign up).
2. Go to the repository for this project - <https://github.com/CamRaff/Crafftys-Farm_MP2>
3. Click the "Fork" button on the right, on the same line as the project name.

#### Clone

In order to clone this repository, you must:

1. Log in to GitHub (or sign up).
2. Go to the repository for this project - <https://github.com/CamRaff/Crafftys-Farm_MP2>
3. Click on the "Code" button above the number of commits. 
4. Select whether you would like to clone with HTTPS, SSH or GitHub CLI, then copy the given link.
5. Open the terminal in your desired IDE, then select your desired location for the cloned directory.
6. Type 'git clone' into the terminal, paste the link you copied in step 4 and press enter.

---

# Testing

## Automated

### W3C Validator - HTML

In order to conduct testing on the HTML of my website, I used the [W3C Validator](https://validator.w3.org/). The results for the testing of all of the HTML documents are below.

- #### Home

<img src="assets/images/readme-images/w3-validator/w3-home.png" alt="W3C test for the Home page" height="200">

- #### Game

<img src="assets/images/readme-images/w3-validator/w3-game.png" alt="W3C test for the Game page" height="200">

- #### Chicken

<img src="assets/images/readme-images/w3-validator/w3-chicken.png" alt="W3C test for the Chicken page" height="200">

- #### Pig

<img src="assets/images/readme-images/w3-validator/w3-pig.png" alt="W3C test for the Pig page" height="200">

- #### Cow

<img src="assets/images/readme-images/w3-validator/w3-cow.png" alt="W3C test for the Cow page" height="200">

- #### 404

<img src="assets/images/readme-images/w3-validator/w3-404.png" alt="W3C test for the 404 page" height="200">
<br>
<br>
As you can see from the above images, there were no issues in the HTML for any of the pages in the site.

### W3C Validator - CSS

To conduct testing on the CSS within my website, I used the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). The results for the tests can be seen below.

- #### Initial

<img src="assets/images/readme-images/w3-validator/w3-css-initial.png" alt="Initial CSS test" height="200">

- #### Final

<img src="assets/images/readme-images/w3-validator/w3-css-final.png" alt="Final CSS test" height="200">
<br>
<br>
The issues flagged in the initial test were easy to rectify. I had missed the 'px' from the width, so adding this fixed the first issue. For the second issue it turned out that the line of code that was flagged was actually unnecessary, so that was deleted, thus fixing the 2nd issue.

### JSHint

To test the Javascript for any issues or function problems, I passed my code through [JSHint](https://jshint.com/). The results were as follows:

<img src="assets/images/readme-images/jshint.png" alt="JSHint test results" height="300"><br>

After a conversation with my mentor regarding this test and the warning flagged, it was determined that in order to rectify this warning I would require an IIFE (Immediately Invoked Function Expression) which would actually prove to be more semantically confusing... So I left this as it was for the final product.

### Lighthouse

I ran each of my three pages though Lighthouse on Google Dev Tools. Lighthouse tests 4 main areas of your site, them being its Performance, its Accessibility, how well it conforms with Best Practices and also how well it would perform when being searched for in a browser, its Search Engine Optimization (SEO). The following results were acquired when the initial tests were ran:

#### Home

- ##### Desktop

<img src="assets/images/readme-images/lighthouse/desktop/home-lighthouse-d.png" alt="Lighthouse Home page results on desktop" height="200">

- ##### Mobile

<img src="assets/images/readme-images/lighthouse/mobile/home-lighthouse-m.png" alt="Lighthouse Home page results on mobile" height="200">

#### Game

- ##### Desktop

<img src="assets/images/readme-images/lighthouse/desktop/game-lighthouse-d.png" alt="Lighthouse Game page results on desktop" height="200">

- ##### Mobile

<img src="assets/images/readme-images/lighthouse/mobile/game-lighthouse-m.png" alt="Lighthouse Game page results on mobile" height="200">

#### Chicken

- ##### Desktop

<img src="assets/images/readme-images/lighthouse/desktop/chicken-lighthouse-d.png" alt="Lighthouse Chicken page results on desktop" height="200">

- ##### Mobile

<img src="assets/images/readme-images/lighthouse/mobile/chicken-lighthouse-m.png" alt="Lighthouse Chicken page results on mobile" height="200">

#### Pig

- ##### Desktop

<img src="assets/images/readme-images/lighthouse/desktop/pig-lighthouse-d.png" alt="Lighthouse Pig page results on desktop" height="200">

- ##### Mobile

<img src="assets/images/readme-images/lighthouse/mobile/pig-lighthouse-m.png" alt="Lighthouse Pig page results on mobile" height="200">

#### Cow

- ##### Desktop

<img src="assets/images/readme-images/lighthouse/desktop/cow-lighthouse-d.png" alt="Lighthouse Cow page results on desktop" height="200">

- ##### Mobile

<img src="assets/images/readme-images/lighthouse/mobile/cow-lighthouse-m.png" alt="Lighthouse Cow page results on mobile" height="200">

#### 404

- ##### Desktop

<img src="assets/images/readme-images/lighthouse/desktop/404-lighthouse-d.png" alt="Lighthouse 404 page results on desktop" height="200">

- ##### Mobile

<img src="assets/images/readme-images/lighthouse/mobile/404-lighthouse-m.png" alt="Lighthouse 404 page results on mobile" height="200">

---

## Manual

### User Stories

**First Time Visitor Goals**

| Goals | Outcome |
| ----- | ----- |
| I want to find something I can use to keep my kids entertained. | I gave my children this game while they were in the car and they very much enjoyed it. |
| I want something that is fun, yet has the ability to teach my kids something they may not have known before. | My children learned some very interesting facts about chickens, cows and pigs! |

**Returning and Frequent Visitor Goals**

| Goals | Outcome |
| ----- | ----- |
| I want something I know is going to entertain the kids. | The kids love playing this game and often request it during car journeys etc. |

### Site Testing

This site was built using VSCode as my chosen IDE. All of the development was done on the MacBook Air.

The devices I used to test my site throughout development and upon completion are:

- Philips 1080p Monitor.

- MacBook Air 15", M2.

- Mobile - Apple iPhone 15 Pro Max.

I tested the site using three different browsers on both the laptop and mobile, them being Safari, Google Chrome, and Mozilla Firefox. The site worked as expected on all three browsers on both platforms, and the desired styling was displayed. I made use of my partners Android mobile (Google Pixel 6) to check on all three browsers how the site functioned and everything worked as expected.

### Feature Testing

#### Header and Footer

The header and footer of the site remained the same across all 6 pages. The header consists of a logo which also serves as a home button, a link to the home page and a link to the game page (The Farm). Manual testing of these features were as follows:

**Header**

| Feature | Expectation | Test Performed | Outcome | 
| ----- | ----- | ----- | ----- | 
| Craffty's farm title | Navigate back to home page | Clicked on all pages | Refreshed on the Home page and returned to the Home page on all others |
| Navigation links | Take the user to the desired page | Clicked on all pages | Went to the desired page |
| Nav hover effect | Menu items will change color | Hovered over each option | Color changed as desired |
| Active effect | The page you're on will be underlined | Accessed each page | The page you're currently on is underlined in the Nav bar |

<br>Below you can see the hover and active effect in the navigation bar:

<img src="assets/images/readme-images/nav-hover-gif.gif" alt="Hover effect on navigation bar" height="100"><br><br>

**Footer**

| Feature | Expectation | Test Performed | Outcome |
| ----- | ----- | ----- | ----- |
| Footer link | Take you to GitHub | Clicked link on all pages | Taken to the GitHub |
| Footer hover | Icon will change color | Hovered over the icon | Icon color changed as desired | 

<br>Below you can see the hover effect on the GitHub link:

<img src="assets/images/readme-images/footer-hover-gif.gif" alt="Hover effect on footer" height="100"><br><br>

**Home**

| Feature | Expectation | Test Performed | Outcome | 
| ----- | ----- | ----- | ----- | 
| Button link to game page | Take the user to the desired page | Clicked button | Went to the desired page |
| Button hover effect | Button becomes highlighted | Hovered over each option | Color changed as desired |

<br>Below you can see the hover effect on the button:

<img src="assets/images/readme-images/home-hover-gif.gif" alt="Hover effect on home page" height="200"><br><br>

**Game**

| Feature | Expectation | Test Performed | Outcome | 
| ----- | ----- | ----- | ----- | 
| Random memory game | Game tiles randomise on page load | Reloaded the page | Animal images were placed randomly behind the barn image every time |
| Cards flip to show animal | Upon click, a the barn image will rotate to show an animal image | Clicked on barn images | Animal Images were shown |
| Function stopping more than two cards being flipped | You should only be able to flip two cards over at one time | Clicked three cards in quick succession | The third card failed to flip |
| Matching two | A win popup will appear when you match two animals, presenting the option to learn more about that animal or return to the game | Played game until two animals matched | Win popup appeared |
| Buttons hover effect in popup | Buttons are highlighted | Hovered over each button | Buttons changed color as expected | 
| Button link to animal/info page | Taken to new page | Clicked button | Taken to the page of the animal I matched |
| Button link to game page | Go back to game | Clicked button | Taken back to the game |

<br>Below you can see the cards flipping to display the animals:

<img src="assets/images/readme-images/card-click.gif" alt="Card flipping gif" height="300">

<br>Below you can see the third card failing to flip:

<img src="assets/images/readme-images/three-card-click.gif" alt="Attempting to flip more than two cards" height="300">

<br>Below you can see the win popup appear following successfully matching two animals, along with the hover effects on the buttons:

<img src="assets/images/readme-images/match-winpopup.gif" alt="gif showing the win popup" height="300"><br><br>

**Animal/Info**

| Feature | Expectation | Test Performed | Outcome | 
| ----- | ----- | ----- | ----- | 
| Scroll box with facts | User can scroll down to learn more about the animal they found | Moused over fact box and scrolled | Scrolled successfully and saw more facts |
| Button link to game page | Go back to game | Clicked button | Taken back to the game|
| Buttons hover effect | Buttons is highlighted | Hovered over button | Button changed color as expected | 

<br>All animal/information pages contain the same styling so I have only shown one of the 3, but below you will see the scroll and hover effects:

<img src="assets/images/readme-images/animal-scroll-hover.gif" alt="scroll and hover effects on the information page" height="300"><br><br>

**404**

| Feature | Expectation | Test Performed | Outcome | 
| ----- | ----- | ----- | ----- | 
| Button link to home page | Taken from 404 to home page | Clicked link | Taken to the home page |
| Buttons hover effect | Buttons is highlighted | Hovered over button | Button changed color as expected | 

<br>Below you can see the hover effect on the 404 page:

<img src="assets/images/readme-images/404-hover.gif" alt="hover effect on 404" height="200"><br><br>

# Credits

##  Outside Code

I got a lot of inspiration for the game code from a YouTube channel called [Coding Made Simplified](https://www.youtube.com/@codingmadesimplified), specifically their video [Create Your Own Memory Game](https://www.youtube.com/watch?v=t3cydTwfEnM).

## Images

All of the images in the site and ReadMe have been credited throughout this ReadMe in their respective places.

## Acknowledgements

I would like to give a special thanks to: 

- Ronan McClelland, my mentor, for being extremely helpful and insightful. This project was only created thanks to them! 

- Mark Nevison, a student on my cohort, for once again allowing me to barate them with questions and queries relentlessly.

- UCP-15 Discord, for being an all round pleasant group of helpful individuals.