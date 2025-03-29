const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function appendMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message', className);
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
}

function getBotResponse(userMessage) {
    // Basic responses. Replace with a more sophisticated system.
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("headache")) {
        return "Headaches can have many causes. Consider drinking water and resting. If severe, consult a doctor.";
    } else if (userMessage.includes("fever")) {
        return "A fever can indicate an infection. Please monitor your temperature and consult a doctor if it persists.";
    } else if (userMessage.includes("stomach ache")) {
        return "Stomach aches can be due to various reasons. Try to rest and drink clear fluids. If the pain is severe, see a doctor.";
    } else if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userMessage.includes("appointment")) {
        return "To schedule an appointment, please call our clinic at 555-1234.";
    } else if (userMessage.includes("symptoms")){
        return "Please describe your symptoms in detail so that I can provide better assistance."
    }else if (userMessage.includes("cold")) {
        return "a common viral infection of the nose and throat,counsult a doctor!."
    }else if (userMessage.includes("help")){
        return "How can I help you today?"
    }else if (userMessage.includes("cough")) {
        return "A sudden, forceful hacking sound to release air and clear an irritation in the throat or airway, consult a doctor!."
    }else if (userMessage.includes("influenza")) {
        return "A common viral infection that can be deadly, especially in high-risk groups, flu is primarily treated with rest and fluid intake to allow the body to fight the infection on its own, symptoms like fever, chills, mjuscle aches, cough,congestion, runny nose, headaches and fatigue."
    }else if (userMessage.includes("jaundicd")) {
        return "Yellow skin caused by the build-up of billirubin in the blood, immediately consult a doctor!"
    }}else if (userMessage.includes("hepatitis")) {
        return " Inflammation of the liver, consult a doctor!"
    }else if (userMessage.includes("typoid")) {
        return "typoid is a bacterial infection that spreads through contaminated food and water, symptoms like high fever,headache, stomach pain, weakness, vomiting and loose stools, treatment includes antibiotics and fluids."
    }}else if (userMessage.includes(" ")) {
    }else if (userMessage.includes(" asthma")) {
        return "A condition in which a person's airway become inflamed, narrow and swell and produce extra mucus, which make it difficult difficult to breathe, Consult a doctor!"
    }else {
        return "I'm still learning. Please provide more specific information, or ask a different question.";
    }
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user-message');
        userInput.value = '';

        // Simulate bot response (replace with actual logic)
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage(botResponse, 'bot-message');
        }, 500); // Simulate a delay
    }
}

sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Optional: Add a function to clear the chat history.
function clearChat() {
    chatContainer.innerHTML = ''; // Clear all messages
}

// Example: Add a clear chat button (in HTML) and call clearChat() on click.
// <button onclick="clearChat()">Clear Chat</button>

//Optional: add a function to handle scroll behavior if the chat container becomes very large.

function handleScroll(){
  chatContainer.addEventListener('scroll', ()=>{
    //add logic here if needed.
  });
}

handleScroll();

// Optional: add a function to handle the initial greeting.
function initialGreeting(){
    setTimeout(()=>{
        appendMessage("Hello, I am a healthcare chatbot. How can I help you today?","bot-message");

    }, 300);
}

initialGreeting();

//Optional: Add a loading indicator while the bot is processing.
function showLoadingIndicator(){
    const loadingDiv = document.createElement('div');
    loadingDiv.textContent = "Loading...";
    loadingDiv.classList.add('message', 'bot-message', 'loading');
    chatContainer.appendChild(loadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return loadingDiv;
}

function hideLoadingIndicator(loadingDiv){
    if (loadingDiv){
        loadingDiv.remove();
    }
}

//Adjust the send message function to use the loading indicator.
function sendMessageWithLoading(){
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user-message');
        userInput.value = '';
        const loadingDiv = showLoadingIndicator();

        setTimeout(() => {
            const botResponse = getBotResponse(message);
            hideLoadingIndicator(loadingDiv);
            appendMessage(botResponse, 'bot-message');
        }, 800);
    }
}

sendButton.removeEventListener('click', sendMessage);
sendButton.addEventListener('click', sendMessageWithLoading);

userInput.removeEventListener('keypress', (event)=>{
  if(event.key === 'Enter'){
    sendMessage();
  }
});
userInput.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter'){
    sendMessageWithLoading();
  }
});