import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();
  const [messageSent, setMessageSent] = useState(false);
  const CheckoutHandler = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "orders"), {
      name,
      email,
      number,
      message,
    }).then(async () => {
      setMessageSent(true);
    });
  };
  return (
    <div className="form-page">
      {messageSent ? (
        <div className="form-container">
          <div className="form-left">
            <div className="form-left-inside">
              <h1>Thanks for filling out the details. </h1>
              <p>We will get back to you within 24 hours. </p>
            </div>
          </div>
          <div className="form-right"></div>
        </div>
      ) : (
        <div className="form-container">
          <div className="form-left">
            <div className="form-left-inside">
              <h1>Enter your Details. </h1>
              <p>We will get back to you within 24 hours. </p>
              <form onSubmit={CheckoutHandler}>
                <div className="form-input">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="">Number</label>
                  <input
                    type="number"
                    required
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="">Details About the Project</label>
                  <textarea
                    name="details"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="form-right"></div>
        </div>
      )}
    </div>
  );
}

export default Form;
