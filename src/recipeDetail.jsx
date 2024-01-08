import React from "react";
import { useLocation } from "react-router-dom";
import style from "./recipe.module.css";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';


const   RecipeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(location?.state?.m);

  const handleClose = () => {
    
    setOpen(false);
    navigate('/',{replace: true});
  
  };
  return (
    <div className="App">
         <Modal
        open={open}
       style={{ overflow:'scroll'}}
        
      >
       
            <div className="recipes">
         
      <div className={style.recipe}>
      
      <CancelIcon sx={{  fontSize: 40 }} style={{color :"red", marginRight: "-85%",marginBottom:"-3%",cursor:"pointer"}} onClick={handleClose}/>
        <h1> {location.state.detail.recipe.label}</h1>
       
        <ul>
          {location?.state.detail.recipe.ingredients.map((ingredient,key) => (
            <li className={style.list} key={key}>{ingredient.text}</li>
          ))}
        </ul>

        <img
          className={style.image}
          src={location?.state.detail.recipe.image}
          alt=""
        />
        <p>
          <b>Calories:</b> {location.state.detail.recipe.calories} <br></br>
        </p>
        <br></br>
       
      </div>
     
    </div>
    </Modal>
    </div>
  );
};
export default RecipeDetail;
