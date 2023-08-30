import React, { useState } from "react";

const Contact = () => {
  const [Message, setMessage] = useState({
    fname: "",
    phone: "",
    email: "",
    message: "",
  });
  const setdetail = (e) => {
    const { name, value } = e.target;
    setMessage((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
    console.log(e.target);
  };
  const showdetail = () => {
    alert(`
    your name is: ${Message.fname}
    your email is: ${Message.email}
    your phone is: ${Message.phone}
    your message is: ${Message.message}
    `);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className=" col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <form>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  autoCapitalize="characters"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fname"
                  value={Message.fname}
                  onChange={setdetail}
                  placeholder="Enter your Full Name"
                  required
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="num"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={Message.phone}
                  onChange={setdetail}
                  placeholder="Enter your Phone Number"
                />

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={Message.email}
                  onChange={setdetail}
                  placeholder="name@example.com"
                />

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={Message.message}
                    onChange={setdetail}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    onClick={showdetail}
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
