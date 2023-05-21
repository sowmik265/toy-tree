import React, { useContext } from 'react';
import ActiveLink from '../active routes/ActiveLink';
import { MdOutlineToys } from 'react-icons/md';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (

        <div className="navbar bg-cyan-700 p-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-300">
                        <li className='font-extrabold'><ActiveLink to='/'>Home</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/alltoys'>All Toys</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/addatoy'>Add a Toy</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/mytoy'>My Toys</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/register'>Register</ActiveLink></li>
                        {
                            user ?
                                <div className='flex'>
                                    <li>
                                        <div className="navbar-end">
                                            <div className="">
                                                <img className='image-full rounded-full w-24' src={user?.photoURL} title={user?.displayName} />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='font-extrabold'><button onClick={handleLogOut}><ActiveLink>Logout</ActiveLink></button></li>
                                </div> :
                                <li className='font-extrabold'><ActiveLink to='/login'>Login</ActiveLink></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost  text-4xl font-bold text-gray-300 font-mono">TOY <MdOutlineToys></MdOutlineToys>TREE</a>
            </div>
            <div className="navbar-middle hidden lg:flex text-gray-300">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-extrabold'><ActiveLink to='/'>Home</ActiveLink></li>
                    <li className='font-extrabold'><ActiveLink to='/alltoys'>All Toys</ActiveLink></li>
                    <li className='font-extrabold'><ActiveLink to='/addatoy'>Add a Toy</ActiveLink></li>
                    <li className='font-extrabold'><ActiveLink to='/mytoy'>My Toys</ActiveLink></li>
                    <li className='font-extrabold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    <li className='font-extrabold'><ActiveLink to='/register'>Register</ActiveLink></li>
                    {
                        user ?
                            <div className='flex gap-0'>
                                <li>
                                    <div className="navbar-end">
                                        <div className="">
                                            <img className='image-full w-24 rounded-full' src={user?.photoURL} title={user?.displayName} />
                                        </div>
                                    </div>
                                </li>
                                <li className='font-extrabold'><button onClick={handleLogOut}><ActiveLink>Logout</ActiveLink></button></li>
                            </div> :
                            <li className='font-extrabold'><ActiveLink to='/login'>Login</ActiveLink></li>
                    }
                </ul>
            </div>

        </div>

    );
};

export default Header;