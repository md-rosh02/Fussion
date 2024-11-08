document.addEventListener("DOMContentLoaded", function() {
    loadCourses();

    document.getElementById("edit-profile-modal").style.display = "none";
    document.getElementById("add-course-modal").style.display = "none";
});

function loadCourses() {
    fetch('/api/courses')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const courseList = document.getElementById("course-list");
            courseList.innerHTML = "";
            data.forEach(course => {
                const li = document.createElement("li");
                li.textContent = course.title;
                courseList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error loading courses:', error);
        });
}

function editProfile() {
    document.getElementById("edit-profile-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("edit-profile-modal").style.display = "none";
    document.getElementById("add-course-modal").style.display = "none";
}

function saveProfile() {
    const newName = document.getElementById("new-name").value;
    const newBio = document.getElementById("new-bio").value;

    document.getElementById("profile-name").textContent = newName;
    document.getElementById("profile-bio").textContent = newBio;
    closeModal();
}

function addCourse() {
    document.getElementById("add-course-modal").style.display = "block";
}

function saveCourse() {
    const title = document.getElementById("course-title").value;
    const description = document.getElementById("course-description").value;

    fetch('/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save course');
        }
        loadCourses();
        closeModal();
    })
    .catch(error => {
        console.error('Error saving course:', error);
    });
}