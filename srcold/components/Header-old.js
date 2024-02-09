const Header = () => {
    return (
        <div className="row bg-info  align-items-center">
              <div className="col-sm-3">
                <img className="w-25" src="/imgs/logo.png" alt="logo here" />
              </div>
              <div className="col-sm-5">
              {/* <h4>Your real estate destination!</h4>  */}
              <i> <b>Your real estate destination! </b> </i>
              </div>
              <div className="col-sm-4">
                <button className="btn btn-primary mx-3"> Login </button>
                <button className="btn btn-success"> SignUp </button>
              </div>
        </div>
     );
}
 
export default Header;
