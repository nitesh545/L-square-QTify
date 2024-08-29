import React from "react";
import { Button } from "@mui/material";
import styles from "./Button.module.css";

export default function CustomButton({ text, clicked }) {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#121212",
                color: "#34c94b",
                mx: "2rem",
                fontFamily: "Poppins",
            }}
            onClick={clicked ? clicked : null}
        >
            {text}
        </Button>
    );
}
