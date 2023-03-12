import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ReadOnlyRow = ({ addItem, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td style={{textAlign:"left"}}>{addItem.itemName}</td>
      <td>{addItem.orderBy}</td>
      <td>{addItem.amount}</td>
      <td><input style={{width:"30px"}} type="checkbox"/></td>

      <td style={{height:"70px"}}>
        <button
          style={{width:"40px", height:"40px", borderRadius:"5px",}}
          type="button"
          onClick={(event) => handleEditClick(event, addItem)}
        >
          <EditIcon style={{marginBottom:"10px"}}/>
        </button>
        <button 
        style={{width:"40px",  borderRadius:"5px", height:"40px"}}
        type="button"  
        onClick={() => handleDeleteClick(addItem.id)}>
         
          <DeleteIcon  style={{marginBottom:"10px"}}/>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
