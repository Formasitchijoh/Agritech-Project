
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage,useField, useFormik} from "formik";
import * as Yup from 'yup'
import '../Components/styleForm.css'
import eye from '../resources/eye.png'
import hideeye from '../resources/eye-1.png'
import cap from '../resources/banana.jpg'

const MyTextInput = ({label, setradioInput,  ...props}) =>{
    
    const [field, meta] = useField(props);
    return (
        <div className='container'>
        <label htmlFor={props.id || props.name} className='label'>{label}</label>
        <input className='text-input' {...field} {...props}/>
        {meta.touched && meta.error ?
         (<div className='error'>{meta.error}</div>):null}

        </div>
    );
};
const MyPasswordInput = ({label, isvisible, handleHidePassword,handleShowPassword, ...props}) =>{
    
    const [field, meta] = useField(props);
    return (
        <div className='container'>
        <label htmlFor={props.id || props.name} className='label'>{label}</label>
        <input className='text-input' {...field} {...props}/>
       
        {isvisible ==="password"?(
            // <span className='pwd-eye-hide'>
                <img  src={hideeye}  onClick={handleHidePassword} className='pwd-eye-hide' alt=""/>
        ): (
                <img src={eye} alt=""  className='pwd-eye-show' onClick={handleShowPassword}/>
        )}
        {meta.touched && meta.error ?
         (<div className='error'>{meta.error}</div>):null}

        </div>
    );
};
const MyRadioBox = ({label, ...props}) => { 
    const [field, meta] = useField({...props, type:"radio"});
    return ( 
      <div role="group"  className='radio'
      aria-labelledby="my-radio-group">
    <label htmlFor={props.id || props.name} className='label'>
    <input className='radio-input' {...field} {...props}></input>
        {label}</label>
            {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>):null}
        </div>
    )

}

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type:'checkbox'});

    return ( 
        <div> 
             <label className='checkbox'>
            <input type='checkbox' {...field} {...props}/>
                {children}
        </label>
        {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null}
        </div>
        
    );
};



const Welcome = () =>{
    return (
        <>
        <div>
        <a style={{marginLeft:'14em'}} href='#'> Sign Up to Agri-Tec</a>
        <h1 style={{marginLeft:'4em', marginTop:'1em' }}>Welcome  to<br/>  Agri-Tec</h1>
        </div>
     </>
       
    )
} 


//main Component
const LoginForm = () => {  

    //defined states
    const [isShow, setisShow] = useState(false);
     const [initialValues, setinitialValues]  = useState({
        
        email:"" ,
         password:'',
        
      });
const [isvisible, setisvisible] = useState("password") 


const handleHidePassword =() =>{ 
    setisvisible("text")
}
const handleShowPassword =() => {
    setisvisible("password")

}

      //Formik methods 
const onSubmit = (values) => { 
    setisShow(true)
    setinitialValues(values)
}
const validationSchema =
    Yup.object({
       
        email:Yup.string().email("Inavlid email address").required("required"),
        password:Yup.string()
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        .required('Required'),
      
    })

    return( 
        <div className='main'>
            <Welcome /> 
      
        <div className='formik-container'> 
        <Formik className="formik" initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
         <Form>
       
      <MyTextInput label="Email Address" name="email" type="email" /> 
       <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
      
      {isShow ? ( <div className='main-modal'>
             <div>
                <p>FirstName: {initialValues.firstName}</p>
                <p>LastName: {initialValues.lastName}</p>
                <p>Email: {initialValues.email}</p>
                <p>PassWord: {initialValues.origin}</p>
                <p>Origin: {initialValues.inviteCode}</p>
                <p>inviteCode: {initialValues.password}</p>

                </div>
            <div className='modal'>
                <button type="reset" className='confirm' onClick={()=>
                {
                    formik.resetForm();
                    setisShow(false)
                }
                } >Confirm</button>
                <button className='Edit' onClick={()=> {
                    setisShow(false)
                }}>Edit</button>
            </div>
        </div>) : null }
    </Form> 
        )}
      </Formik>
         </div>
         </div>
        
       
     );
 };


export default LoginForm














