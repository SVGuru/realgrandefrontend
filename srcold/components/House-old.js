const House = (props) => {


    if(!props.houseInfo) {
        return <h4> .......loading </h4>
    }
   
    return (  
        <>
        <div className="row">
            <div className="col-sm-7"> {props.houseInfo.address}</div>
            <div className="col-sm-5"> <b> Price: USD {props.houseInfo.price} </b></div>
        </div>
        <div className="row">
        <div className="col-sm-7">
            <img className="img-fluid" src={"./imgs/"+props.houseInfo.photo} alt="house"/>
         </div>
        <div className="col-sm-5">
         
          <p> {props.houseInfo.description}</p> </div>
        </div>


        </>
    );
}
 
export default House;
