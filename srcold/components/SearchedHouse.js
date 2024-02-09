import { useParams } from "react-router-dom";
import House from "./House";


const SearchedHouse = (props) => {
    //get the id from params in location bar
    let paramsObj = useParams();
    console.log(paramsObj.id);
    // compare it with the props allhouses and get the house. find
    let searchedHouseObj = props.allhouses.find((house) => { return paramsObj.id == house._id});
    console.log(searchedHouseObj);
    // let houseId = paramsObj.id;




    return (
        <>
        <h1> Searched House !</h1>
        <House houseInfo={searchedHouseObj}/>
        </>
     );
}
 
export default SearchedHouse;
