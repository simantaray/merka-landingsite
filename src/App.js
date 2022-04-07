import Partner from "./Components/Partner";
import ExHome from "./Pages/ExHome";
import Home from "./Pages/Home";
import MaintenceHome from "./Pages/MaintenceHome";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Home />
      <Partner />
      <ExHome />
      <MaintenceHome />
    </div>
  )
}