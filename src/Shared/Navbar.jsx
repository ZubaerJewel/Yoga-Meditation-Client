import { Link } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
// import useCart from '../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>

        {
            user ? <> </> :
                <>
                    <li><Link to='/signUp'>Sign Up</Link></li>
                </>
        }

        {
            user ? <>
                
                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
            </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar max-w-screen-lg fixed z-10 bg-opacity-50 bg-black mt-0 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <img className='h-[40px]  w-[55px]' src="https://i.ibb.co/fSKKn6J/logo.webp" alt="" />
                    <p className="normal-case font-semibold"> <span className="text-4xl text-purple-400">InNeR</span ><span className="text-1xl text-purple-500">EnGinEeriNg</span> </p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <input type="checkbox" className="toggle" checked /> */}
                <Link to='/dashboard/uHome'><b>Dashboard</b></Link>
                { user && 
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}> 
                <div className="avatar">
                    <div className="w-12 rounded-full ml-4">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;