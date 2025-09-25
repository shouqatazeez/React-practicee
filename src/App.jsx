import "./App.css";
import Card from "./components/Card";
import Counter from "./components/counter";

function App() {
  return (
    <>
      {/* <Counter /> */}

      <Card
        username="some tower like structure"
        description="This is very tall tower looke in a structure of the very tall"
        btn="click me to know more"
      />
      <Card
        username="Tall Tower"
        description="look like very talll"
        btn="view our website"
      />
    </>
  );
}

export default App;
