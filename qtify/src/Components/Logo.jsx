import React from "react";
import LogoImage from "../Assets/logo.png";

export default function Logo() {
    return (
        <img
            src={LogoImage}
            alt="logo"
            width={67}
            style={{ justifyContent: "center", padding: "0rem 2rem" }}
        />
    );
}
