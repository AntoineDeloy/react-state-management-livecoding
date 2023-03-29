import "./App.css";
import { UseEffectComplete } from "./useEffectComplete";
import {UseReducerComplete} from "./useReducerComplete";
// import UseStateDive from "./useStateDiveComplete";

function App() {
  return (
    <div>
      <h3>React hooks - Deep Dive</h3>
      {/* <UseStateDive /> */}
      {/* <UseEffectComplete /> */}
      <UseReducerComplete />
    </div>
  );
}

export default App;
