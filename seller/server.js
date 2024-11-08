const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve your static files (HTML, CSS, JS)

let courses = [
    { title: "Course 1", description: "Description 1" },
    { title: "Course 2", description: "Description 2" }
];

app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.post('/api/courses', (req, res) => {
    const { title, description } = req.body;
    if (title && description) {
        courses.push({ title, description });
        res.status(201).send();
    } else {
        res.status(400).send('Invalid course data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});