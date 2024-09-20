const apiUrl = 'https://strapiqa.sparts.app/api/students';
const studentTable = document.getElementById('student-table');
const studentList = document.getElementById('student-list');
console.log('hello');
fetch(apiUrl)
    .then(response => {
		response.json()
		
	console.log(response);
	})
   .then(data => {
		
        data.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
            `;
            studentList.appendChild(row);
        });
    })
