import './App.css';
import Video from './components/Video';
import videos from './Data/data';

function App() { 

  // here we are passing the obj as a prop to the video component
//   let videos=[
//     {
//       id:1,
//     title:"PHONE HACKING",
//     views:"345k",
//     time:"1 month",
//     channel:'Legend_Coder',
//     verified:true
//   },
//   {
//     id:2,
//   title:"LAPTOP HACKING",
//   views:"905k",
//   time:"4 month",
//   channel:'Legend_Coder',
//   verified:false
// },
// {
//   id:3,
// title:"WIFI HACKING",
// views:"1M",
// time:"9 month",
// channel:'Legend_Coder',
// verified:true
// }]
 
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
   </div>
  </>
   

  );
}



export default App;
