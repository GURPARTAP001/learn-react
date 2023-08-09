import { useState } from "react";
import "./AddVideo.css"
function AddVideo() {
    const [video, setVideo] = useState({
        time: "9 month",
        channel: 'Legend_Coder',
        verified: true
    })
    // using this function we are passing the props from component to the "app"
    function handleSubmit() {
        console.log("hi")
    }

    //using this function we are accessing the content writen inside the inputs
    function handleChange(e) {
        e.stopPropagation();
        console.log(e.target.name, e.target.value)
        setVideo({...video,[e.target.name]:e.target.value})
        console.log(video);
    }
    return (
        <>
            <form >
                <input type="text" name="title" onChange={handleChange} placeholder="title" />
                <input type="text" name="views" onChange={handleChange} placeholder="views" />
                <button onClick={handleSubmit} className="btn">ADD VIDEO</button>
            </form>
        </>
    )
}
export default AddVideo