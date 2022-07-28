import React from "react"
// import memesData from "../memesdata.js"


export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMeme(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const memesArray = allMeme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        setMeme(prevMeme=>({...prevMeme, randomImage: url}))
    }

    function handleTextChange() {
        setMeme((prevMeme)=>{
            return {...prevMeme, [event.target.name]: event.target.value}}
    )
        }

    return (
        <main className="main">
            <div className="form">
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="top text"
                    name="topText"
                    value={meme.topText} 
                    onChange={handleTextChange}
                />
                <input 
                    className="form-input" type="text" 
                    placeholder="bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleTextChange}
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="imageContainer">
                <img className="image" src={meme.randomImage} />
                <h2 className="topText">{meme.topText}</h2>
                <h2 className="bottomText">{meme.bottomText}</h2>
            </div>
        </main>
    )
}