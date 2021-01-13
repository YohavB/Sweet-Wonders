import React, { useState, useEffect } from "react";
import axios from "axios";
import { firebaseApp } from "../firebase/config";
import { Redirect } from "react-router";
import UploadForm from "./UploadForm";

const logout = () => {
  firebaseApp
    .auth()
    .signOut()
    .then(function () {
      console.log("logout success");
      return <Redirect to="/login" />;
    })
    .catch(function (error) {
      console.log("error");
    });
};

function Adminview() {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [units, setUnits] = useState("");
  const [newFoodName, setNewFoodName] = useState("");
  const [newPrice, setNewPrice] = useState("initialState");
  const [newCategory, setNewCategory] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnits, setNewUnit] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setMenu(response.data);
    });
  }, []);

  const addToList = async () => {
    const v = foodName;
    const w = price;
    const x = category;
    const y = quantity;
    const z = units;
    axios.post("http://localhost:3001/insert", {
      foodName: v,
      price: w,
      category: x,
      quantity: y,
      units: z,
    });
    setFoodName("");
    setPrice("");
    setCategory("");
    setQuantity("");
    setUnits("");
  };

  const updateFood = (id) => {
    axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
      newPrice: newPrice,
      newCategory: newCategory,
      newQuantity: newQuantity,
      newUnits: newUnits,
    });
  };

  const deleteFood = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`, {});
  };

  return (
    <div>
      <div>
        <h1>Add Food to the Menu</h1>

        <label>Food Name:</label>
        <input
          type="text"
          value={foodName}
          onChange={(event) => {
            setFoodName(event.target.value);
          }}
        />

        <label>How much ?</label>

        <input
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <label>Choose a category:</label>
        <select
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="icecream">icecream</option>
          <option value="sorbet">sorbet</option>
          <option value="speciality">speciality</option>
          <option value="event">event</option>
          <option value="tray">tray</option>
          <option value="pasta">pasta</option>
          <option value="pizza">pizza</option>
        </select>

        <label>Quantity:</label>
        <input
          type="text"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />

        <label>Units ?</label>
        <select
          onChange={(event) => {
            setUnits(event.target.value);
          }}
        >
          <option value="kg">kg</option>
          <option value="litre">litre</option>
          <option value="pieces">pieces</option>
        </select>

        <button onClick={addToList}>Add To List</button>

        <hr />
        <h1>Menu</h1>

        {menu.map((value, key) => {
          return (
            <div className="food" key={key}>
              <input
                type="text"
                defaultValue={value.foodName}
                placeholder={value.foodName}
                onChange={(event) => {
                  setNewFoodName(event.target.value);
                }}
                onBlur={(event) => {
                  if (!newFoodName) {
                    setNewFoodName(value.foodName);
                  }
                }}
              />
              <input
                type="text"
                defaultValue={value.price}
                placeholder={value.price}
                onChange={(event) => {
                  setNewPrice(event.target.value);
                }}
              />
              ₪
              <select
                defaultValue={value.category}
                onChange={(event) => {
                  setNewCategory(event.target.value);
                }}
              >
                <option value="icecream">icecream</option>
                <option value="sorbet">sorbet</option>
                <option value="speciality">speciality</option>
                <option value="event">event</option>
                <option value="tray">tray</option>
                <option value="pasta">pasta</option>
                <option value="pizza">pizza</option>
              </select>
              <input
                type="text"
                defaultValue={value.quantity}
                placeholder={value.quantity}
                onChange={(event) => {
                  setNewQuantity(event.target.value);
                }}
              />
              <select
                defaultValue={value.units}
                onChange={(event) => {
                  setNewUnit(event.target.value);
                }}
              >
                <option value="kg">kg</option>
                <option value="litre">litre</option>
                <option value="pieces">pieces</option>
              </select>
              <button onClick={() => updateFood(value._id)}>update</button>
              <button onClick={() => deleteFood(value._id)}>Delete</button>
            </div>
          );
        })}
      </div>

      <UploadForm />
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Adminview;
