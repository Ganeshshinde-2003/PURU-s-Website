import React from "react";
import styles from "./form.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [candidate, setCandidate] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cv, setCV] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (company == "") {
      setCompany("N/A");
    }
    const formData = {
      firstName,
      lastName: secondName,
      email,
      number,
      company,
      message,
    };
    try {
      if (
        firstName !== "" &&
        secondName !== "" &&
        email !== "" &&
        number !== ""
      ) {
        const response = await fetch(
          "https://purus-server.onrender.com/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        emailjs
          .sendForm(
            "service_9cjeocr",
            "template_5ezxh0b",
            form.current,
            "kur0xlk0tkiiMPcML"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        alert("Form submitted successfully!");

        setFirstName("");
        setSecondName("");
        setEmail("");
        setNumber("");
        setCompany("");
        setMessage("");

        if (!response.ok) {
          alert("Something is wrong");
        }
      } else {
        alert("Fill all the fields");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmittwo = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName: secondName,
      email,
      number,
      portfolio,
      cv,
      message,
    };
    try {
      if (
        firstName !== "" &&
        secondName !== "" &&
        email !== "" &&
        number !== "" &&
        portfolio !== "" &&
        cv !== ""
      ) {
        const response = await fetch(
          "https://purus-server.onrender.com/api/candidate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        emailjs
          .sendForm(
            "service_3lsu20f",
            "template_xzwaq0g",
            form.current,
            "kur0xlk0tkiiMPcML"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        alert("Form submitted successfully!");

        setFirstName("");
        setSecondName("");
        setEmail("");
        setNumber("");
        setMessage("");
        setCV("");
        setPortfolio("");

        if (!response.ok) {
          alert("Something is wrong");
        }
      } else {
        alert("Fill all the fields");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.form}>
      {candidate ? (
        <form ref={form}>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="FirstName"
                  required
                  placeholder="FIRST NAME*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="LastName"
                  required
                  placeholder="LAST NAME*"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="EmailAddress"
                  required
                  placeholder="EMAIL ADDRESS*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="PhoneNo"
                  required
                  value={number}
                  placeholder="PHONE NUMBER*"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  required
                  name="companyName"
                  placeholder="COMPANY NAME"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={`${styles.box} ${styles.boxtext}`}>
                <textarea
                  type="text"
                  name="message"
                  required
                  placeholder="Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput} onClick={handleSubmit}>
            <div className={styles.parent}>
              <div className={`${styles.box} ${styles.box1}`}>
                <p className={styles.submit}>SUBMIT</p>
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </form>
      ) : (
        <form ref={form}>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="FirstName"
                  required
                  placeholder="FIRST NAME*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="LastName"
                  required
                  placeholder="LAST NAME*"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="EmailAddress"
                  required
                  placeholder="EMAIL ADDRESS*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="PhoneNo"
                  required
                  value={number}
                  placeholder="PHONE NUMBER*"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="Portfolio"
                  required
                  placeholder="PORTFOLIO LINK*"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={styles.box}>
                <input
                  type="text"
                  name="CV"
                  required
                  placeholder="CV GOOGLE DRIVE LINK*"
                  value={cv}
                  onChange={(e) => setCV(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput}>
            <div className={styles.parent}>
              <div className={`${styles.box} ${styles.boxtext}`}>
                <textarea
                  type="text"
                  name="message"
                  required
                  placeholder="Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.myInput} onClick={handleSubmittwo}>
            <div className={styles.parent}>
              <div className={`${styles.box} ${styles.box1}`}>
                <p className={styles.submit}>SUBMIT</p>
              </div>
            </div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </form>
      )}
      {candidate ? (
        <p className={styles.cvlink} onClick={() => setCandidate(!candidate)}>
          Want to join PURU's Upload CV
        </p>
      ) : (
        <p className={styles.cvlink} onClick={() => setCandidate(!candidate)}>
          Fill the required details
        </p>
      )}
    </div>
  );
}

export default Form;
