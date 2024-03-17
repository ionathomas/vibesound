
import React, {useEffect} from 'react';
import playlist from "../assets/playlist.jpg";
import './recommendations.css';

function Recommendation() {
    const refresh = () => {

        //  code for refresh button
        window.location.href = "/choice";

    };

    const play = () => {

        //  code for refresh button
        window.location.href = "/choice";

    };

    const home = () => {

        //  code for refresh button
        window.location.href = "/choice";

    };

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
            <div className ="home-icon" onClick={home}>
                <i class="fa-solid fa-house"></i>
            </div>
            <h1>So here are your recommendations...</h1>
            <div className="emoji-grid">
                <div className="card">
                    <img src={playlist} alt="Form" />
                    <div className="card-container">
                        <div class="play-icon" onClick={play}>
                            <i class="fa-solid fa-circle-play"></i>
                        </div>
                        <div><h4><b>Playlist1 Name</b></h4>
                            <div>
                                <h5><b>Playlist1 Author</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={playlist} alt="Form" />
                    <div className="card-container">
                        <div class="play-icon" onClick={play}>
                            <i class="fa-solid fa-circle-play"></i>
                        </div>
                        <div>
                            <h4><b>Playlist2 Name</b></h4>
                            <div>
                                <h5><b>Playlist2 Author</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={playlist} alt="Form" />
                    <div className="card-container">
                        <div class="play-icon" onClick={play}>
                            <i class="fa-solid fa-circle-play"></i>
                        </div>
                        <div>
                            <h4><b>Playlist3 Name</b></h4>
                            <div>
                                <h5><b>Playlist3 Author</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="refresh-icon" onClick={refresh}>
                <i class="fa fa-refresh" aria-hidden="true"></i>
                <h4>Still Not Satisfied</h4>
            </div>
        </div>
    );
}

export default Recommendation;
