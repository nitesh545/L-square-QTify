import React from "react";
import { Grid } from "@mui/material";
import SongCard from "./SongCard";

export default function GridComp({ album, text }) {
    console.log(album);
    if (!album) {
        return null;
    }
    return (
        <Grid container spacing={0}>
            {album.map((card) => {
                return (
                    <Grid xs={2} key={card.id}>
                        <SongCard
                            image={card.image}
                            follows={
                                text === "Likes" ? card.likes : card.follows
                            }
                            title={card.title}
                            text={text}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}
