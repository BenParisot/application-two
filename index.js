const formNode = document.getElementById('application-form');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');

let applicants = [];

let applicantsJSON = window.localStorage.getItem('applicants');

if(applicantsJSON) {
    applicants = JSON.parse(applicantsJSON);
}

let salary = 100;
salaryNode.addEventListener('change', function() {
    salary = salaryNode.value; 
});

formNode.addEventListener('submit', function(event){
    event.preventDefault();
    const firstName = firstNameNode.value;
    const lastName = lastNameNode.value;
    const city = cityNode.value;
    let position = null;
    const positions = document.getElementsByName('position');
    for(let index = 0; index < positions.length; index++) {
        if(positions[index].checked) {
            position = positions[index].value;
        }
    }
    

    const applicant = {
        firstName: firstName,
        lastName: lastName,
        city: city,
        position: position,
        salary: salary
    };

    // console.log(applicant);

    applicants.push(applicant);

    const applicantsJSON = JSON.stringify(applicants);

    window.localStorage.setItem('applicants', applicantsJSON);

    console.log(applicantsJSON);

    // console.log(applicant);


});

