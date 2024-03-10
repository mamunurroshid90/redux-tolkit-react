import "./App.css";
import CounterView from "./feature/counter/CounterView";
import PostsVeiw from "./feature/todos/PostsVeiw";

function App() {
  return (
    <>
      <div>
        <h1 className="counter-heading">Counter App</h1>
        <CounterView />
        <PostsVeiw />
      </div>
    </>
  );
}

export default App;
