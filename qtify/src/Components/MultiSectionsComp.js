import React from "react";
import { useState, useEffect } from "react";
import SectionComp from "./SectionComp";
import axios from "axios";

export default function MultiSectionsComp() {
    let [topAlbums, setTopAlbums] = useState([]);
    let [newAlbums, setNewAlbums] = useState([]);
    let [songs, setSongs] = useState([]);

    let fetchTopAlbums = () => {
        axios
            .get("https://qtify-backend-labs.crio.do/albums/top")
            .then((res) => {
                setTopAlbums(res.data);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let fetchNewAlbums = () => {
        axios
            .get("https://qtify-backend-labs.crio.do/albums/new")
            .then((res) => {
                setNewAlbums(res.data);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let fetchSongs = () => {
        axios
            .get("https://qtify-backend-labs.crio.do/songs")
            .then((res) => {
                setSongs(res.data);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchTopAlbums();
        fetchNewAlbums();
        fetchSongs();
    }, []);

    return (
        <div>
            <SectionComp album={topAlbums} name="Top Albums" text="Follows" />
            <SectionComp album={newAlbums} name="New Albums" text="Follows" />
            <SectionComp album={songs} name="Songs" hideButton text="Likes" />
        </div>
    );
}
