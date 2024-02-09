import { useParams } from "react-router-dom";
import House from "./House";


const SearchedHouse = () => {
    // let paramsObj = useParams();
    // let houseId = paramsObj.id;




    return (
        <>
        <h1> Searched House !</h1>
        <House/>
        </>
     );
}
 
export default SearchedHouse;
