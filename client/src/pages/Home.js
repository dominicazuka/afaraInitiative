import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Axios from "../config";
import { registerUser } from "../libs/auth";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [score, setScore] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [marital, setMarital] = useState("");
    const [university, setUniversity] = useState("");
    const [date, setDate] = useState("");
    const [nin, setNin] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");

    const navigate = useNavigate();

    const handleNameInput = (e) => {
        setName(e.target.value)
        setScore(score + 10)
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handleTelephoneInput = (e) => {
        setTelephone(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleMaritalInput = (e) => {
        setMarital(e.target.value)
    }

    const handleUniversityInput = (e) => {
        setUniversity(e.target.value)
    }

    const handleDateInput = (e) => {
        setDate(e.target.value)
    }

    const handleNinInput = (e) => {
        setNin(e.target.value)
    }

    const handleNationalityInput = (e) => {
        setNationality(e.target.value)
    }

    const handleGenderInput = (e) => {
        setGender(e.target.value)
    }

    const clearInputs = () => {
        // 👇️ clear input field
        document.getElementById("myForm").reset();
    };

    const handleRegistration = async (data, e) => {
        e.preventDefault();
        if (name) {
            setScore(score + 10)
            console.log(score)
        }
        console.log(data)
        const { msg, error } = await registerUser({...data, score});
        swal(error ? "Oops" : "Great", msg, !error ? "success" : "error");
        if (!error) {
            navigate(`/scores`);
            clearInputs();
        }
    };

    const handleError = (errors) => {

    };

    const registerOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required" }
    };

    return (
        <form id="myForm" onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div className="mt-5">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <input name="name" defaultValue={name} onChange={(e) => handleNameInput(e)}
                    placeholder="Full Name" type="text" {...register('name', registerOptions.name)} />
                <small className="text-danger">
                    {errors?.name && errors.name.message}
                </small>
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    onChange={(e) => {
                        handleEmailInput(e);
                    }}
                    placeholder="Email Address"
                    {...register('email', registerOptions.email)}
                />
                <small className="text-danger">
                    {errors?.email && errors.email.message}
                </small>
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    defaultValue={password}
                    onChange={(e) => {
                        handlePasswordInput(e);
                    }}
                    placeholder="Enter your password"
                    {...register('password')}
                />
                <small className="text-danger">
                    {/*{errors?.password && errors.password.message}*/}
                </small>
            </div>
            <div>
                <input
                    type="date"
                    name="date"
                    defaultValue={date}
                    onChange={(e) => {
                        handleDateInput(e);
                    }}
                    placeholder="Enter your Date of Birth"
                    {...register('date')}
                />
            </div>
            <div>
                <select onChange={(e) => {
                    handleMaritalInput(e);
                }} {...register("marital")}>
                    <option defaultValue="None">Select Marital Status</option>
                    <option defaultValue="Single">Single</option>
                    <option defaultValue="Married">Married</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => {
                    handleGenderInput(e);
                }} {...register("gender")}>
                    <option defaultValue="None">Select Gender</option>
                    <option defaultValue="Male">Male</option>
                    <option defaultValue="Female">Female</option>
                </select>
            </div>
            <div>
                <input
                    type="tel"
                    name="telephone"
                    defaultValue={telephone}
                    onChange={(e) => {
                        handleTelephoneInput(e);
                    }}
                    placeholder="Enter your Phone Number"
                    {...register('telephone')}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="nin"
                    defaultValue={nin}
                    onChange={(e) => {
                        handleNinInput(e);
                    }}
                    placeholder="Enter your NIN number"
                    {...register('nin')}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="nationality"
                    defaultValue={nationality}
                    onChange={(e) => {
                        handleNationalityInput(e);
                    }}
                    placeholder="Nationality"
                    {...register('nationality')}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="university"
                    defaultValue={university}
                    onChange={(e) => {
                        handleUniversityInput(e);
                    }}
                    placeholder="Enter University Attended"
                    {...register('university')}
                />
            </div>

            <button className="button">Submit</button>
        </form>
    );
};
export default Home;