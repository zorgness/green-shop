import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./app/pages/HomePage";
import { ScrollToTop } from "./app/utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
