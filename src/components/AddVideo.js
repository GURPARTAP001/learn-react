import { useState } from "react";
import "./AddVideo.css"
function AddVideo({ addVideos }) {

    const initState = {
        title: "",
        views: "",
        time: "9 month",
        channel: 'Legend_Coder',
        verified: true
    }
    const [video, setVideo] = useState(initState)
    // using this function we are passing the props from component to the "app"
    function handleSubmit(e) {
        e.preventDefault();
        addVideos(video);
        setVideo(initState)
    }

    //using this function we are accessing the content writen inside the inputs
    function handleChange(e) {
        e.stopPropagation();
        console.log(e.target.name, e.target.value)
        setVideo({ ...video, [e.target.name]: e.target.value })
        //the below line will clear the input after we submit it
        console.log(video);
    }
    return (
        <>
            <form >
            <input type="text" name="title" onChange={handleChange} placeholder="title" value={video.title} />
            <input type="text" name="views" onChange={handleChange} placeholder="views" value={video.views} />
                <button onClick={handleSubmit} className="btn">ADD VIDEO</button>
            </form>
        </>
    )
}
export default AddVideo