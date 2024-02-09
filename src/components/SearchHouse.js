import { useParams } from "react-router-dom";
import House from "./House";


const SearchHouse = (props) => {
    //get the id from params in location bar
    let paramsObj = useParams();

    if (!props.allHouses) {
        return  <h1> ..... loading props.allHouses in SearchHouse </h1>
    }

    
    console.log(paramsObj.id);
    // compare it with the props allHouses and get the house. find
    let searchedHouseObj = props.allHouses.find((house) => { return paramsObj.id == house._id});
    console.log(searchedHouseObj);
    // let houseId = paramsObj.id;


    return (
        <>
        <h1> Search House !</h1>

        <House houseInfo={searchedHouseObj} showEnquiry={true}/>
        </>
     );
}
 
export default SearchHouse;
