import Partner from "./Components/Partner";
import ExHome from "./Pages/ExHome";
import Home from "./Pages/Home";
import MaintenceHome from "./Pages/MaintenceHome";
import ReadArticle from "./Pages/ReadArticle";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Home />
      <Partner />
      <ExHome />
      <MaintenceHome />
      <ReadArticle />
    </div>
  )
}