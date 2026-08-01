//Generating thought
const thoughts = [
    "Small steps still move you forward.",
    "One task done is one worry gone.",
    "Progress matters more than perfection.",
    "What gets written down gets done.",
    "Consistency beats motivation every time.",
    "One task complete, one step closer.",
    "Plan today, thank yourself tomorrow.",
    "Small steps, big results.",
    "Discipline shows up when motivation leaves.",
    "Every checkmark is proof you're trying.",
    "Start messy, but start.",
    "What you track, you can improve.",
    "Today's focus builds tomorrow's future.",
    "Habits are built by repetition, not perfection.",
    "One list, one direction.",
    "Being productive beats being busy.",
    "Every day is a chance to reset.",
    "Small wins deserve to be celebrated.",
    "A plan without action is just a dream.",
    "Your best day is when you compete with yourself.",
    "Clarity comes from action, not just thinking.",
    "One task done, one less thing on your mind.",
    "Momentum begins the moment you start.",
    "Those who track, tend to grow.",
    "Today's effort becomes tomorrow's result.",
    "A clear list beats every distraction.",
    "Progress becomes visible once you write it down.",
    "Every task is a small promise to yourself.",
    "Done is better than perfect.",
    "Your system is more reliable than your motivation.",
    "You won't do everything in a day, but do something.",
    "Those who plan, waste less time.",
    "Don't push today's work to tomorrow.",
    "Focus on one thing at a time.",
    "Every checklist is a small victory list.",
    "Those who take action, build the path.",
    "Tomorrow gets better when today gets a little effort.",
    "Simplicity is the soul of productivity.",
    "What's written down doesn't get forgotten.",
    "One step today, one step daily — that's growth."
];

const thought = document.getElementById("thought");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function() {
    //Displaying the thought
    let random_index = Math.floor(Math.random() * thoughts.length);
    let randomThought = thoughts[random_index];
    thought.innerText = randomThought;

    //Decorating the outline of the thought
    thought.style.border = "4px solid black";
    thought.style.marginTop = "25px";
    thought.style.background = "linear-gradient(orange, red)";
    thought.style.fontSize = "20px";
    thought.style.marginLeft = "75px";
    thought.style.marginRight = "75px";
});

//Generating heading
let name = document.getElementById("name");
let date = document.getElementById("date");
const heading = document.getElementById("heading");
const submitButton = document.getElementById("submit-button");
const targetList = document.getElementById("target-list");

submitButton.addEventListener("click", function() {
    let userName = name.value;
    let currentDate = date.value;
    heading.innerText = userName+"'s to do list for date - "+currentDate;

    //designing list box  style
    targetList.style.border = "5px solid black";
    targetList.style.background = "linear-gradient(rgb(227, 62, 89), rgb(239, 225, 33))";
    targetList.style.textAlign = "center";
    targetList.style.marginBottom = "40px";
    targetList.style.paddingTop = "1.8%";
    targetList.style.paddingBottom = "1.8%";

    //designing heading style
    heading.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    heading.style.textDecoration = "underline solid 3px black";
    heading.style.color = "black";
});

//Taking input of targets and displaying them along with reqquired options
let list = document.getElementById("list");
let target = document.getElementById("target");
let addButton = document.getElementById("add");
let doneBtn, deleteBtn;

addButton.addEventListener("click", function() { 
    let li = document.createElement("li");

    //initializing done button
    doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("done-btn");

    //initializing delete button
    deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.innerText = target.value;
    li.append(doneBtn);
    li.append(deleteBtn);

    list.appendChild(li);
    target.value = "";
    
    //designing List box
    targetList.style.border = "5px solid black";
    targetList.style.background = "linear-gradient(rgb(227, 62, 89), rgb(239, 225, 33))";
    targetList.style.marginBottom = "40px";
    targetList.style.paddingTop = "1.8%";
    targetList.style.paddingBottom = "1.8%";

    //designing List text style
    list.style.textAlign = "left"
    list.style.fontFamily = "monospace";
    list.style.fontSize = "23px";
    list.style.marginLeft = "3%";
    list.style.color = "black";
    list.style.marginTop = "2%";

    //designing done button style
    doneBtn.style.border = "5px solid black";
    doneBtn.style.borderRadius = "50%";
    doneBtn.style.backgroundColor = "rgb(255, 0, 123)";
    doneBtn.style.fontFamily = "cursive";
    doneBtn.style.fontSize = "20px";
    doneBtn.style.width = "150px";
    doneBtn.style.height = "40px";
    doneBtn.style.marginLeft = "10%";

    //designing delete button style
    deleteBtn.style.border = "5px solid black";
    deleteBtn.style.borderRadius = "50%";
    deleteBtn.style.backgroundColor = "rgb(255, 0, 123)";
    deleteBtn.style.fontFamily = "cursive";
    deleteBtn.style.fontSize = "20px";
    deleteBtn.style.width = "150px";
    deleteBtn.style.height = "40px";
    deleteBtn.style.marginLeft = "2%";
});

//Making done button and delete button working
list.addEventListener("click", function(event) {
    if (event.target.classList.contains("done-btn")) {
        event.target.closest("li").classList.toggle("completed");
        alert("congrats!!");
    }

    if (event.target.classList.contains("delete-btn")) {
        event.target.closest("li").remove();
    }
});

//Initializing the rating button variables
let ratingInput = document.getElementById("rating-input");
let submitButton1 = document.getElementById("submit-button-1");
let ratingReaction = document.getElementById("rating-reaction");

//Making the submit button working
submitButton1.addEventListener("click", function() {
    
    let rating = ratingInput.value;

    if(rating <= 4)
    {
        ratingReaction.innerText = "Oops I apologize you didn't like the app, I will try to improve.";
    }
    else if(rating>4 && rating <=7)
    {
        ratingReaction.innerText = "Thanks for your rating, it means a lot. I will try to improve based on it.";
    }
    else
    {
        ratingReaction.innerText = "Yayyyyy I am glad you enjoyed my app this much, THANK YOU!!!!";
    }
});