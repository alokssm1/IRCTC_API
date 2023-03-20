const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = [];
const trainTable = [{
    "from": "vglb",
    "to": "bsb",
    "trains": [
        "Bundelkhand express",
        "chambal express",
        "garib rath"
    ]
}];
const masterList = []
// creating endpoints
app.get('/', (req, res)=>{
    res.send("This is / endpoint");
})

// for checking healthcheck
app.get('/healthCheck', (req, res)=>{
    res.send("Your device is in good health!!");
})

app.post('/createUser', (req, res)=>{
    const name = req.body.name;
    const id = req.body.id;
    const companyName = req.body.company;

    const restructreData = {
        name,
        id,
        companyName
    }

    // databse operations
    db.add(restructreData);

    // respose send 
    res.send(restructreData)
})

app.delete('/deleteUser', (req, res)=>{
    db.forEach((data)=>{
        if(data.id === 'shdyhwe347343ud'){
            db.slice(id);
        }
    })
})

app.post("/login", (req, res)=>{
    const pin = req.body.pin;
    const captcha = req.body.captcha;

    try {
        db.forEach((data)=>{
            if(data.pin === pin && data.captcha === captcha){
                res.send('user is logged in !!!');
            }
        })
    } catch (err) {
        res.send("The user is invalid!!");
    }
})

app.post('/trainSearch', (req, res)=>{
    const from = req.body.from;
    const to = req.body.to;
    const depratureDate = req.body.date;
    const flexibleWithDate = req.body.flexibleWithDate;

    try {
        trainTable.forEach((trains)=>{
            if(trains.from === from && trains.to === to){
                res.send(data.trains)
            }
        })
    } catch (error) {
        res.send("No direct train availabale!!")
    }
})

// add new passenger to masterlist
app.post('/addToMasterList', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const birthPrefrence = req.body.birthPrefrence;

    masterList.add({name, age, gender, birthPrefrence});

    res.send(masterList);
})

// add new passenger to masterlist
app.get('/getMasterList', (req, res)=>{
    res.send(masterList);
})

// creating a server
const PORT = 4000;
app.listen(PORT, ()=>{
    console.log("OKK!, Server is started at: ", PORT);
})
