import React from "react";
import LogoImage from "../Assets/logo.png";
import { Box } from "@mui/material";

export default function Logo() {
    return (
        <img
            src={LogoImage}
            alt="logo"
            style={{
                width: "67px",
                height: "34px",
                marginRight: "auto",
                marginLeft: "32px",
                marginTop: "20px",
                marginBottom: "20px",
                paddingLeft: "32px",
            }}
        />
        // <Box component="img" src={LogoImage} alt="logo" sx={{ px: "2rem" }} />
    );
}
