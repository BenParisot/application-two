let applicants = [];
let currentApplicant = null;

const applicantsJSON = window.localStorage.getItem('applicants');
const applicantsArray = JSON.parse(applicantsJSON);

const applicantsTableNode = document.getElementById('applicant-detail');

if(applicantsJSON) {
    for(let index = 0; index < applicantsArray.length; index++) {
        applicants.push(applicantsArray[index]);
        break;
    }  
}

const searchParams = new URLSearchParams(window.location.search);
const queryName = searchParams.get('name');

for(let index = 0; index < applicants.length; index++) {
    if(queryName === applicants[index].firstName) {
        currentApplicant = applicants[index];
    }
}

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

applicantsTableNode.appendChild(row);

console.log(currentApplicant);
