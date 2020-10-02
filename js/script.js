// constants for the different form components. These are used to check the input.
const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const form = document.getElementById('form')

// defines elements based on IDs. Error message are shown when these constants are called and parameters are or aren't met 
const nameErrorElement = document.getElementById('name-error')
const messageErrorElement = document.getElementById('message-error')
const emailErrorElement = document.getElementById('email-error')

// name validation (used to display message if there isn't input)
form.addEventListener('submit', (e) => {  // doesn't allow incomplete form to be submitted
    let nameErrorMessage = []  // empty array that can be filled after validation
    if (name.value === '' || name.value == null) { // ff the input field is empty, the message will be displayed
        nameErrorMessage.push('Name is required')
    }
    
    if (nameErrorMessage.length > 0) {  // checks if there is an error message present
        e.preventDefault()  // prevents incomplete form from being submitted
        nameErrorElement.innerText = nameErrorMessage  // displays error message
    }
})

// email validation (used to display message if there isn't input)

form.addEventListener('submit', (e) => {
    let emailErrorMessage = [] // creates an array to store
    if (email.value === '' || email.value == null) {
        emailErrorMessage.push('Email is required')
    }
    
    if (emailErrorMessage.length > 0) {
        e.preventDefault()  
        emailErrorElement.innerText = emailErrorMessage
    }
})

// message validation (used to display message if there isn't input)
form.addEventListener('submit', (e) => {
    let messageErrorMessage = []
    if (message.value === '' || message.value == null) {
        messageErrorMessage.push('Message is required')
    }
    
    if (messageErrorMessage.length > 0) {
        e.preventDefault()  
        messageErrorElement.innerText = messageErrorMessage
    }
})




