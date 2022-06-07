# world-quiz
## Purpose of the project
The project is a quiz intended for kids from the age of 6 years old and above. It is a responsive game, displaying various locations around the world and the aim is for the player to guess correctly where this is. The style is colourful to draw attention and the design is kept simple and bold.

## User stories
- As a visiting user I would like to view the instructions of the quiz.
- As a new user I would like to access the game by clicking "Start" and I would like to learn the rules by clicking "How to play"
- As a new user I would like to play an interactive game, which is responsive on all devices.
- As a new user I would like to see my progress through a score that displays on the page.

## Features
#### Heading:
A big and clear heading called "World quiz".
!["heading" screenshot](/docs/screenshots/heading.png)

#### Start button:
Leads to question one
#### How to play Button:
Leads to the help page wth instructions.
!["start buttons" screenshot](/docs/screenshots/start-buttons.png)
!["help page" screenshot](/docs/screenshots/instruction-page.png)



#### Question section:
A question asking the user where in the world they think a place is located.
!["question" screenshot](/docs/screenshots/question.png)


#### Question Image:
The image is underneath the question and shows the player a remote location which is used to guess the correct answer.
!["image" screenshot](/docs/screenshots/image.png)


#### Answer options:
Under the image section there are 3 answer options. The user has to pick one - this follows a message confirming if the answer was correct or not.
!["options" screenshot](/docs/screenshots/answers.png)


#### Correct/incorrect page confirmation:
An overlay message appears with the sign "Correct" or "Incorrect...sorry". The user presses the blue"next question" button after picking their location of choice. 
Both correct and incorrect slides have a "next question" button, which leads to the next question.
!["correct answer page" screenshot](/docs/screenshots/correct-page.png)
!["incorrect answer page" screenshot](/docs/screenshots/incorrect-page.png)


#### Congratulations page:
After the user answers their last question this leads to a "congratulations" message.
A blue "End quiz" button will take the player back to the main page with "Start" and "How to play".
!["confirmation page" screenshot](/docs/screenshots/last-page.png)


#### Score counter
Every time the user scores correctly or incorrectly this is added up in the score section above the question. The counter is reset after every game.
!["score count" screenshot](/docs/screenshots/scores.png)


## Future features
- Timer - the quiz will be timed from the moment the player clicks "Start" to the moment where they click "End Quiz" on the last page.

## Typography and color scheme
- The main colours in this project are blue an green to make the buttons stand out and make the game more intuitive. 
- The answer options are always a light green colour and the "next question" buttons are all a neutral blue.

