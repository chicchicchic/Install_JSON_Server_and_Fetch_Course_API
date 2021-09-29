var courseAPI = 'http://localhost:3000/courses';

fetch(courseAPI)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(err) {
        alert('Load failed !')
    });