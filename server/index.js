const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors)
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tobinho1',
    database: 'recepie_book'
});


// db.connect((err) => {
//     if (err) throw err
//     console.log('mysql connected');
// })

// app.post("/a", function (req, res) {
//     console.log('b');
//     alert('a')
//     const recepieName = req.body.name;
//     const sqlInsert = 'INSERT INTO recepies (name) VALUES("asdad");';
//     db.query(sqlInsert, (err, res) => {
//         err ? console.log(err) : console.log('Worked');
//     });
// })

// .put(function (req, res) {
//     res.send('Update the book');
// });
// app.post("/createRecepie", (req, res) => {

// });

app.get('/', (req, res) => {
    db.query('INSERT INTO recepies (name) VALUES ("AA");')
    res.send('hello');
})

app.listen(3005, () => {
    console.log('running on 3005');
});