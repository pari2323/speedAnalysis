const inputText =document.getElementById("input-Text") ;
const userInput = document.getElementById("user-Input") ;
const btnStartTest = document.getElementById("btnStartTest");
const btnEndTest = document.getElementById("btnEndTest");
let startDate = "";
let endDate = "" ;
let speed = "";
let testRunning = false ;
userInput.disabled = true ;

function fetchInputText(){
    if(!testRunning) { 
        testRunning = true ;
        userInput.disabled = false;
        userInput.focus();
        inputText.textContent = "This is a test paragraph,for testing typing purpose only" ; 
        startDate = new Date().getTime();
        btnStartTest.disabled = true;   //Disable the start button once test is started
        // return startDate ;
        console.log(startDate) ;
    }
}

btnStartTest.addEventListener('click', fetchInputText) ;



// nedd counter to start time after button click
// end the start time after button click
// get the input string
// need to claculate wpm (taking string length)/60 gives wpm per minute
const feedBackDisplay = document.getElementById("feedBackDisplay") ;
function userFeedback (){

    if(testRunning){
    btnStartTest.disabled = true ;
    endDate = new Date().getTime () ;
    const testString = userInput.value ;
    const wordList = testString.split(/\s+/);
    let wordCount = Math.round(wordList.length);
    // console.log(wordCount);
    speed = (endDate - startDate)/(1000*60);
    
    // console.log(endDate);
    // console.log(speed);

    feedBackDisplay.innerHTML =   `<h1> Typing Test Results </h1> <br>
    <P> Words Typed :${wordCount} </p>
    <p> Time Elaspsed: ${speed} </p> <br>
    <p> Words Per Minute (WPM) : ${wordCount/speed} </P> `;
    userInput.value= "";
    testRunning = false;
    btnStartTest.disabled = false ;
    userInput.disabled = true ;
    inputText.innerHTML = "" ;
    }
}

btnEndTest.addEventListener('click', userFeedback);
// console.log(startDate) ;
// console.log(endDate) ;
// 
/* <script>
            const inputText = document.getElementById("input-Text");
const btnStartTest = document.getElementById("btnStartTest");
const btnEndTest = document.getElementById("btnEndTest");
let startDate = "";
let endDate = "";
let speed = "";
let testRunning = false; // Flag to track if the test is running

function fetchInputText() {
    if (!testRunning) { // Prevent starting multiple times
        inputText.textContent = "This is a test paragraph, for testing typing purpose only.";
        startDate = new Date().getTime();
        testRunning = true; // Set the flag to true
        userInput.disabled = false; // Enable user input
        userInput.focus(); // Focus on the input area
        // Disable start button during the test
    }
}

btnStartTest.addEventListener('click', fetchInputText);

const userInput = document.getElementById("user-Input");
userInput.disabled = true; // Disable initially

const feedBackDisplay = document.getElementById("feedBackDispaly");

function userFeedback() {
    if (testRunning) { // Only calculate if a test is running
        endDate = new Date().getTime();
        const testString = userInput.value;
        const wordList = testString.split(/\s+/); // Split by whitespace (spaces, tabs, newlines)
        const wordCount = wordList.length;

        const timeElapsedSeconds = (endDate - startDate) / 1000;
        const timeElapsedMinutes = timeElapsedSeconds / 60;

        if (timeElapsedMinutes === 0) {
            timeElapsedMinutes = 0.01; // Avoid division by zero, set minimum 
        }

        speed = Math.round(wordCount / timeElapsedMinutes); // Calculate WPM

        feedBackDisplay.innerHTML = `<h1> Typing Test Results </h1> <br>
        <p> Words Typed : ${wordCount}</p> <br>
        <p> Time Elapsed: ${Math.round(timeElapsedSeconds)} seconds</p> <br>
        <p> Words Per Minute (WPM) : ${speed} </p> `;

        testRunning = false; // Reset the flag
        userInput.disabled = true; // Disable user input after test
        btnStartTest.disabled = false; // Enable start button
        userInput.value = ""; // Clear the user input field.
    }
}

btnEndTest.addEventListener('click', userFeedback);
</script> */

