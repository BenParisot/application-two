const formNode = document.getElementById('application-form');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const cityNode = document.getElementById('city');
const salaryNode = document.getElementById('salary');

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

    const applicantsJSON = JSON.stringify(applicant);

    window.localStorage.setItem('applicants', applicantsJSON);

    console.log(applicantsJSON);

    // console.log(applicant);


});

