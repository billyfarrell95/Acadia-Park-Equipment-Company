const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const form = document.getElementById('form')

const nameErrorElement = document.getElementById('name-error')
const messageErrorElement = document.getElementById('message-error')
const emailErrorElement = document.getElementById('email-error')

/*prevent page from submitting if there are errors 
form validation without HTML "required" property */

// name validation
form.addEventListener('submit', (e) => {
    let nameErrorMessage = []
    if (name.value === '' || name.value == null) {
        nameErrorMessage.push('Name is required')
    }
    
    if (nameErrorMessage.length > 0) {
        e.preventDefault()  
        nameErrorElement.innerText = nameErrorMessage
    }
})

// email validation (required only)

form.addEventListener('submit', (e) => {
    let emailErrorMessage = []
    if (email.value === '' || email.value == null) {
        emailErrorMessage.push('Email is required')
    }
    
    if (emailErrorMessage.length > 0) {
        e.preventDefault()  
        emailErrorElement.innerText = emailErrorMessage
    }
})

// message validation
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




