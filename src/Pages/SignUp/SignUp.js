import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="hero my-10">
            <div className="hero-content">
                <div className="w-1/2 text-center lg:text-left">
                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="w-1/2 card max-w-sm shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Your Password Please" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='py-5 text-center'>Alreay have an account? <Link className='text-orange-600' to='/login'>Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;