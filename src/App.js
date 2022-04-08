
import ExHome from "./Pages/ExHome";
import Home from "./Pages/Home";
import JoinUs from "./Pages/JoinUs";
import MaintenceHome from "./Pages/MaintenceHome";
import ReadArticle from "./Pages/ReadArticle";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Home />
      <ExHome />
      <MaintenceHome />
      <ReadArticle />
      <JoinUs/>
    </div>
  )
}