import React from 'react';



function Header(props){
    return (
        <div className="jumbotron">
            <h1><i className="material-icons brand-icon" >fastfood</i>FOOD RECIPE </h1>
            <div className="input-group w-50 mx-auto">
            <input type="text"
             className="form-control" 
             placeholder="search your recipe..." value={props.search}
             onChange={props.inputChange}/>
            <div className="input-group-append">
            <button className="btn btn-dark" type="button" 
            onClick={props.onSearchClick}>search Recipe</button>
            </div>
            </div>
        </div>
    );
  }export default Header;

