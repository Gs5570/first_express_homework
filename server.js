const express = require("express");
const app = express();

const port = 3000;

/** routes */
app.get("/greeting", (req, res) => {
	res.send("Hello, Stranger");
});

app.get("/greeting/:name", (req, res) => {
	res.send("Wow! Hello there, " + req.params.name);
});

// tip calculator
app.get("/tip", (req, res) => {
	res.send(
		"this is a tip calculator the next will show the percentage of tip to based on your total;"
	);
});
app.get("/tip/:total/:tipPercentage", (req, res) => {
	let amount = req.params.total;
	let tipPerc = req.params.tipPercentage;

	let total = (amount * tipPerc) / 100;

	res.send(`here is the amount of tips to pay ${total}`);
});

// 8 magic ball

answers = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
];
app.get("/magic", (req, res) => {
	res.send("ask the magic 8 ball a question");
});
app.get("/magic/:question", (req, res) => {
    res.send(`${answers[Math.floor(Math.random() * 20)]}`)
});
app.listen(port, () => {
	console.log(`server listening on port ${port}...`);
});

// take one down and pass it around
let totalbottle = 99;
app.get('/',(req,res) => {
	res.send(`${totalbottle} Bottles of beer of the wall`)

})


app.get('/:number_of_bottles', (req,res) => {
	let bottleNum = req.params.number_of_bottles
	res.send(`${bottleNum} bottles on the wall`)
})

//Fibonacci Number

app.get('/fibonacci/:fibNum', (req,res) => {
	let urlInput = req.params.fibNum

	const fibonacci = urlInput => {
		if (urlInput <= 1) {
		  return urlInput;
		}
		return res.send(`${fibonacci(urlInput - 1) + fibonacci(urlInput - 2)} `) ;
	  };
	  
	
})