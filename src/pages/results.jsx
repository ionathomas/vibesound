function Results(keyword){

    const Keyword = new URLSearchParams(window.location.search).get("keyword");
    const code = localStorage.getItem("code");

    console.log(code);

    return (
        <div>
            <h1 style={{color:"black"}}>{Keyword}</h1>
        </div>
    );
}
export default Results;