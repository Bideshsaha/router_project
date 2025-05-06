import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from "react-hot-toast"
import {useNavigate} from 'react-router-dom';
const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""

    })

    const [showPassword, setShowPassword] = useState(false);
        function changeHandler(event){
            setFormData((prevData)=>(
                {
                    ...prevData,
                    [event.target.name]:event.target.value
                }
            ))
        }
        function submitHandler(event){
            event.preventDefault();
            if(formData.password !== formData.confirmpassword){
                toast.error("passwords do not match");
                return;
            }
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountData ={
                ...formData
            };
            console.log(accountData);

            navigate("/dashboard");
        }
    return(
        <div>
            {/* {student-instructor tab} */}
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter first Name"
                            value={formData.firstname}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter last Name"
                            value={formData.lastname}
                        />
                    </label>
                </div>

                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email"
                        value={formData.email}
                    />
                </label>

                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text"):("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text"):("password")}
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.confirmpassword}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                        </span>
                    </label>
                </div>
                <button>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm