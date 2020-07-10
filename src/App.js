import React ,{useState,useEffect} from 'react';
import './App.css';
import Header from "./components/header";
import Recipe from "./components/recipe";
import Axios from "axios"

function App() {
  const [search,setSearch] = useState("");
  const [recipe,setRecipe] = useState([]);
  //add app id & key
  const APP_ID = " "
  const APP_KEY = " ";

  useEffect(  () =>{
    getRecipes();
  },[]);

  const  getRecipes = async () =>{
    var res =await Axios.get(`https://api.edamam.com/search?q=${search}&
    app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9&calories
    =591-722&health=alcohol-free`);
   
    setRecipe(res.data.hits)
  }

  const onInputChange = (e) =>{
    setSearch(e.target.value)
  }

  const onSearchClick=() =>{
    getRecipes();
  }


  return (
    <div className="App">
     <Header search = {search} inputChange={onInputChange} onSearchClick= {onSearchClick}/>
     <div className="container">
     <Recipe recipes={recipe}/>
     </div>
    </div>
  );
}

export default App;
