import React, {useEffect} from "react";
import axios from "axios";
import "../pages_css/loadingResults.css";

function LoadingResults(){

    const Keyword = new URLSearchParams(window.location.search).get("keyword");
    const code = localStorage.getItem("code");

    useEffect(() => {
        if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
            window.location = '/';

        axios.get("/recommendPlaylists?code="+code+"&keyword="+Keyword)
        .then(function (response) {
            console.log(response.data);
            if (response.data !== null) {
                localStorage.setItem("Results", JSON.stringify(response.data));
                window.location.href = "/recommendations";
            }
        })
        .catch(function (err) {
            console.log(err);
        },[]);
    });

    return (
        <div className="loadResults">
            <div id="loader" style={{display:"block"}}></div>
        </div>
    );
}

export default LoadingResults;