function Uservalidation(values) {
    let errors1={};
    
    if(!values.name){
        errors1.name="Name is Required"
    } if(!values.email){
        errors1.email="Email is Required"
    } 
    else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors1.email="Email is invalid."
    }
    if(!values.password){
        errors1.password="Password  is Required"
    }else if(values.password.length<6){
        errors1.password="Password must be morethan five charecters."
    }
    if(!values.password2){
        errors1.cPassword="Confirm Password  is Required"
    }else if (values.password2 !== "undefined" && values.password2 !== "undefined") {
        if (values.password2 !== values.password) {
            errors1.cPassword= "Passwords don't match.";
          }
    
    }
   
    return  errors1;
    
}

export default Uservalidation