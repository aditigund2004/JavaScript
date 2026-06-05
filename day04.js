console.log("hello")


// In JavaScript, innerHTML is a property used to get or change the HTML content inside an element.


// Using your previous example (<h1 id="one">Welcome to Day 04</h1>), here is how innerHTML works.


// The DOM stands for Document Object Model. 
// It is a programming interface that turns your HTML document into a tree-like structure, 
// allowing languages like JavaScript to read, change, and style the webpage dynamically.
// When a browser loads your page, it automatically creates the DOM.



// document.getElementById() is a built-in JavaScript method used to select a single,
// specific HTML element on a webpage by matching its unique id attribute.

// It is the most common way to grab an element from the DOM (Document Object Model) 
// so that you can read its content, change its styles, or listen for user actions.

// dom --> used to load pages  when i click on button the page should change or load new

// html is static language

// document --> it used to manipulate  or change html 

function greet(){
    console.log("greet function")
}


function msge(){
    document.getElementById('two').innerHTML = 'Hello form dom!!!!!!!!!!!'
}


function change(){
    let htag = document.getElementById('one');

    if (htag.innerHTML == 'welcome to day 04'){

        htag.innerHTML = 'change by dom';
        htag.style.backgroundColor = 'grey';
    }
    else if(htag.innerHTML == 'change by dom'){

        htag.innerHTML = 'dom changed'
        htag.style.backgroundColor='red';

    }

    else{

        htag.innerHTML = 'welcome to day 04';
        htag.style.backgroundColor='blue'

    }
    
}

function checklogin(){
    console.log("check login details")

    let un = document.getElementById('uname').value
    let pwd = document.getElementById('pass').value

    let msg = document.getElementById('msg')

    if(un === 'ram' && pwd === '12345'){
        msg.innerHTML = 'login success!!!!!!!!!!';
        msg.style.color = 'blue'

    }else{
        msg.innerHTML = 'invalid username and password'
        msg.style.color = 'red'

    }
    console.log(un)
    console.log(pwd)
}