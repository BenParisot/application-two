let applicants = [];
let currentApplicant = null;

const applicantsJSON = window.localStorage.getItem('applicants');
const applicantsArray = JSON.parse(applicantsJSON);

if(applicantsJSON) {
    for(let index = 0; index < applicantsArray.length; index++) {
        applicants.push(applicantsArray[index]);
    }  
}

const searchParams = new URLSearchParams(window.location.search);
const queryName = searchParams.get('name');

for(let index = 0; index < applicants.length; index++) {
    if(queryName === applicants[index].firstName) {
        currentApplicant = applicants[index];
    }
}

console.log(currentApplicant);
