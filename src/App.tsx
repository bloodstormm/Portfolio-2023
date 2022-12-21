import { RoutesContainer } from "./components/RoutesContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="mx-auto min-h-screen w-full">
      <Router>
        <ScrollToTop />
        <RoutesContainer />
      </Router>
    </div>
  );
}

export default App;
