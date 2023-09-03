import Image from "next/image";
import React from "react";
import Styles from "../styles/SubscriptionForm.module.css";

export const SubscriptionForm = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.formContainer}>
          <div className={Styles.form}>
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
                <h3 style={{ color: "var(--tomato)" }}>Valid email required</h3>
              </div>
              <input
                type="text"
                placeholder="email@company.com"
                className={Styles.txtEmail}
              ></input>

              <button className={Styles.btnSubscribe}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
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
