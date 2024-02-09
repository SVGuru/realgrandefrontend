import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';


import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';


import Header from './components/Header';
import Footer from './components/Footer';
import House from './components/House';




function App() {

    //state variable to store housesData ..
    // ..... this will be used to send as props to components as and when needed
    let [housesData,setHousesData] = useState([]);
  
  
    //useEffect with [] , so that this block of code is called only once
    // getting the house infor from public folder
    // using fetch and async -await
    // later when we work on middle ware we will replace the "/houses.json" to url to middle ware
  
  
    useEffect(
      ()=>{
        let fetchData = async () => {
         let response = await fetch("/houses.json");
         let data = await response.json();
         setHousesData(data);
        }
        fetchData();    
      }
    ,[]);
  
  
  
  
  
  
  
  
    return (
      <div className='container-fluid'>
        <Header/>
        <SearchFilter allhouses = {housesData}/>        
        <Routes>
          <Route path="/" element={<House houseInfo={housesData[5]} />} />
          <Route path="/searchresults/:county" element={<SearchResults allhouses={housesData}/>}/>
          <Route path="/searchedhouse/:id" element={<SearchedHouse/>}/>
       
        </Routes>
  
  
        {/* <Footer/> */}
      </div>
    );
  }
  
  
  export default App;
  