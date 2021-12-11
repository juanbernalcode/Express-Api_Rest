const express = require('express');
const router = express.Router();
const phones = require('../phonebook/phonebook')

const array = [

    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "12-43-234345"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "040-123456"
    },
    {
        id: 4,
        name: "Mary Poppendik",
        number: "040-123456"
    }
];

router.get('/api/persons', (req, res) => {
    console.log(phones.length);
    res.json(phones)
});

router.get('/api/persons/new', (req, res) => {
    array.push(

        {
            id: 20,
            name: "Ryan  Dahl",
            number: "034-56743"
        }
    );

    res.json(array);
    
});

module.exports = router;