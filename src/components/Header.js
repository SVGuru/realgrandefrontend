import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {

    let navigate = useNavigate();

    let loginHandler= () =>{
        navigate('/login');
    }

    let logoutHandler = () => {
        sessionStorage.clear();
        navigate('/');
    }

    let signupHandler = () => {
        navigate('/signup');
    }


    return ( 
        <div className="row bg-info d-flex align-items-center">
            <div className="col-sm-3"><Link to='/'><img src="/imgs/logo.png" alt="RealGrande" className="w-25"/></Link></div>
            <div className="col-sm-5"><h2>Your real estate destination</h2></div>
            <div className="col-sm-3 d-flex justify-content-end">
                {
                (sessionStorage.getItem("name")) 
                ?
                <div className="mr-0"> 
                <button onClick={logoutHandler} className="btn btn-secondary mx-3">Logout</button>
                </div>
                 :
                 <> 
                 <button onClick={loginHandler} className="btn btn-success mx-3">Login</button>
                 <button onClick= {signupHandler} className="btn btn-warning">Sign Up</button>
                 </>
                    }
                        </div>
        </div>
     );
}
 
export default Header;


