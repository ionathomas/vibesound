import React, {useEffect, useState} from 'react';
import '../pages_css/recommendations.css';

function Recommendation() {

    const handleRedirect = (page) => {
        window.location.href = `/${page}`;
    };

    const handlePlayRedirect = (linkPosition) => {
        window.open(results[linkPosition]["playlistURL"],"_blank");
    };

    const [pos, updatePos] = useState(0);
    const results = JSON.parse(localStorage.getItem("Results"));

    //Image
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");

    //Playlist name
    const [play1, setPlay1] = useState("");
    const [play2, setPlay2] = useState("");
    const [play3, setPlay3] = useState("");

    //Playlist by
    const [by1, setBy1] = useState("");
    const [by2, setBy2] = useState("");
    const [by3, setBy3] = useState("");

    useEffect(() => {
        const results = JSON.parse(localStorage.getItem("Results"));
        console.log(pos);

        const body = document.body;
        body.style.backgroundColor = results[0]['color2'];
        body.style.backgroundImage = "radial-gradient("+results[0]['color1']+", "+results[0]['color2']+")"
        console.log(results)

        if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
            window.location = '/';

        if (pos === 15)
            updatePos(0);

        if (results != null && pos < 15){
            setImg1(results[pos]["playlistImg"]);
            setImg2(results[pos+1]["playlistImg"]);
            setImg3(results[pos+2]["playlistImg"]);
            console.log(pos);

            setPlay1(results[pos]["playlistName"]);
            setPlay2(results[pos+1]["playlistName"]);
            setPlay3(results[pos+2]["playlistName"]);

            setBy1(results[pos]["playlistBy"]);
            setBy2(results[pos+1]["playlistBy"]);
            setBy3(results[pos+2]["playlistBy"]);
        }

    },[pos]);

    return (
        <div className="recommendations">
            <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
                <i className="fa-solid fa-house"></i>
            </div>
            <h1>Recommendations Based On Your Mood...</h1>
            <br/><br/>
            <div className="emoji-grid">
                <div className="card">
                    <img id="img1" src={img1} alt="Form" onClick={() => handlePlayRedirect(pos)} />
                    <div className="card-container">
                        <div className="play-icon" onClick={() => handlePlayRedirect(pos)}>
                            <i className="fa-solid fa-circle-play"></i>
                        </div>
                        <div><h4 id="play1"><b>{play1}</b></h4>
                            <div>
                                <h5 id="by1"><b>{by1}</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img id="img2" src={img2} alt="Form" onClick={() => handlePlayRedirect(pos+1)}/>
                    <div className="card-container">
                        <div className="play-icon" onClick={() => handlePlayRedirect(pos+1)}>
                            <i className="fa-solid fa-circle-play"></i>
                        </div>
                        <div>
                            <h4 id="play2"><b>{play2}</b></h4>
                            <div>
                                <h5 id="by2"><b>{by2}</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img id="img3" src={img3} alt="Form" onClick={() => handlePlayRedirect(pos+2)}/>
                    <div className="card-container">
                        <div className="play-icon" onClick={() => handlePlayRedirect(pos+2)}>
                            <i className="fa-solid fa-circle-play"></i>
                        </div>
                        <div>
                            <h4 id="play3"><b>{play3}</b></h4>
                            <div>
                                <h5 id="by3"><b>{by3}</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="refresh-icon" onClick={() => {updatePos(pos+3)}}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
                <h4 id="TextMessage" style={{color: "white"}}>Still Not Satisfied?</h4>
            </div>
        </div>
    );
}

export default Recommendation;
