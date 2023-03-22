import "./App.css";
import { UseEffectComplete } from "./useEffectComplete";
import { UseRedcuerComplete } from "./useReducerComplete";
// import UseStateDive from "./useStateDiveComplete";

function App() {
  return (
    <div>
      <h3>React hooks - Deep Dive</h3>
      {/* <UseStateDive /> */}
      {/* <UseEffectComplete /> */}
      <UseRedcuerComplete />
    </div>
  );
}

export default App;
