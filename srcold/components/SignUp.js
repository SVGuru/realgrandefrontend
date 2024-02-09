import { useState } from "react";


const SignUp = () => {


    let [formObj, setFormObj] = useState({name:"",email:"",password:"",phone:""});


    let changeHandler = (e) => {
        setFormObj({...formObj,[e.target.name]:e.target.value});
        //console.log(formObj);
    }


    let clickHandler = (e) => {
        e.preventDefault();
        console.log(formObj);
        //console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware    
    }


    return (
        <>


        <div className="d-flex justify-content-center">
            <form>
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    aria-describedby="helpId"
                    placeholder="" onChange={changeHandler}
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Phone Number</label>
                <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    placeholder="" onChange={changeHandler}
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                    type="text"
                    class="form-control"
                    name="email"
                    id="email"
                    aria-describedby="helpId"
                    placeholder="" onChange={changeHandler}
                />
            </div>


            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    aria-describedby="helpId"
                    placeholder="" onChange={changeHandler}
                />
            </div>


            <button     type="submit"   onClick={clickHandler}  class="btn btn-primary" >     SignUp </button>


            </form>
        </div>




        </>
     );
}
 
export default SignUp;
