import './App.css';

function App() { 
  // thus we can pass the variable inside the return using the {} 
  //we can also form the various components and pass them in the App component
  let classname="App-header";
  let name="Gurpartap Singh";
  return (
    <div className="App">
      
      <div className={classname}>
      {name}
      <Demo></Demo>
      </div>
    </div>
  );
}

function Demo(){
  return(
    <div className="App">
      <div className="App-header">
        This is the child of the App component
      </div>
    </div>
  )
}

export default App;
