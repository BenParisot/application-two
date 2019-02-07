const formNode = document.getElementById('application-form');
const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const cityNode = document.getElementById('city');
const positionNode = document.getElementById('position-area');
const salaryNode = document.getElementById('salary');


formNode.addEventListener('submit', function(event){
    event.preventDefault();
    const firstName = firstNameNode.value;
    const lastName = lastNameNode.value;
    const city = cityNode.value;
    const position = positionNode.;
    // const salary = salaryNode.value;

    const applicant = {
        firstName: firstName,
        lastName: lastName,
        city: city,
        position: position,
        // salary: salary
    }

    console.log(applicant);


});

