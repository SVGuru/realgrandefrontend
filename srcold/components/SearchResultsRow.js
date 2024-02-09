import { useNavigate } from "react-router-dom";


const SearchResultsRow = ({filteredhouse}) => {


    let navigate = useNavigate();


    let clickHandler = () => {


        navigate('/searchedhouse/'+filteredhouse._id);
    }


    return (
    <tr className="" key={filteredhouse._id} onClick={clickHandler}>
        <td scope="row"> { filteredhouse.address}</td>
        <td> {filteredhouse.price} </td>
    </tr>
      );
}
 
export default SearchResultsRow;