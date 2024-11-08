document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-course-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const course = {
            title: document.getElementById('title').value,
            category: document.getElementById('category').value,
            price: document.getElementById('price').value,
            oldPrice: document.getElementById('oldPrice').value,
            level: document.getElementById('level').value,
            duration: document.getElementById('duration').value,
            rating: document.getElementById('rating').value,
            image: document.getElementById('image').value
        };

        // Retrieve existing courses from localStorage or initialize a new array
        let courses = JSON.parse(localStorage.getItem('courses')) || [];
        courses.push(course);

        // Save updated courses to localStorage
        localStorage.setItem('courses', JSON.stringify(courses));

        alert('Course added successfully!');
        form.reset();
    });
});
