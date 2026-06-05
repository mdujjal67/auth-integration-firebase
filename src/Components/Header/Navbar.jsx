import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("User Signed Out!")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLinks = <>
        <li><NavLink className="btn btn-neutral hover:bg-violet-800 hover:text-gray-100 mr-5" to='/'>Home</NavLink></li>
        {
            user && <>
                <li><NavLink className="btn btn-neutral hover:bg-violet-800 hover:text-gray-100 mr-5" to='/secrets'>Secrets</NavLink></li>

                <li><NavLink className="btn btn-neutral hover:bg-violet-800 hover:text-gray-100 mr-5" to='/profile'>Profile</NavLink></li>
            </>
        }
        {
            !user && <>
                <li><NavLink className="btn btn-neutral hover:bg-violet-800 hover:text-gray-100 mr-5" to='/login'>Login</NavLink></li>
                
                <li><NavLink className="btn btn-neutral hover:bg-violet-800 hover:text-gray-100" to='/register'>Register</NavLink></li>
            </>
        }

    </>

    return (
        <div className="text-center  bg-gray-500 mb-10">
            {/* <Link className="btn btn-accent hover:bg-gray-200" to='/'>Home</Link>
            <Link className="btn btn-accent hover:bg-gray-200 ml-4" to='/login'>Login</Link> */}

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl py-2 hover:bg-gray-800 hover:text-gray-100">React</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <>
                            <p className="mr-3 font-bold">{user.email}</p>
                            <a onClick={handleSignOut} className="btn btn-accent hover:bg-gray-800 hover:text-gray-100">Sign Out</a>
                        </>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;