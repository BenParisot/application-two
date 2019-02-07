let applicants = [];

const applicantsJSON = window.localStorage.getItem('applicants');
const applicantsArray = JSON.parse(applicantsJSON);

if(applicantsJSON) {
    for(let index = 0; index < applicantsArray.length; index++) {
        applicants.push(applicantsArray[index]);
    }  
}

console.log(applicants);
console.log(applicantsJSON);