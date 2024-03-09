import React, { useState } from 'react';
import { observer } from 'mobx-react';
import validator from 'validatorjs';


const RegistrationForm = observer(() => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = 'Username is required';
        if (!validator.isEmail(email)) newErrors.email = 'Invalid email address';
        if (password1.length < 6) newErrors.password1 = 'Password must be at least 6 characters long';
        if (password1 !== password2) newErrors.password2 = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                // Call your Register function here with username, email, password1, password2
                console.log('Form submitted successfully!');
            } catch (error) {
                console.error('Registration Error:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password1">Password</label>
                <input
                    type="password"
                    id="password1"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                />
                {errors.password1 && <span>{errors.password1}</span>}
            </div>
            <div>
                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password"
                    id="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                {errors.password2 && <span>{errors.password2}</span>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
});

export default RegistrationForm;
