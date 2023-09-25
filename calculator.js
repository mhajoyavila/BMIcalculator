const express = require('express');
// const bodyParser = require('body-parser');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    if (!isNaN(weight) && !isNaN(height)) {
        const bmi = calculateBMI(weight, height);
        res.send(`Your BMI: ${bmi.toFixed(2)}`);
    } else {
        res.send("Please enter valid weight and height.");
    }
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});


