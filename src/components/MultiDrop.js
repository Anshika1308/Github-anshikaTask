import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "../App.css";


const category = [
    { label: "Category1", value: "category1" },
    { label: "Category2", value: "category2" },
    { label: "Category3", value: "category3" },
    { label: "Category4", value: "category4", disabled: true },
];


const products = [
    { label: "Fanta", value: "fanta" },
    { label: "Coca Cola", value: "coke" },
    { label: "Pepsi", value: "Pepsi", disabled: true },
    { label: "Beer", value: "beer" },
    { label: "Sprite", value: "sprite" },

];

const MultiDrop = () => {
    const [selected, setSelected] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    return (

        <>
            <div>
                <h1 style={{ marginTop: "40px" }}>Linked Products</h1>
                <pre>{JSON.stringify(selected.label)}</pre>

                <label>Select Category</label>
                <MultiSelect
                    className="multi_input"
                    options={category}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            </div>


            <div style={{ marginTop: "40px" }}>

                <label>Select Products</label>
                <MultiSelect
                    className="multi_input"
                    options={products}
                    value={selectedProduct}
                    onChange={setSelectedProduct}
                    labelledBy="Select"
                />

                <pre>{JSON.stringify(selectedProduct.label)}</pre>
            </div>
        </>
    );
};

export default MultiDrop;