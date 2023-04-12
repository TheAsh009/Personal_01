import React, { useState } from "react";
import styles from "./InputTable.module.css";

function InputTable() {
  let [bill, setBill] = useState(null);
  let [customerName, setCustomerName] = useState("");
  let [items, setItems] = useState([
    { product: { name: "", price: 10 }, quantity: "" },
  ]);
  const products = [
    { name: "Sugar", price: 80 },
    { name: "Oats", price: 100 },
    { name: "Coffee", price: 60 },
    { name: "Tea", price: 50 },
  ];

  function handleCustomerNameChange(e) {
    setCustomerName(e.target.value);
  }
  const handleProductChange = (index, e) => {
    const updatedItems = [...items];
    const selectedProduct = products.find(
      (product) => product.name === e.target.value
    );
    updatedItems[index].product = selectedProduct;
    setItems(updatedItems);
  };

  const handleQuantityChange = (index, e) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Number(e.target.value);
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItems = [
      ...items,
      { product: { name: "", price: 10 }, quantity: "" },
    ];
    setItems(newItems);
  };

  const handleCreateBill = () => {
    const billItems = items.map((item) => {
      return { ...item.product, quantity: item.quantity };
    });
    const total = billItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    const bill = { customerName, items: billItems, total };
    setBill(bill);
  };

  return (
    <div>
      {/* label for the customer name */}
      <label>
        Customer Name:
        <input
          type="text"
          value={customerName}
          onChange={handleCustomerNameChange}
        />
      </label>
      <hr></hr>

      {/* select product section */}

      {items.map((item, index) => (
        <div className={styles.mainDivOfForm} key={index}>
          <hr className={styles.hr} />

          <div className={styles.first}>
            Product:
            <select
              className={styles.product}
              value={item.product.name}
              onChange={(e) => handleProductChange(index, e)}
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name} ({product.price} Rs)
                </option>
              ))}
            </select>
          </div>
          <div className={styles.quantity}>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, e)}
            />
          </div>
        </div>
      ))}
      <div className={styles.bttn}>
        <button onClick={handleAddItem}>Add More Item</button>
      </div>

      <hr></hr>
      {/* this section is for bill  */}
      <button onClick={handleCreateBill}>Create Bill</button>
      {bill && (
        <div>
          <h2>Bill for {bill.customerName}</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bill.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}Rs</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Total</td>
                <td>{bill.total}Rs</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InputTable;
