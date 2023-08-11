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

  //below is the function to delete the video
  function deleteVideo(id){
    console.log(id);
    // using the filter the video whose "id" matchde the given "id" will make the condition false thus making a new array without it
    setVideos(videos.filter(video=>video.id!=id))
  }

  return (
    <>
        
        <AddVideo addVideos={addVideos}></AddVideo>
      <div className="app">
        <Video_List videos={videos} btn_click={btn_click} btn_click2={btn_click2} deleteVideo={deleteVideo}></Video_List>
      </div>
     
    </>
  );
}



export default App;
