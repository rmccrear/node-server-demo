const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// create an "array literal" and assign it to a variable
let iceCreamFlavors = ["chocolate", "stawberry", "vanilla", "pistachio"]; 
let index = 0;
console.log("I like: " + iceCreamFlavors[index]);
index = index + 1;
console.log("I like: " + iceCreamFlavors[index]);
index = index + 1;
console.log("I like: " + iceCreamFlavors[index]);
index = index + 1;
console.log("I like: " + iceCreamFlavors[index]);

const myDog = {
    firstName: "Rover",
    isTrained: true,
    birthday: "1/23/2025",
    age: 0.5,
    breed: "German Shephard"
};

// This is a headache.
app.get("/my-dog", (req, res) => {
    let output = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">';
    output = output +'<h1 class="bg-primary">My dog is a ' + myDog["breed"] + ".</h1>";
    output = output + "<p>He is " + myDog.age + " years old</p>";
    console.log(output);
    res.send(output);
});


const myCat = {
    firstName: "Frisky",
    age: 10,
    height: 7
}

// This one uses string template literals.
app.get("/my-cat", (req, res) => {
    const favFood = req.query.food;
    console.log(favFood);
    res.send(`
        <h1>My cat</h1>
        <p>My cat's name is ${myCat["firstName"]}. He likes ${favFood}. He is a fat cat. </p>
        `);
})

// make an API
app.get("/api/v1/my-cat-food", (req, res) => {
    res.json({
        brand: "Whiskas",
        weight: 10,
        flavor: "fish and chips"
    });
});

app.get("/", (req, res) => {
    console.log("Request for root path.");
    let output = "I have ";
    let sum = 1 + 1; // ice cream scoops
    output = output + sum;
    output = output + " scoops."
    if(sum>2){
        console.log("Enjoy your Sundae.");
    } else {
        console.log("Enjoy your cone.")
    }
    sum = sum + 100;
    console.log(sum>2 ? "Enjoy your Sundae, would you like a banana split?" : "Enjoy your cone!!" );

    // console.log(output);
    res.send(output);
});

app.get("/about-me", (req, res) => {
    res.send(`
        <html>
            <h1> My name is Robert </h1>
            <p> I love dogs. I have a German Shephard.</p>
        </html>
        `);
})


app.get("/sign-up", (req, res) => {
    const name = req.query.firstName;
    res.send("Hello " + name);
})

app.get("/my-dogs-story", (req, res) => {
    const dogName = "Rover";
    const treat = "bones";
    const trick = "shake";

    res.send(`
            My dog. <br>
            My dog ${dogName} loves ${treat}. 
            The only way for him to ${trick} is to give him a ${treat}.
    `);
});

app.get("/place-order", (req, res) => {
    const flav = req.query.flavor;
    const quant = req.query.quantity;
    console.log(flav);
    res.send(`
        Review your order <br>
        an order of ${flav} with ${quant} scoop(s).
        `);
});

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});