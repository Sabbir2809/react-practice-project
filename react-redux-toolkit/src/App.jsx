import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="text-center mx-20 my-20">
      <h1 className="text-3xl">React Redux toolkit</h1>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  );
};

export default App;
