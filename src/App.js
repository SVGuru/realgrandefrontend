import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchHouse from './components/SearchHouse';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import Enquiries from './components/Enquiries';

function App() {
  let [housesData,setHouseData] = useState([]);


  //the following useEffect(), 12 lines, is used when Front End tests the local json houses.json
  // useEffect(
  //   ()=>{
  //     let fetchData = async () => {
  //      let response = await fetch("/houses.json");
  //      console.log("response", response);
  //      let data = await response.json();
  //      console.log("local houses json data", data);
  //      setHouseData(data);
  //     }
  //     fetchData();    
  //   }
  // ,[]);

  //For integration,  fetch data from Back End Database 
  useEffect(()=>{
   
    let fetchData = async() =>{

     // USING BACK END Server, for Integration, next 2 lines
     //let response = await axios.get("http://localhost:4000/houses");
     //using the next line, changed 2.12.2024
     let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"houses");
     console.log(response);

     setHouseData(response.data);
    }
    fetchData();
  },[])



  return (
    <div>
      <Header />  
    {/* feed the houseData to SearchFilter component !!! */} 
    {/* allHouses needs to match the props name in SearchFilter.js -  often bugs occurred */}
    <SearchFilter allHouses={housesData}/>   
    
    <Routes>
          <Route path="/" element={<House houseInfo={housesData[7]} />} />
          <Route path="/searchresults/:county" element={<SearchResults allHouses={housesData}/>}/>
          {/* <Route path="/searchedhouse/:id" element={<SearchedHouse/>}/> */}
          
          <Route path="/searchhouse/:id" element={<SearchHouse allHouses={housesData}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/enquiries' element={<Enquiries/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      
    </Routes>
     
     <Footer />
    </div>
  );
}


export default App;
