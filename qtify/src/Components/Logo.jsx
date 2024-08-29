import React from "react";
import LogoImage from "../Assets/logo.png";
import { Box } from "@mui/material";

export default function Logo() {
    return (
        <img
            src={LogoImage}
            alt="logo"
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 32 }}
        />
        // <Box component="img" src={LogoImage} alt="logo" sx={{ px: "2rem" }} />
    );
}
