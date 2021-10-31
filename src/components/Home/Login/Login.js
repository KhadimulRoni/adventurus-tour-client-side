import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div style={{height:"80vh"}}>
            <h2 className="tours p-4">- Please Login -</h2>
            <button onClick={signInWithGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;