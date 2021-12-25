import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {Link} from 'react-router-dom'


const RegistrationPage = () =>{
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const [inputText, setInputText] = useState();

    const onSubmit = (data, e) => {
        setInputText(data);
        e.target.reset();
        console.log(data)
        console.log("Submited")
    }
    // option condition implementation
    const validateOption = (value) => {
            if(value === "student") return true;

            return false
    }
    // Email Validation section
    const emailValidationRegex = new RegExp(
        "([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\[[\t -Z^-~]*])"
    );
    
    const emailValidator = (email) => {
        return emailValidationRegex.test(email);
    }

    // simple 10 digit contact number validation =>  I used this
    const regexValidate10digit = /^\d{10}$/;
    const contactNoValidator = (contactNo) => {
        console.log(contactNo);
        return String(contactNo).match(regexValidate10digit);
    }

    // Password validation section
    const validatePasswordStrengthRegex = new RegExp(
        '(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#.\$%\^&\*])(?=.{8,})'
    );
    
    const passwordValidator = (password) => {
        return validatePasswordStrengthRegex.test(password);
    }
    console.log(errors.roll = "student" ? "student" : "is not a student"  )
    // console.log(inputText)
    // console.log(JSON.stringify(inputText, undefined,2))
    return(
        <div className="w-full max-w-xs">
            <pre>{JSON.stringify(inputText, undefined,2)}</pre>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="block text-gray-700 text-center text-xl font-bold mb-2">Registration Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        name="username" 
                        type="text" 
                        placeholder="Username"
                        {...register('username', { required: "Username is required"})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.username?.message}</p>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input 
                        className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        {...register('password', { required: "Password is required", validate:{passwordValidator, message:`<ul><li>1 Capital</li><li>1 Small Letter</li><li>1 Symbol</li><li>Atlease not less than 8</li></ul>`}, minLength:{value: 5, message: "Password must be not less than 5 character"}, maxLength:{value: 10, message: "Password must be at least 6 characters"}})}
                    />
                    <p className="text-sm text-red-500 font-bold ">{errors.password?.message}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                        {...register('email', { required: "Email is required",  pattern:{value:emailValidator, message:"this is not a valid email"}})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.email?.message}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schoolId">School Id</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="schoolId" 
                        name="schoolId" 
                        type="text" 
                        placeholder="School Id" 
                        {...register('schoolId', { required: "School Id is required"})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.schoolId?.message}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="age" 
                        name="age" 
                        type="text" 
                        placeholder="Age" 
                        {...register('age', { required: "Age is required"})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.age?.message}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="address" 
                        name="address" 
                        type="text" 
                        placeholder="Address" 
                        {...register('address', { required: "Email is required"})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.address?.message}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">Contact Number</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="contactNo" 
                        name="contactNo" 
                        type="number" 
                        placeholder="Contact Number" 
                        {...register('contactNo', { required: "Contact Number is required", validate:contactNoValidator})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.contactNo?.message}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ParentName">Parent Name</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="parentName" 
                        name="parentName" 
                        type="text" 
                        placeholder="Parent Name" 
                        {...register('parentName', { required: "Parent Name is required"})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.parentName?.message}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">Class Name</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="className" 
                        name="className" 
                        type="text" 
                        placeholder="Class Name" 
                        {...register('className', { required: "Class Name is required"})}
                    />
                </div>
                <p className="text-sm text-red-500 font-bold ">{errors.className?.message}</p>
                <div className="inline-block relative w-64 mb-6">
                    <select {...register("roll", {required: true, validate: validateOption})} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="/" >Select Roll</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="schoolAdmin">School Admin</option>
                        <option value="superAdmin">Super Admin</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                {errors.roll && <p className="text-sm text-red-500 font-bold ">{errors.roll?.message}</p>}
                <div className="flex items-center justify-between mb-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="#">
                        Forgot Password?
                    </Link>
                </div>
                <p className="text-center  font-bold text-blue-500 text-xl">
                    <Link className=" " to="/login">Login here</Link>
                </p>
            </form>
        </div>
    )
}

export default RegistrationPage;