# Bomb Cleaner

## Contents
* Description
* Installation
* How the code works
* Usage

### Description
This react app was created using [create-react-app] and is a twist on the game mind sweeper. The goal of the game is to find the winning card without hitting any bombs. Hitting a bomb will result in a lose while revealing the winning card will result in a win. There are three kinds of cards you can find, the first is a Safe card which will reveal how many bombs are around it to help you decide which card to flip next. The next card is the Bomb card which will result in a loss. The final card is the Winner card which will result in a win. Bombs nearby indicates there is a bomb card either adjacent, parallel or above a card. The game can be restarted at anytime by clicking the restart button. Goodluck!

### Installation
To run the code on your local machine just download the code as a zip file and extract it on your machine, you can then cd into the folder using the command line or use visual studios terminal which will cd to the correct folder if the file is opened __with__ visual studio code, and then type npm start. This will run the react app using internet explorer on http://localhost:3000/.

### How the code works
The code is divided into components that come together on the App.js file. The first component is the Landing component which has two headings, an image and three 
other components, namely; <Start/> <Help/> and <User/>. The start and help components just contain buttons which are used to navigate to the Game and Help pages. 
The user component is a way for the user to sign in. It works together with the Input1 component to change the name "Guest" displayed at the bottom of the screen 
to any name of the users choice while simultaneously showing the change using state until the user clicks log in. The user is able to navigate to the game and help 
pages using BrowserRouter.

### Usage
Once it is opened you will be greeted by the landing page as displayed below.
![image](https://user-images.githubusercontent.com/91433346/173395583-58ba5762-cf0e-4b51-b4c7-06a17a623046.png)

Below the help button there is a sign in option that will change the name from guest to whatever is inputted.
![image](https://user-images.githubusercontent.com/91433346/172159174-e610625e-81e3-4516-ae56-0230ccf45a14.png)

When the __Help__ button is clicked the user will be taken to a page that describes how to play the game like shown below.
![image](https://user-images.githubusercontent.com/91433346/173395777-1942dcaa-4732-4b0e-be33-2505836fcc6b.png)


When the user clicks on the __Play__ button they are taken to the game page where the actual game is played
![image](https://user-images.githubusercontent.com/91433346/172159570-6c5ed431-e15c-4a27-8cc0-301ae56579c9.png)

Here they have they have a __Restart__ button which will restart the game.
