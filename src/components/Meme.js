import './Meme.css';
import React,{useState} from 'react';
function Meme(){
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    let [meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    });
    let [allMeme,setallMeme] = useState("");
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").
        then(res=>res.json()).
        then(dat=>{setallMeme(dat)})
    },[]);
    function newImage(){
        let rno = Math.floor(Math.random()*100)+1;
        let randomImage = allMeme.data.memes[rno].url;
        setMeme(meme=>{return ({...meme,randomImage})});
        console.log(meme);
    }
    function handleChange(event){
        let {name,value} = event.target;
        setMeme(prev=>{
            return ({
                ...prev,
                [name]:value
            })
        })
            console.log(meme);
    }
    return(
        <div className="form-meme">
            <div className="form">
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                            <div className="form-group">
                                <input type="text" className="form-control" name="topText" id="topText" placeholder="Top Part" onChange={handleChange}/>
                            </div>
                    </div>
                    <div className="col-4">
                            <div className="form-group">
                                <input type="text" className="form-control" name="bottomText" id="bottomText" placeholder="Bottom Part" onChange={handleChange}/>
                            </div>       
                    </div>
                </div>
                <button type="button" className="btn memeButton" onClick={newImage}>Get a New Image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>

    )
}
export default Meme;