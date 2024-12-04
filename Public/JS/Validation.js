

export function validateEmail(email, button){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;

    var result = emailRegex.test(email);


    if(result){
        document.getElementById('msg').innerText = '';
        document.getElementById('msg2').innerText = '';
        button.disabled = false;

    }else{
        document.getElementById('msg').innerText = 'Invalid Email';
        document.getElementById('msg2').innerText = 'Invalid Email';
        
        button.disabled = true;
    }
    return result;

    

}
export function validateEmail2(email, button){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;

    var result = emailRegex.test(email);


    if(result){
        document.getElementById('msg2').innerText = '';
        button.disabled = false;
        document.getElementById("Booking-Name").disabled = false;
        document.getElementById("Booking-Phone").disabled = false;
        document.getElementById("Booking-Date").disabled = false;
        document.getElementById("Booking-Service").disabled = false;

    }else{
    
        document.getElementById('msg2').innerText = 'Invalid Email';
        button.disabled = true;
        document.getElementById("Booking-Name").disabled = true;
        document.getElementById("Booking-Phone").disabled = true;
        document.getElementById("Booking-Date").disabled = true;
        document.getElementById("Booking-Service").disabled = true;
    }
    return result;

    

}


export function validateFullName(name, button){
    var fullNameRegex = /^[a-zA-Z\s]+$/;
    var result = fullNameRegex.test(name);
    
    if(result){
        document.getElementById('msg').innerText = '';
        document.getElementById('msg2').innerText = '';
        button.disabled = false;
    }else{
        document.getElementById('msg').innerText = 'Invalid Name';
        document.getElementById('msg2').innerText = 'Invalid Name';
        button.disabled = true;
    }
}


export function validateFullName2(name, button){
    var fullNameRegex = /^[a-zA-Z\s]+$/;
    var result = fullNameRegex.test(name);
    
    if(result){
       
        document.getElementById('msg2').innerText = '';
        button.disabled = false;
        document.getElementById("Booking-Email").disabled = false;
        document.getElementById('Booking-Email').disabled = false;
        document.getElementById("Booking-Date").disabled = false;
        document.getElementById("Booking-Service").disabled = false;
    }else{
      
        document.getElementById('msg2').innerText = 'Invalid Name';
        document.getElementById('Booking-Email').disabled = true;
        document.getElementById("Booking-Phone").disabled = true;
        document.getElementById("Booking-Date").disabled = true;
        document.getElementById("Booking-Service").disabled = true;
        button.disabled = true;
    }
}

export function validateMessage(message, button){
    

    if(message.length > 100){
       document.getElementById('msg').innerText = 'Message is too long';
       
       button.disabled = true;
    }
    else{
        document.getElementById('msg').innerText = '';
        button.disabled = false;

    }

}

export function validatePhone(phone, button){
    const phoneRegex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    var result = phoneRegex.test(phone);
    if(result){
        document.getElementById('msg2').innerText = '';
        button.disabled = false;
        document.getElementById("Booking-Name").disabled = false;
        document.getElementById('Booking-Email').disabled = false;
        document.getElementById("Booking-Date").disabled = false;
        document.getElementById("Booking-Service").disabled = false;
    }
    else{
        document.getElementById('msg2').innerText = 'Invalid Phone Number';
        button.disabled = true;
        document.getElementById("Booking-Name").disabled = true;
        document.getElementById('Booking-Email').disabled = true;
        document.getElementById("Booking-Date").disabled = true;
        document.getElementById("Booking-Service").disabled = true;
    }
}

export function validateDate(date, button){
    

    const today = new Date();
    // setting hours to 00:00:00 to prevent time comparioson issues
    today.setHours(0 , 0, 0, 0);

    const inputDate = new Date(date);
    inputDate.setHours(0, 0, 0, 0,)


    if(inputDate >= today){
        document.getElementById('msg2').innerText = '';
        button.disabled = false;
        document.getElementById("Booking-Name").disabled = false;
        document.getElementById('Booking-Email').disabled = false;
        document.getElementById("Booking-Phone").disabled = false;
        document.getElementById("Booking-Service").disabled = false;
    }
    else{
        document.getElementById('msg2').innerText = 'Invalid Date, must be a future date!';
        button.disabled = true;
        document.getElementById("Booking-Name").disabled = true;
        document.getElementById('Booking-Email').disabled = true;
        document.getElementById("Booking-Phone").disabled = true;
        document.getElementById("Booking-Service").disabled = true;
      
    }

}

