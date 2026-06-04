import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // Sign-in user
        signInUser(email, password)
        .then(result => {
            console.log(result);
            toast.success('Login Successful');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center my-5">Please Login!</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            // ref={emailRef}
                            placeholder="Enter Your Email" required />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Enter Your Password" required />
                        {/* {
                            loginError && <span className="text-red-500 text-left">{loginError}</span>
                        } */}
                        <div className="text-left"><a className="link link-hover text-l">Forgot password?</a>
                            <p className="text-red-500 text-left"></p>
                        </div>
                        <button className="btn btn-neutral hover:bg-gray-200 hover:text-gray-800 mt-4">Login</button>
                    </form>
                    <button className="btn btn-accent hover:bg-gray-200">Google Login</button>
                    <p>Don't have an account? <Link className="text-blue-500 hover:underline" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;