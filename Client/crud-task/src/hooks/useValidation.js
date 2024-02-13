import { emailRegex,nameRegex,passwordRegex } from "../functions/getRegex";


function validate(values) {
    const errors = {};
    console.log(values.name)
    console.log(values.email)
    console.log(values.password)
    if (values.name.length < 2) {
      errors.name = "name is too short";
    } else if (!values.name.match(nameRegex)) {
      errors.name = "Invalid form first name can be 3 to 16 characters ";
    }
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid form write a valid email";
    }
    if (!passwordRegex.test(values.password)) {
      errors.password = "Weak password. Please choose a stronger password.";
    }
   

    return errors;
  }


  export default validate