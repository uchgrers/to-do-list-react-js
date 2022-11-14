import './App.css';
import TasksContainer from "./Components/Tasks/TasksContainer";
import Footer from "./Components/Footer/Footer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <TasksContainer />
        <Footer />
    </div>
  );
}

export default App;
