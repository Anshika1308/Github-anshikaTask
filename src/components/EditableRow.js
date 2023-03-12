import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import "../App.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          style={{width:"220px"}}
          type="text"
          required="required"
          placeholder="Item name..."
          name="itemName"
          value={editFormData.itemName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{width:"220px"}}
          type="text"
          required="required"
          placeholder="orderBy..."
          name="orderBy"
          value={editFormData.orderBy}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{width:"220px"}}
          type="number"
          required="required"
          placeholder="Amount..."
          name="amount"
          value={editFormData.amount}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td><input style={{width:"30px"}} type="checkbox"/></td>

      <td style={{height:"70px"}}>
        <button type="submit"  style={{width:"40px", height:"40px", borderRadius:"5px",}}>
         <SaveIcon  style={{marginBottom:"10px"}}/> 
        </button>

        <button type="button" style={{width:"40px", height:"40px", borderRadius:"5px",}} onClick={handleCancelClick}>
          <CloseIcon style={{marginBottom:"10px"}}/>  
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
