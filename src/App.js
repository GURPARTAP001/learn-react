import { useState } from 'react';
import './App.css';
import videosDb from './Data/data';
import AddVideo from './components/AddVideo';
import Video_List from './components/Video_List';

function App() {
  const btn_click = (msg) => {
    console.log("play :" + msg);
  }
  const btn_click2 = (msg) => {
    console.log("pause :" + msg);
  }

  const [videos, setVideos] = useState(videosDb)

  //this function takes the video to be added from the AddVideo component and push it with the existing videos
  function addVideos(video){
    setVideos([...videos,{...video,id:videos.length+1}])
  }

  return (
    <>
        
        <AddVideo addVideos={addVideos}></AddVideo>
      <div className="app">
        <Video_List videos={videos} btn_click={btn_click} btn_click2={btn_click2}></Video_List>
      </div>
     
    </>
  );
}



export default App;
