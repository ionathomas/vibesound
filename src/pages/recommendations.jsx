import React, {useEffect, useState} from "react";
import './recommendations.css';
import axios from "axios";

function Recommendations(keyword) {

    const Keyword = new URLSearchParams(window.location.search).get("keyword");
    const code = localStorage.getItem("code");
    const [token, setToken] = useState({});

    useEffect(() => {
        axios.get("/recommendPlaylists?code="+code+"&keyword="+Keyword)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (err) {
            console.log(err);
        });
    });

    return (
        <div className="recommendations">
            <h1>So here are your recommendations...... </h1>
            <h1 style={{color:"black"}}>{Keyword}</h1>
        </div>
    );
}

export default Recommendations;
