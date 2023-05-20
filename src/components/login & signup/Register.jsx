import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {
    const { createUser, userDataUp, user } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleUserRegister = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                updateUserData(result.user, name , photo)
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })



    }


    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-cyan-700 mt-6">
                    <h1 className="text-3xl font-semibold text-center text-gray-300 uppercase">
                        Register
                    </h1>

                    <form onSubmit={handleUserRegister} className="mt-6">
                        <div className="mb-2">
                            <label
                                for="name"
                                className="block text-sm font-semibold text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder='Your name'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                for="photo"
                                className="block text-sm font-semibold text-gray-300"
                            >
                                Photo URL
                            </label>
                            <input
                                name='photo'
                                type="text"
                                placeholder='Your photo URL'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder='Your email address'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-300"
                            >
                                Password
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder='Your password'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div>
                            <p>{error}</p>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-rose-300 focus:outline-none focus:bg-rose-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-gray-300">
                        Already have an account?{" "}
                        <span>
                            <NavLink to='/login'>
                                <a className="text-rose-600 hover:underline" href="#">
                                    Log in
                                </a>
                            </NavLink>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;