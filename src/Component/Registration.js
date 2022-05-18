import React, { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom';


const Registration = () => {

    const nevigate = useNavigate();
    const initialState = { email: "", password: "", confirm_password: "", full_name: "", phone_number: "", terms: "" }

    const [formValues, setformValues] = useState(initialState);
    const [formErrors, setformErrors] = useState({});
    const [user, setuser] = useState([]);

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
        console.log(formValues)
        
    };

    const submitForm = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        console.log(formValues)
        
        if(formValues.email &&  formValues.password && formValues.confirm_password && formValues.full_name && formValues.phone_number && formValues.terms){
            console.log('error not found')
            setuser([...user,formValues])
            nevigate('/barchart')

        }
        else{
            console.log('error found')
        }
       
    };
        const validate = (values) => {
            const errors= {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

            if (!values.email) {
                errors.email = "Email is required!";
            } else if (!regex.test(values.email)) {
                errors.email = "This is not a valid email format";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 4) {
                errors.password = "Password must be more than 4 characters";
            } else if (values.password.length > 10) {
                errors.password = "Password cannot exceed more than 10 characters";
            }
            if (!values.confirm_password) {
                errors.confirm_password = "Confirm password is required";
            } else if (values.confirm_password !== values.password) {
                errors.confirm_password = "Password and Confirm Password Doesn't Match";
            }
            if (!values.full_name) {
                errors.full_name = "Fullname is required";
            }

            if (!values.phone_number) {
                errors.phone_number = "Phone number is required";
            } else if (!re.test(values.phone_number)) {
                errors.phone_number = "This is not a valid phone number"
            }

            if (!values.terms) {
                errors.terms = "Please indicate that you have read and agree to the Terms and Conditions"
            }
            return errors;
        };
        useEffect(() => {
            if (Object.keys(formErrors).length === 0 ) {
            }
          }, [formErrors]);


        return (
            <div className="container">
                <div className="registration">
                    <div className="registration__image">
                        <img src={'./Images/login.png'} alt="" />
                        <h3 className="registration__title">Choose a date range</h3>
                        <p>Lorem ipsum dolor sit amet,consectetur <br />adipisicing   elit. Id, asperiores? dolor sit lorem </p>
                    </div>
                    <div className="registration__form">
                        <h3 className="registration__title">Create an account</h3>
                        <form id="loginform" onSubmit={submitForm} noValidate>

                            <label htmlFor="email" className="registration__label">Your email address</label>
                            <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} className="registration__input" />
                            <p className="registration__error">{formErrors.email}</p>

                            <label htmlFor="password" className="registration__label">Your password</label>
                            <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} className="registration__input" />
                            <p className="registration__error">{formErrors.password}</p>

                            <label htmlFor="confirm_password" className="registration__label">Confirm your password</label>
                            <input type="password" name="confirm_password" id="confirm_password" value={formValues.confirm_password} onChange={handleChange} className="registration__input" />
                            <p className="registration__error">{formErrors.confirm_password}</p>

                            <label htmlFor="full_name" className="registration__label">Your full name</label>
                            <input type="text" name="full_name" id="full_name" value={formValues.full_name} onChange={handleChange} className="registration__input" />
                            <p className="registration__error">{formErrors.full_name}</p>

                            <label htmlFor="phone_number" className="registration__label">Your phone number</label>
                            <input type="tel" name="phone_number" id="phone_number" value={formValues.phone_number} onChange={handleChange} className="registration__input" />
                            <p className="registration__error">{formErrors.phone_number}</p>

                            <div className="checkbox">
                                <input type="checkbox" name="terms" id="terms" className="checkbox__input"
                                    value='agree' onChange={handleChange} />
                                <label htmlFor="" className="checkbox__label">I read and agree Terms and Conditions</label>
                            </div>
                            <p className="registration__error">{formErrors.terms}</p>

                            <input type="submit" value="Create account" className="btn btn__submit" />
                        </form>
                    </div>
                </div>
            </div>

        )
    }
export default Registration;