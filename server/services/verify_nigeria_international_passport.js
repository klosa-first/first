import axios from 'axios';


const verifyNigeriaInternationalPassport = async (details) => {

const data = {
    "id": details.passportNumber,
    "lastName": details.lastName,
    "isSubjectConsent": true,
    "validations": {
        "data": {
            "firstName": details.firstName,
            "dateOfBirth": details.dateOfBirth
        }
    }
}

// Sending post data to API URL
 const res = await axios.post('https://api.sandbox.youverify.co/v2/api/identity/ng/passport', data);
// const res = await axios.get('https://google.com')
 console.log(res);
  return res;
}


export default verifyNigeriaInternationalPassport;
