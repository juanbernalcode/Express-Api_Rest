export function phonebook(req, res) {
    const phones = [
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


    res.json(phones);
}