import React, { useState } from 'react';
import axios from 'axios';

function RequestReset() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/request-reset', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <div className="container">
            <h2>Request Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RequestReset;
