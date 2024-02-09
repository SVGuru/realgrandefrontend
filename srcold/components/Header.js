import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="row bg-info  align-items-center">
              <div className="col-sm-3">
              <Link to="/">  <img className="w-25" src="/imgs/logo.png" alt="logo here" /> </Link>
              </div>
              <div className="col-sm-5">
              {/* <h4>Your real estate destination!</h4>  */}
              <h4><i> Your real estate destination!  </i></h4>
              </div>
              <div className="col-sm-4">
               <Link to="/login"><button className="btn btn-primary mx-3"> Login </button></Link>
               <Link to="/signup"><button className="btn btn-success"> SignUp </button></Link>

              </div>
        </div>
     );
}
 
export default Header;
