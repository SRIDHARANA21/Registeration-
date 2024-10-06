import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add authentication logic here
    };

    const handleGoBack = () => {
        navigate('/'); // Navigate back to the registration form
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', borderRadius: '5px' }}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <p>
                    Don't have an account?{' '}
                    <button
                        type="button"
                        onClick={handleGoBack}
                        style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: 0 }}
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
