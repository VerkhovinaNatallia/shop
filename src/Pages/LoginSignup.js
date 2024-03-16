import './Css/LoginSignup.css'

const LoginSignup = () => {
    return (  
        <div className="loginsignup">
            <div className="loginsignup-container">
               <h1>Sing up</h1>
               <div className="loginsignup-fields">
                <input type = 'text' placeholder=" Yoer Name"/>
                <input type="email" placeholder="Email Adress"/>
                <input type= 'password' placeholder="Password"/>
                </div> 
                <button>Continue</button>
                <p className="loginsignup-login"> Already have an account<span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type='checkbox' name="" id=""/>
                    <p>By continuing, i agree tothe terms of use &privacy policy.</p>
                </div>
            
            </div>
        </div>
    );
}
 
export default LoginSignup;