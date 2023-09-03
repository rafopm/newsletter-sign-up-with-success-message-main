"use client";
import Image from "next/image";
import React, { useState } from "react";
import Styles from "../styles/SubscriptionForm.module.css";

export const SubscriptionForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      onSubmit(email);
    }
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Validar el formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verificar si el valor ingresado coincide con el formato de correo electrónico
    const isValid = emailPattern.test(inputValue);
    setIsValidEmail(isValid);
  };

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.formContainer}>
          <form onSubmit={handleSubmit} className={Styles.form}>
            <div className={Styles.content}>
              <h1>Stay updated!</h1>
              <div className={Styles.description}>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
              </div>
              <ul className={Styles.lista}>
                <li>
                  <Image
                    width={21}
                    height={21}
                    src="/images/icon-list.svg"
                    alt="Icon list"
                  />
                  <p>Product discovery and building what matters</p>
                </li>
                <li>
                  <Image
                    width={21}
                    height={21}
                    src="/images/icon-list.svg"
                    alt="Icon list"
                  />
                  <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                  <Image
                    width={21}
                    height={21}
                    src="/images/icon-list.svg"
                    alt="Icon list"
                  />
                  <p>And much more!</p>
                </li>
              </ul>
              <div className={Styles.emailLabel}>
                <h3>Email address</h3>
                {!isValidEmail && (
                  <h3 style={{ color: "var(--tomato)" }}>
                    Valid email required
                  </h3>
                )}
              </div>
              <input
                type="text"
                placeholder="email@company.com"
                className={`${Styles.txtEmail} ${
                  isValidEmail ? "" : Styles.txtEmailError
                }`}
                onChange={handleEmailChange}
              ></input>

              <button className={Styles.btnSubscribe} type="submit">
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
          <div className={Styles.illustration}>
            {/* <Image
              width={400}
              height={593}
              objectFit="cover"
              src="/images/illustration-sign-up-desktop.svg"
              alt="Illustration sign up"
            /> */}
          </div>
        </div>
      </div>
      {/* <div className={Styles.contenedorTemplate}>
        <img
          className={Styles.imagentemplate}
          src="/template/desktop-design.jpg"
          alt="Descripción de la imagen"
        ></img> 
      </div> */}
      {/* <div className={Styles.contenedorTemplate}>
        <img
          className={Styles.imagentemplate}
          src="/template/mobile-design.jpg"
          alt="Descripción de la imagen"
        ></img>
      </div> */}
    </div>
  );
};
