import React from "react";
import LogoImage from "../Assets/logo.png";
import { Box } from "@mui/material";

export default function Logo() {
    return (
        <img
            src={LogoImage}
            alt="logo"
            width={67}
            style={{ marginTop: 10, marginBottom: 10, padding: "0rem 2rem" }}
        />
        // <Box component="img" src={LogoImage} alt="logo" sx={{ px: "2rem" }} />
    );
}
