import './App.css';
import Video from './components/Video';

function App() { 

  // here we are passing the obj as a prop to the video component
  let obj={
    title:"Phone Hacking",
    views:"345k",
    time:"1 month",
    channel:'Legend_Coder'
  }
 
  return (
  <>
   <div className="app">
   {/* below we are using the object and the spread operator to pass the props   */}
   <Video {...obj}></Video>
   <Video title="laptop Hacking" views="345k" time="1 month" channel='Legend_Coder'></Video>
   <Video title="wifi Hacking" views="345k" time="1 month" channel='Legend_Coder'></Video>
   </div>
  </>
   

  );
}



export default App;
