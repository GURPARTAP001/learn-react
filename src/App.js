import './App.css';
import Playbutton from './components/Playbutton';
import Video from './components/Video';
import videos from './Data/data';

function App() {
  const btn_click=()=>{
    console.log("play");
  } 
  return (
  <>
   <div className="app">
   {/* below we are using the object and the spread operator to pass the props   */}
   {videos.map(video=>(
    <Video
      key={video.id}
      title={video.title}
      views={video.views}
      time={video.time}
      channel={video.channel}
      verified={video.verified}
      id={video.id}
    ></Video>
    ))}
    {/* we can pass the function also as a prop to the component here the onClick is the prop that we are passing to the component*/}
  <Playbutton onClick={btn_click}>PLAY</Playbutton>
   </div>
  </>
  );
}



export default App;
