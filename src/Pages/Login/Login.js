import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg';

const handleLogin = (event) => {
    event.preventDefault();
    console.log('submit for login')
}

const Login = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content">
                <div className="w-1/2 text-center lg:text-left">
                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="w-1/2 card max-w-sm shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="text" placeholder="Enter your password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>

                    <p className='py-5 text-center'>New on Genius Car? <Link className='text-orange-600' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;