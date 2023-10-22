import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

function App() {
  const title = "Activity 13";
  const copyright = "Activity 13";

  return (
    <>
      <Header title={title} />
      <Counter />
      <Footer copyright={copyright} />
    </>
  );
}

export default App;
