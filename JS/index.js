document.addEventListener("DOMContentLoaded", function(){

    var HomeDiv = document.querySelector('.Home');
    var Rings = document.getElementById('item1');
    var Flowers = document.getElementById('item2');
    var Man = document.getElementById('item3');
    var ServiceDiv = document.querySelector(".Services");
    var ContactsDiv = document.querySelector('.Contacts');
    var BookingDiv = document.querySelector('.Booking');
    var hamburgerMenu = document.querySelector('.Hamburger');
    

    // initially set home div to dispaly while hiding other sections 
    HomeDiv.style.display = "block";
    ServiceDiv.style.display = 'none';
    ContactsDiv.style.display = 'none';
    BookingDiv.style.display = 'none';
    hamburgerMenu.style.display = 'none';


    /// function to display seperate div sections
    function displayDiv(div){

        HomeDiv.style.display = "none";
        ServiceDiv.style.display = "none";
        ContactsDiv.style.display ='none';
        BookingDiv.style.display = 'none';
       
        div.style.display = "block";


    }
    
    function intervalDiv(ids){

        var currentindex = 0

        setInterval(function(){

            ids.forEach(function(id){

                id.classList.add('hidden');


           
           
            })
            ids[currentindex].classList.remove("hidden");
            currentindex =(currentindex +1) % ids.length;

               


        }, 11000)

    }
    intervalDiv([Rings, Flowers, Man])

    // adding event listeners to hide sections on click of nav bar

    document.getElementById('Home').addEventListener('click', function(){
        displayDiv(HomeDiv);
    })
    document.getElementById("Services").addEventListener('click', function(){

        displayDiv(ServiceDiv);
    
    })

    document.getElementById('Contacts').addEventListener('click', function(){
        displayDiv(ContactsDiv);
    })

    document.getElementById('Booking').addEventListener('click', function(){
        displayDiv(BookingDiv);
    })

    document.getElementById('Home2').addEventListener('click', function(){
        displayDiv(HomeDiv);
    })
    document.getElementById("Services2").addEventListener('click', function(){

        displayDiv(ServiceDiv);
    
    })

    document.getElementById('Contacts2').addEventListener('click', function(){
        displayDiv(ContactsDiv);
    })

    document.getElementById('Booking2').addEventListener('click', function(){
        displayDiv(BookingDiv);
    })
    document.getElementById('openMenu').addEventListener('click', function(){
        hamburgerMenu.style.display = 'flex';
        document.getElementById('openMenu').style.display = 'hidden;'
    })

    document.getElementById('closeMenu').addEventListener('click', function(){
        hamburgerMenu.style.display = 'none';
        document.getElementById('openMenu').style.display = 'visible';
        
    })



})
