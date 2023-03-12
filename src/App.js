import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import MultiDrop from "./components/MultiDrop";

const App = () => {
  const [addItems, setAddItem] = useState(data);
  const [addFormData, setAddFormData] = useState({
    itemName: "",
    orderBy: "",
    amount: "",

  });

  const [editFormData, setEditFormData] = useState({
    itemName: "",
    orderBy: "",
    amount: "",

  });

  const [editItemId, setEditItemId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItems = {
      id: nanoid(),
      itemName: addFormData.itemName,
      orderBy: addFormData.orderBy,
      amount: "£"+ addFormData.amount,

    };

    const newaddItems = [...addItems, newItems];
    setAddItem(newaddItems);

    // setAddFormData({  itemName: "", orderBy: "", amount: "",})
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedAddItems = {
      id: editItemId,
      itemName: editFormData.itemName,
      orderBy: editFormData.orderBy,
      amount: "£"+ editFormData.amount,
    };

    const newaddItems = [...addItems];

    const index = addItems.findIndex((addItem) => addItem.id === editItemId);

    newaddItems[index] = editedAddItems;

    setAddItem(newaddItems);
    setEditItemId(null);
  };

  const handleEditClick = (event, addItem) => {
    event.preventDefault();
    setEditItemId(addItem.id);

    const formValues = {
      itemName: addItem.itemName,
      orderBy: addItem.orderBy,
      amount: "£"+ addItem.amount,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  const handleDeleteClick = (itemId) => {
    const newaddItems = [...addItems];

    const index = addItems.findIndex((addItem) => addItem.id === itemId);

    newaddItems.splice(index, 1);

    setAddItem(newaddItems);
  };

  return (

    <>
      <div style={{textAlign:"center", marginTop:"10px"}}>
        <h1 style={{color:"rgb(117, 201, 250)", border:"2px solid rgb(117, 201, 250)", width:"500px", textAlign:"center", marginLeft:"400px", borderStyle:"dotted solid"}}>React Products Store</h1>
      </div>

      <div className="app-container">


        <h2>Add a New Item</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="itemName"
            required="required"
            placeholder="Enter a Item Name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="orderBy"
            required="required"
            placeholder="Enter an order By..."
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="amount"
            required="required"
            placeholder="Enter a Amount..."
            onChange={handleAddFormChange}
          />

          <button type="submit" style={{width:"100px", height:"50px", borderRadius:"5px", marginLeft:"10px", color:"white", backgroundColor: "rgb(117, 201, 250)", borderColor:"rgb(117, 201, 250)"}}>Add</button>
        </form>




        <form className="form" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th style={{textAlign:"left"}}>Add-ON items</th>
                <th>OrderBy</th> 
                <th>Amount</th>
                <th>Default Select</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {addItems.map((addItem) => (
                <Fragment>
                  {editItemId === addItem.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      addItem={addItem}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>







        <div className="multi_div">
          <MultiDrop />
        </div>

      </div>

    </>

  );
};

export default App;
