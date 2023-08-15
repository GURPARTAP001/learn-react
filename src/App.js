import { useContext, useReducer, useState } from 'react';
import './App.css';
import videosDb from './Data/data';
import AddVideo from './components/AddVideo';
import Video_List from './components/Video_List';
import Themecontext from './context/Themecontext';

function App() {

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":

        return [...videos, { ...action.paylaod, id: videos.length + 1 }]

      case "DELETE":
        return videos.filter(video => video.id !== action.paylaod)

      case "UPDATE":
        const index = videos.findIndex(v => v.id === action.paylaod.id)
        const newVideo = [...videos]
        newVideo.splice(index, 1, action.paylaod)
        return newVideo

      default:
        return videos
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videosDb)



  // UISNG THE  "useContext" 
  const themecontext=useContext(Themecontext);

  // const [videos, setVideos] = useState(videosDb)
  const [edit, setEdit] = useState(null)

  const btn_click = (msg) => {
    console.log("play :" + msg);
  }
  const btn_click2 = (msg) => {
    console.log("pause :" + msg);
  }

  function editVideo(id) {
    //here the find will get us the needed video with the given "id"
    setEdit(videos.find(video => video.id === id))
  }

  return (
    <>

      <AddVideo dispatch={dispatch} edit={edit} setEdit={setEdit} ></AddVideo>
      <div className={`app ${themecontext}`}>
        <Video_List videos={videos} btn_click={btn_click} btn_click2={btn_click2} dispatch={dispatch} editVideo={editVideo}></Video_List>
      </div>

    </>
  );
}



export default App;
