import "./App.css";
import { ButtonDataCall } from "./common/button-data-call/button-data-call";

function App() {
  return (
    <>
      <ButtonDataCall criteria="character" />
      <ButtonDataCall criteria="location" />
      <ButtonDataCall criteria="episode" />
    </>
  );
}

export default App;
