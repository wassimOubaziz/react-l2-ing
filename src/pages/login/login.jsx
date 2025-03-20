import './login.css';

export default function Login() {
  return (
    <div className='login'>
        <div className='box'>
            <div className='header'>
                <h1 className='loginH1'>Welcome Back !</h1>
                <p className='description'>Please Enter Your Credentials To Log Into Your Account</p>
            </div>
                <div className='inputBox'>
                    <label>Email</label>
                    <input type='email' placeholder='e.g. sample@example.com' />
                </div>
                <div className='inputBox'>
                    <label>Password</label>
                    <input type='password' placeholder='••••••••' />
                </div>
                <button className='login-button'>Login</button>
                <p className='have'>Don’t Have An Account? <a href='#' style={{color: "#1823F0", textDecoration: 'none'}}>Sign Up</a></p>
            </div>
    </div>
  )
}
