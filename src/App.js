import "./App.css";
import SearchPage from "./SearchPage";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
};

function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

export default App;
