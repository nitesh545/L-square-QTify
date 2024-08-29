import { Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";

export default function SectionComp() {
    let [topAlbums, setTopAlbums] = useState([]);

    let fetchTopAlbums = () => {
        axios
            .get("https://qtify-backend-labs.crio.do/albums/top")
            .then((res) => {
                console.log(res.data);
                setTopAlbums(res.data);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchTopAlbums();
    }, []);

    return (
        <div style={{ backgroundColor: "#121212" }}>
            <Grid container spacing={0}>
                {topAlbums.map((topAlbum) => {
                    return (
                        <Grid xs={2} key={topAlbum.id}>
                            <SongCard
                                image={topAlbum.image}
                                follows={`${topAlbum.follows} follows`}
                                title={topAlbum.title}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
