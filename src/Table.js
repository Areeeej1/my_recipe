import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";


import { Button } from "@mui/material";



const RecipesTable=(props)=>{
    let history = useNavigate();

  
    return(
        <div className="App">
 
      <br></br>
      <br></br>
     
            <TableContainer component={Paper}>
              <Table aria-label="simple table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Title</b>
                    </TableCell>
                    <TableCell>
                      <b>Calories</b>
                    </TableCell>
                    <TableCell>
                      <b>Detail</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.recipes.map((recipe,key) => (
                    <TableRow key={key}>
                      <TableCell> {recipe.recipe.label} </TableCell>
                      <TableCell>{recipe.recipe.calories}</TableCell>
                     
                      <TableCell>
                        <Button
                          onClick={() => {
                            history("/recipedetail", {replace: false ,state: { detail: recipe , m: true }  });
                          }}
                        >
                          Detail
                        </Button>
                      </TableCell>
                    </TableRow>
                    
                 
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    
    </div>
    )
}

export default RecipesTable;
