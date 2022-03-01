function Uservalidation(values) {
    let errors={};
    
    if(!values.username){
        errors.username="Username Required"
    } 

    if(!values.password){
        errors.password="Password  is Required"
    }
    
   
    return  errors;
    
 }
 
 export default Uservalidation