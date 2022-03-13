// React
import { useState } from 'react'

// Context
import {useAuth} from '../context/authContext'

// Router
import {useNavigate, Link} from 'react-router-dom'


// Styles
import styles from './auth.module.css'

function Login() {
    const [user, setUSer] = useState({
        email: '',
        password: '',
    });
    const {login} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

    const HandleChange = ({target: {name, value}}) => {
        setUSer({...user, [name]: value});
    };

    const handleSubmit =  async (e) => {
        e.preventDefault()
        setError('')
        try{
            await login(user.email, user.password)
            navigate('/')
        } catch(error) {
            setError(error.code);
        }
    }
    return (
        <div className={styles.container} >
            {error && <p>{error}</p> }
            <form onSubmit={handleSubmit}>
            
                <input type="email" name="email" id="email" placeholder="your@email.com" onChange={HandleChange} className={styles.big}/>
                <input type="password" name="password" id="password" placeholder='password' onChange={HandleChange} className={styles.big}/>
                
                <button className={styles.buttom}>Login</button>
                <p className={styles.blackText}>Not registered?<Link to="/register" className={styles.formLink}>Register</Link></p>
                <button onClick={handleGoogleSignIn}>Login with Google</button>


            </form>
        </div>
    );
}

export default Login;