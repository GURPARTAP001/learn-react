import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Playbutton from './components/Playbutton';
import Video from './components/Video';
import videosDb from './Data/data';

function App() {
  const btn_click = (msg) => {
    console.log("play :" + msg);
  }
  const btn_click2 = (msg) => {
    console.log("pause :" + msg);
  }

  const [videos, setVideos] = useState(videosDb)

  return (
    <>
        <button 
        onClick={() => {
          console.log("action")
          setVideos([...videos, {
            id: videos.length + 1,
            title: "WIFI HACKING",
            views: "1M",
            time: "9 month",
            channel: 'Legend_Coder',
            verified: true
          }])
        }}>ADD VIDEOS</button>
      <div className="app">
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
          >
            {/* here the Playbutton is the child of the video */}
            <Playbutton msg={video.title} onPlay={btn_click} onPause={btn_click2}>PLAY</Playbutton>
          </Video>
        ))}
        {/* we can pass the function also as a prop to the component here the onClick is the prop that we are passing to the component*/}
      </div>
      <Counter></Counter>
    </>
  );
}



export default App;
