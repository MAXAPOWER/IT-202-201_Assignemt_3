const cors = require("cors");
const express = require("express");
const multer = require("multer");

const PORT = 3000;

const app = express();
//ref this: https://www.npmjs.com/package/cors
app.use(cors());
//app.get

//from yt
app.use(express.json());
app.use(express.static(__dirname));

const upload = multer();

function countLetters(letters) {
    //var vowels = consonants = 0;
    var vowels = 0;
    var consonants = 0;

    for (let i of letters) {
        if ("aeiouAEIOU".includes(i)) {
            vowels++;
        }
        else if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(i)) {
            consonants++;
        }
        else {} //this should do nothing...
    }
    return {vowels,consonants};
}

//loosely ref: https://www.youtube.com/watch?v=3ZAKY-CDKog
//use app for express instead of default http pkg
app.post("/countOfVowelsAndConsonants", upload.single("myFile"), (req,res) => {
    const letters = req.file.buffer.toString("utf-8");
    const counter = countLetters(letters);

    res.json(counter);
});

app.listen(PORT);