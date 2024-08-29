import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import React from "react";
// import image from "../Assets/img_5.jpg";

export default function SongCard({ image, follows, title }) {
    return (
        <div>
            <Card variant="elevation" elevation={0} sx={{ margin: "1rem" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="songimage"
                />
                <CardContent>
                    <Chip
                        label={follows}
                        variant="filled"
                        sx={{ justifyContent: "left" }}
                    />
                </CardContent>
            </Card>
            <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "white" }}
            >
                {title}
            </Typography>
        </div>
    );
}
