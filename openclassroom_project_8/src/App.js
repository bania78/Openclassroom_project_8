import './styles/App.css';
import Nav from './components/Nav/Nav';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
