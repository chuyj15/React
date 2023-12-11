import logo from './logo.svg';
import './App.css';
import CC from './component/ClassComponent'
import DD from './component/FunctionComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CC />
        <DD />

      </header>
    </div>
  );
}


// function App() {
//   return (
//     <>
//     <ClassComponent />
//     <hr></hr>
//     </>
//   );
// }

export default App;
