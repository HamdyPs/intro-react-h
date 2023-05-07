import Color from "./components/Color";
import Counter from "./components/Counter";
import SignUp from "./components/Signup";
import ToDo from "./components/ToDo";
import './style/style.css'
function App() {
  return <div className="App">
    <Counter />
    <hr />

    <ToDo />
    <hr />

    <Color />
    <hr />
    <SignUp />
  </div>;
}

export default App;