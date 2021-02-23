const UserValidation = (values) => {
    const errors = {};
  
    if (!values.fname || values.fname === "") {
      errors.fname = "First Name is Required";
    }
  
    if (!values.lname || values.lname === "") {
      errors.lname = "Last Name is Required";
    }
  
    if (!values.age || values.age === "") {
      errors.age = "Age is Required";
    }
  
    if (!values.email || values.email === "") {
      errors.email = "Email Id is required";
    }
  
    return errors
  };
  
  export default UserValidation;
