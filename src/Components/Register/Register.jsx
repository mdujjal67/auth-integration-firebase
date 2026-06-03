import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister =(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center my-5">Please Register!</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Enter Your Name" required />
                        
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Enter Your Email" required />

                        <label className="label">Password</label>
                        <div className="relative w-full flex items-center">
                            <input
                                type={"password"}
                                name="password"
                                className="input"
                                placeholder="Enter Your Password" required />
                            <span className="cursor-pointer absolute right-6">
                                {/* {
                                    showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                } */}
                            </span>
                        </div>
                        {/* {
                            registerError && <p className="text-red-500 text-left">{registerError}</p>
                        } */}

                        <div className="flex items-center gap-2 mt-2 justify-start">
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                className="checkbox checkbox-xs checkbox-primary"
                            />
                            <label htmlFor="terms" className="cursor-pointer text-xs">
                                Accept Our <a className="underline text-blue-600" href="/">Terms and Condition</a>
                            </label>
                        </div>
                        <button className="btn btn-neutral hover:bg-gray-200 hover:text-gray-800 mt-4">Register</button>
                    </form>

                    <button className="btn btn-accent hover:bg-gray-200">Register via Google</button>
                    <p>Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;