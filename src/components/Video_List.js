import Video from "./Video"
import Playbutton from "./Playbutton"
import { useContext } from "react"

import VideosDispatchContext from "../context/VideosDispatchContext"
import videosContext from "../context/videosContext"


function Video_List({  btn_click, btn_click2,  editVideo }) {

  // in the below line we are using the useContext to get the prop directly
  const videos=useContext(videosContext)
  const dispatch=useContext(VideosDispatchContext)
    
  return (
    <>
      {/* below we are using the object and the spread operator to pass the props   */}
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          dispatch={dispatch}
          editVideo={editVideo}
        >
          {/* here the Playbutton is the child of the video */}
          <Playbutton msg={video.title} onPlay={btn_click} onPause={btn_click2}>PLAY</Playbutton>
        </Video>
      ))}
      {/* we can pass the function also as a prop to the component here the onClick is the prop that we are passing to the component*/}
    </>
  )
}

export default Video_List