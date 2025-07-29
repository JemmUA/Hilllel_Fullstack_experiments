// onChange - event handler used primary with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import {useState} from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipment, setShipment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShipmentChange(event) {
    setShipment(event.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleNameChange} placeholder="Name"/>
      <div>Name: {name}</div>
      <input value={quantity} onChange={handleQuantityChange} type="number"/>
      <div>Quantity: {quantity}</div>
      <textarea value={comment} onChange={handleCommentChange} placeholder="Leave comment"/>
      <div>Comment: {comment}</div>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="MasterCard">MasterCard</option>
        <option value="VisaCard">VisaCard</option>
        <option value="GiftCard">GiftCard</option>
     </select>
      <div>Payment: {payment}</div>
      <label>
        <input type="radio" value="Pick up" checked={shipment==="Pick up"} onChange={handleShipmentChange}/>
        Pick up
      </label><br/>
      <label>
        <input type="radio" value="Delivery" checked={shipment==="Delivery"} onChange={handleShipmentChange}/>
        Delivery
      </label>
      <p>Shipment: {shipment}</p>

    </>
  )
}
export default MyComponent