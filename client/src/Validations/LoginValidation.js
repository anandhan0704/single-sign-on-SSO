function Uservalidation(values) {
   let errors1={};
   
   if(!values.email){
       errors1.email="Email is Required"
   } 
   else if (!/\S+@\S+\.\S+/.test(values.email)){
       errors1.email="Email is invalid."
   }
   if(!values.password){
       errors1.password="Password  is Required"
   }
   
  
   return  errors1;
   
}

export default Uservalidation