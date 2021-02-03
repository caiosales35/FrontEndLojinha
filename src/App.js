import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "../src/pages/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
