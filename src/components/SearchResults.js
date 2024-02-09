import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";


const SearchResults = (props) => {


    let paramsObj = useParams();
    //get county name
    // console.log(paramsObj);
    // console.log(props.allhouses);
    // based on county name, iterate through the housesData and filter
    let filteredHousesArray = props.allHouses.filter((house) => (paramsObj.county == house.county) );
    console.log(filteredHousesArray);


    // store them all in an array




    return (  
        <div>
            <h4> Search Results here</h4>




            <div   className="table-responsive" >


    <table
       className="table table-primary"
    >
        <thead>
            <tr>
                <th scope="col">Address</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        {/*  Parent component is called Higher Order Component */}
        <tbody>
            {
                filteredHousesArray.map(
                    (filteredhouse) =>{
                        return (
                            <SearchResultsRow filteredhouse={filteredhouse}/>
                        )
                    }
                )
            }
           
           
        </tbody>
    </table>
</div>






        </div>
    );
}
 
export default SearchResults;



