const Validator = require ('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) =>{
    let errors ={};

    //check email field
    if(isEmpty(data.email)) {
        errors.email = "Email field can't be empty";
    }else if (!Validator.isEmail(data.email)){
        errors.email ="Email is Invalid. Provide a valid email";
    }

    //check name field
    if(isEmpty(data.name)) {
        errors.name = "Name field cannot be empty";
    }else if (!Validator.isLength(data.name, {min:2, max:50})){
        errors.name ="Name must be in between 2-50 characters";
    }

    //check password field
    if(isEmpty(data.password)) {
        errors.password = "Password field cannot be empty";
    }else if (!Validator.isLength(data.password, {min:6, max:150})){
        errors.password ="Password must be in between 6-150 characters";
    }

    //check confirm password field
    if(isEmpty(data.confirmPassword)) {
        errors.confirmPassword = "Confirm password field cannot be empty";
    }else if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = "Password and Confirm Password fields must match";
      }

      return {
        errors,
        isValid: isEmpty(errors),
      };

};

module.exports = validateRegisterInput;