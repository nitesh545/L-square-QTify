import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import CustomButton from "./Button";
import SwiperComp from "./SwiperComp";
import GridComp from "./GridComp";

export default function SectionComp({ album, name, hideButton, text }) {
    let [isCollapsed, setIsCollapsed] = useState(!hideButton);

    let handleClick = () => {
        isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
    };

    return (
        <div style={{ backgroundColor: "#121212" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Typography gutterBottom variant="h4" color="white">
                    {name}
                </Typography>
                {!hideButton ? (
                    <CustomButton
                        text={isCollapsed ? "show all" : "Collapse"}
                        clicked={handleClick}
                    />
                ) : null}
            </div>
            {!isCollapsed ? (
                <GridComp album={album} text={text} />
            ) : (
                <SwiperComp album={album} text={text} />
            )}
        </div>
    );
}
