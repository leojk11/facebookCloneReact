import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'; 

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })

            }).catch(error => alert(error));
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                    alt=""
                />

                <img 
                    src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" 
                    alt=""
                />
            </div>

            <Button 
                type='submit' 
                onClick={signIn}>
                    Sign In
            </Button>
        </div>
    )
}

export default Login
