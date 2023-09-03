"use client";
import Image from "next/image";
import React, { useState } from "react";
import Styles from "../styles/SubscriptionSuccess.module.css";

export const SubscriptionSuccess = ({ email, onReturnToForm }) => {
  

  return (
    <div>
      <div className={Styles.successContainer}>
        <div className={Styles.success}>
          <Image
            width={64}
            height={64}
            src="/images/icon-success.svg"
            alt="Icon success"
          />
          <h1>Thanks for subscribing!</h1>
          <p className={Styles.content}><span>A confirmation email has been sent to </span><span className={Styles.emailSubscribe}>{email}</span><span>. Please open it and click the button inside to confirm your subscription.</span></p>
          <button className={Styles.btnSuccess}  onClick={onReturnToForm}>Dismiss message</button>
        </div>
      </div>
      {/* <div className={Styles.contenedorTemplate}>
        <img
          className={Styles.imagentemplate}
          src="/template/desktop-success.jpg"
          alt="Descripción de la imagen"
        ></img>
      </div> */}
            {/* <div className={Styles.contenedorTemplate}>
        <img
          className={Styles.imagentemplate}
          src="/template/mobile-success.jpg"
          alt="Descripción de la imagen"
        ></img>
      </div> */}
    </div>
  );
};