## Wireframes
(The project has updates, such as the scoring system that aren't included in the wireframes)
#### Main page:
!["Main page" screenshot](/docs/wireframes/start-page.png)

#### Instructions:
!["Instructions" screenshot](/docs/wireframes/help-page.png)

#### Question 1:
!["Question1" screenshot](/docs/wireframes/question-one.png)

#### Correct Answer:
!["Correct answer message" screenshot](/docs/wireframes/correct.png)

#### Incorrect Answer message:
!["Incorrect Answer message" screenshot](/docs/wireframes/incorrect.png)

#### Question 2:
!["Question2" screenshot](/docs/wireframes/question-two.png)

#### Question 3:
!["Question3" screenshot](/docs/wireframes/question-three.png)

#### Question 4:
!["Question4" screenshot](/docs/wireframes/question-four.png)

#### Confirmation page:
!["confirmation" screenshot](/docs/wireframes/end-page.png)


## Technology
This project was created using the Google browser and Gitpod.

### Other tools used:
- Google fonts - used in the project. The font used was Raleway
- Balsamiq wireframes to create the wireframes before the project was created
- HTML was used to build the structure of the webpage
- CSS was used to style the page and add responsiveness
- JavaScript was used to add interactivity to the quiz

## Testing
### Code Validation:
- When the code was passed through JSHint it returned no errors - the JavaScript code was pasted into JSHint.
- When the code was passed through W3C Validator and showed no errors - the link https://zoe34.github.io/world-quiz/index.html was pasted into the Address bar.

### Test Cases:
- As a new user I can access the game by pasting the link https://zoe34.github.io/world-quiz/ into the browser
- I can start the game by clicking "Start", this takes me to question 1
- I can access the instructions for the game by clicking the "How to play" button
!["start page" screenshot](/docs/screenshots/start.png)

- I can return to the main page by clicking the blue "Back to quiz" button
!["instructions" screenshot](/docs/screenshots/instruction-page.png)

- I can submit question answers by clicking on one of the three green options below the picture
!["options" screenshot](/docs/screenshots/options.png)

- After clicking one of the options a green pop up appears if the answer was correct. This has the option of moving onto the next question by clicking "Next question"
!["correct answer page" screenshot](/docs/screenshots/correct-page.png)

- After clicking an option a red pop up appears if the answer was incorrect and I can access the next question by clicking the blue "Next question" button
!["incorrect answer page" screenshot](/docs/screenshots/incorrect-page.png)

- I can view my score during the game in the score section at the top of the page. With each correct answer the "correct" section increases by one and with each incorrect answer the "incorrect" section increases by one.
!["scores" screenshot](/docs/screenshots/scores.png)


- After completing question 4 I can access the confirmation page with a message saying the quiz has ended.
- I can still see my score on the top of the page.
- I can return to the main page by clicking the blue "End Quiz" button. 
!["last page" screenshot](/docs/screenshots/last-page.png)

- Clicking this button would reset my score to 0 so the game can be started again.
!["reset-scores" screenshot](/docs/screenshots/reset-scores.png)

### Fixed Bugs:
- A bug I came across was in the JavaScript; I had several redundant functions that needed removing and the "hideElement" and "showElement" functions wouldn't work, as the code needed cleaning up.
- This has been fixed by cleaning up the code and testing with JSHint.

- When clicking the start button the incorrect answer had one point before the game began. 
- This bug was fixed by removing the checkScore function.


### Supported screens and browsers:
- Chrome simulator and Chrome developer tools used to add responsiveness.

#### At max screen width of 800px (medium):
#### Start page
!["start page" screenshot](/docs/screenshots/start-page-800px.png)
#### Help page
!["help page" screenshot](/docs/screenshots/help-page-800px.png)
#### Question One
!["question-one" screenshot](/docs/screenshots/question-one-800px.png)
#### Question Two
!["question-two" screenshot](/docs/screenshots/question-two-800px.png)
#### Question Three
!["question-three" screenshot](/docs/screenshots/question-three-800px.png)
#### Question Four
!["question four" screenshot](/docs/screenshots/question-four-800px.png)
#### Incorrect Page
!["incorrect page" screenshot](/docs/screenshots/incorrect-page-800px.png)
#### Correct Page
!["correct page" screenshot](/docs/screenshots/correct-page-800px.png)
#### Last Page
!["last page" screenshot](/docs/screenshots/last-page-800px.png)

#### At max screen width of 650px (medium-small):
(The max width of 550px is also in the category of medium-small and looks very similar to 650px)
#### Start page
!["start page" screenshot](/docs/screenshots/start-page-650px.png)
#### Help page
!["help page" screenshot](/docs/screenshots/help-page-650px.png)
#### Question One
!["question one" screenshot](/docs/screenshots/question-one-650px.png)
#### Question Two
!["question two" screenshot](/docs/screenshots/question-two-650px.png)
#### Question Three
!["question three" screenshot](/docs/screenshots/question-three-650px.png)
#### Question Four
!["question four" screenshot](/docs/screenshots/question-four-650px.png)
#### Incorrect Page
!["incorrect page" screenshot](/docs/screenshots/incorrect-page-650px.png)
#### Correct Page
!["correct page" screenshot](/docs/screenshots/correct-page-650px.png)
#### Last Page
!["last page" screenshot](/docs/screenshots/last-page-650px.png)

#### At max screen width of 430px (small):
#### Start page
!["start page" screenshot](/docs/screenshots/start-page-430px.png)
#### Help page
!["help page" screenshot](/docs/screenshots/help-page-430px.png)
#### Question One
!["question-one" screenshot](/docs/screenshots/question-one-430px.png)
#### Question Two
!["question-two" screenshot](/docs/screenshots/question-two-430px.png)
#### Question Three
!["question-three" screenshot](/docs/screenshots/question-three-430px.png)
#### Question Four
!["question four" screenshot](/docs/screenshots/question-four-430px.png)
#### Incorrect Page
!["incorrect page" screenshot](/docs/screenshots/incorrect-page-430px.png)
#### Correct Page
!["correct page" screenshot](/docs/screenshots/correct-page-430px.png)
#### Last Page
!["last page" screenshot](/docs/screenshots/last-page-430px.png)




## Deployment
### Gitpod:
- The project has been deployed to Github pages.
- Once opened it redirects to Gitpod pages.
- From the settings of the repository 
- Change the settings of the branch to main branch and click save.
- The link https://zoe34.github.io/world-quiz/ can be accessed by opening Github pages and the link appears on a green background.
- The website was made public by changing the visibility to public in the settings section.

### To open through Gitpod:
- Click on "Dashboard"
- Click on the most recent world quiz workspace
- Open the project through Visual Studio Code or in the browser (Google is recommended)
- To see the preview in the browser type "python3 -m http.server" into the gitpod terminal.

### To open through Github:
- Enter https://github.com/Zoe34/world-quiz.git into the browser
- Click on the green Gitpod button
- Click on the World Quiz workspace that shows up
- Open in the browser or via Visual Studio Code
- To see the preview in the browser type "python3 -m http.server" into the gitpod terminal.

## Credits:
- Pixabay.com was used to generate the images for this project
- The Stack Overflow website and W3Schools were used as guidance during the making of this project.

