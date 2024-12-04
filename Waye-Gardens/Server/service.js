import express from 'express';
import bodyParser from 'body-parser';
import expressSession from 'express-session'
import { connectToDatabase } from './database.js';



// sesstion express module

export const app = express();


// setting up express to use body-parser with JSON formatted data
app.use(bodyParser.json());


// configure express to use express-session
app.use(
    expressSession({
        secret: 'secret',
        cookie: {maxAge: 6000000},
        resave: false,
        saveUninitialized: true,
    })
);



// Set up express to serve static files from the directory called 'public'
app.use(express.static('../Public'));
app.use(express.json())




app.post('/WayeGarden/Contacts', async (request, response) =>{
    try{

        const ContactsData = request.body;
        const db = await connectToDatabase();
        var contactsCollection = db.collection('Contacts');

        var result = await contactsCollection.insertOne(ContactsData);
        console.log("Insert result:", result);
        
        if(result.acknowledged){
            response.status(201).json({message: " user Contacts information stored", ContactsData})

        }
        else{
            response.status(500).json({message: "Error storing user Contacts information"})
        }
      

    }catch(error){

        response.status(500).json({message: "Fialed to store UserData contacts info:", error})

    }
})

app.post('/WayeGarden/Booking', async (request, response) =>{
    try{
        const BookingData = request.body;
        const db = await connectToDatabase();
        const bookingsCollection =  db.collection('Bookings');

      

        var exisitingBooking = await bookingsCollection.findOne({date: BookingData.date})

        if(exisitingBooking){
            response.status(500).json({message: "Booking already exists for this date"})
          
        }else{
            await bookingsCollection.insertOne(BookingData);
            response.status(201).json({message: "Booking information stored", BookingData})

        }

    }catch(error){
        console.log(error);
        response.status(500).json({message: "Failed to store Booking information", error})
    }
})

// Start the app listening on port 8080
app.listen(8080, () => {
    console.log("Listening on 8080.");
});




