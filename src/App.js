
import ExHome from "./Pages/ExHome";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import JoinUs from "./Pages/JoinUs";
import MaintenceHome from "./Pages/MaintenceHome";
import ReadArticle from "./Pages/ReadArticle";
import Review from "./Pages/Review";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Home />
      <ExHome />
      <MaintenceHome />
      <ReadArticle />
      <JoinUs/>
      <Review />
      <Footer />
    </div>
  )
}