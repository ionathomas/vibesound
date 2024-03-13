function Results(keyword){
    const Keyword = new URLSearchParams(window.location.search).get("keyword");
    return (
        <div>
            <h1 style={{color:"black"}}>{Keyword}</h1>
        </div>
    );
}
export default Results;