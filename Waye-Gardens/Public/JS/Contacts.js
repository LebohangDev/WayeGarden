import { validateEmail, validateFullName, validateMessage } from "./Validation.js";
var button = document.getElementById('contacts-button');




//window.onload = init;

export function init2(){

    var emailInput = document.getElementById('contact-Email')
    var nameInput = document.getElementById('contact-Name');
    var messageInput = document.getElementById('contact-Message')
    
    button.disabled = true;

    
    

    nameInput.addEventListener('input', () => validateFullName(nameInput.value, button,));

    emailInput.addEventListener('input', () => validateEmail(emailInput.value, button));

    messageInput.addEventListener('input', () => validateMessage(messageInput.value, button));

    


    
}

async function Contacts(){
    var FullName = document.getElementById('contact-Name').value;
    var Email = document.getElementById('contact-Email').value;
    var Message = document.getElementById('contact-Message').value;

    var ContactData = JSON.stringify({name: FullName, email: Email, message: Message});

    try{
        const response = await fetch('WayeGarden/Contacts', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: ContactData
        })

        if(response.ok){

            
            document.getElementById('msg').innerText = "";
            
            document.getElementById('msg').innerText = "Message sent succesfully, Will get to you as soon as possible!"

            setTimeout(() => {
                document.getElementById('msg').innerText = "";
                document.getElementById('contact-Name').value = "";
                document.getElementById('contact-Email').value = "";
                document.getElementById('contact-Message').value = "";

            }, 2000)
        

        }
        else{
            document.getElementById('msg').innerText = "Message not sent, Please try again later!"
        }
    }
    catch(error){
        document.getElementById('msg').innerText = "Message not sent, Please try again later!"
        console.log("error:", error);
    }

    

}

button.addEventListener('click', function(){
    Contacts();
})




