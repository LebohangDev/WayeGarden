import { validateFullName2, validateDate, validatePhone, validateEmail2} from "./Validation.js";
import { init2 } from "./Contacts.js";
var button = document.getElementById('booking-button');


window.onload = mainInit;

function mainInit(){
    init2()
    init();

}

function init(){
    var fullName = document.getElementById("Booking-Name");
    var email = document.getElementById('Booking-Email');
    var phone = document.getElementById("Booking-Phone");
    var date = document.getElementById("Booking-Date");
   
 
    button.disabled = true;


    fullName.addEventListener("input", () => validateFullName2(fullName.value, button));
    email.addEventListener("input", () => validateEmail2(email.value, button));
    phone.addEventListener("input", () => validatePhone(phone.value, button));
    date.addEventListener("input", () => validateDate(date.value, button));
   
    
  

}










window.isBooked = async()=>{
    var fullName = document.getElementById("Booking-Name");
    var email = document.getElementById('Booking-Email');
    var phone = document.getElementById("Booking-Phone");
    var date = document.getElementById("Booking-Date");
    var Booking = document.getElementById("Booking-Service");
    console.log(Booking);

    var BookingData = JSON.stringify({fullName: fullName.value, email: email.value, phone: phone.value, date: date.value, Service: Booking.value})

    try{
        const response = await fetch('/WayeGarden/Booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },

                body: BookingData
        })
        if(response.ok){
            document.getElementById('msg2').innerText = "";

            document.getElementById('msg2').innerText = "Booking Succesful! We will Contact you shortly";

            setTimeout(() =>{
                document.getElementById('msg2').innerText = "";
                var fullName = document.getElementById("Booking-Name").value = "";
                document.getElementById('Booking-Email').value = "";
                document.getElementById("Booking-Phone").value = "";;
                document.getElementById("Booking-Date").value = "";;
                document.getElementById("Booking-Service").value = "";;


            }, 2000)
      
        }
        else{
            if(response.status === 500){

                document.getElementById('msg2').innerText = "Date is already Booked!";
                return;
 
            }


        }
        
    }catch(error){
        console.log("Booking failed, try again later:", error);
        document.getElementById('msg2').innerText = "Booking Failed, try again later!";


    }




    
}

button.addEventListener('click', function(){
    isBooked();
})
