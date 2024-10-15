import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import './Login.css';  // Import the external CSS

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }

            const apiUrl = `${import.meta.env.VITE_APPWRITE_ENDPOINT}/account/sessions`;
            console.log(apiUrl);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-logo">
                    <Logo width="100%" />
                </div>
                <h2 className="login-title">Sign in to your account</h2>
                <p className="login-text">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="login-signup-link"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="login-error">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="login-form-content">
                    <div className="login-input-group">
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            className="login-input"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        'Email address must be a valid address',
                                },
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            className="login-input"
                            {...register('password', { required: true })}
                        />
                        <Button
                            type="submit"
                            className="login-button"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;