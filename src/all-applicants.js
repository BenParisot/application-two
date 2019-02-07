const applicantsJSON = window.localStorage.getItem('applicants');

const applicants = JSON.parse(applicantsJSON);
const tableBodyNode = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index];

    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const city = document.createElement('td');
    const position = document.createElement('td');
    const salary = document.createElement('td');

    firstName.textContent = currentApplicant.firstName;
    lastName.textContent = currentApplicant.lastName;
    city.textContent = currentApplicant.city;
    position.textContent = currentApplicant.position;
    salary.textContent = currentApplicant.salary;

    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(city);
    row.appendChild(position);
    row.appendChild(salary);

    tableBodyNode.appendChild(row);
}

