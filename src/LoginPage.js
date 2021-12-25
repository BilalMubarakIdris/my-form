
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const LoginPage = () =>{
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const [inputText, setInputText] = useState();

    const onSubmit = (data, e) => {
        setInputText(data);
        e.target.reset();
        console.log(data)
        console.log("Submited")
    }
    const disAbleButton = (value) => {
            if(value === " ") return false;

            return true;
    }
    const validatePasswordStrengthRegex = new RegExp(
        '(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#.\$%\^&\*])(?=.{8,})'
    );
    
    const passwordValidator = (password) => {
        return validatePasswordStrengthRegex.test(password);
    }
    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="block text-gray-700 text-center text-xl font-bold mb-2">Login Form</h1>
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
                        {...register('password',{ required: "Password is required", validate:disAbleButton,  pattern:{value:passwordValidator}, minLength:{value: 5, message: "Password must be not less than 5 character"}, maxLength:{value: 10, message: "Password must be at least 6 characters"}})}
                    />
                    <p className="text-sm text-red-500 font-bold ">{errors.password?.message}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="">
                        Forgot Password?
                    </Link>
                </div>
                <p className="text-center  font-bold text-blue-500 text-xl">
                    <Link className=" " to="/registeration-page">Register here</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;

{/* <p className="text-2xl">Notice</p> */}