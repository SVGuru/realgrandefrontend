import { useNavigate } from "react-router-dom"


const SearchFilter = (props) => {
    let navigate = useNavigate();

    if (!props.allHouses) {
        return  <h1> ..... loading props.allHouses in SearchFilter </h1>
    }

    //get distinct counties from house data
        //get housedata -- done. got it from props
        // get county from each of the array element (houses data)
        console.log(props.allHouses)
        let arrWithDupeCounties = props.allHouses.map((elem) => { return elem.county})
        console.log(arrWithDupeCounties);
        //using set to remove duplicates
        const uniqueCounties = Array.from(new Set(arrWithDupeCounties));
        console.log(uniqueCounties);






    let changeHandler =  (e) =>{ // e= synthetic event
        //console.log(e);
        //console.log(" changed"+ e.target.value);
        // navigate to search results component
        let countyName = e.target.value;
        navigate('/searchresults/'+countyName);


    }


    return (
        <div className="row d-flex justify-content-center">
            <div className="col-sm-5 text-center">
                {/* an event and an event handler */}
                <select onChange={changeHandler}>
                    <option value="select"> Select County</option>
                    {
                        uniqueCounties.map( (countyName) => {
                          return  <option key={countyName} value={countyName}> {countyName}</option>
                        })
                    }
                </select>
            </div>
        </div>
     );
}
 
export default SearchFilter;