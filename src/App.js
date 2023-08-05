import './App.css';
import Video from './components/Video';

function App() { 

  // here we are passing the obj as a prop to the video component
  let obj={
    title:"PHONE HACKING",
    views:"345k",
    time:"1 month",
    channel:'Legend_Coder',
    verified:true
  }
 
  return (
  <>
   <div className="app">
   {/* below we are using the object and the spread operator to pass the props   */}
   <Video {...obj}></Video>
   <Video title="LAPTOP HACKING" views="345k" time="1 month" channel='Legend_Coder' verified={false}></Video>
   <Video title="WIFI HACKING" views="345k" time="1 month" channel='Legend_Coder' verified={true}></Video>
   </div>
  </>
   

  );
}



export default App;
