import Image from "./images/wqweq.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <a href="https://twitter.com/DogeForLifeYes" className="twitter-link">Twitter</a>
        <a href="https://example.com/chart" className="twitter-link">Chart</a>
        <a href="https://t.me/DogeForLifeYes" className="twitter-link">Telegram</a>
        <span>CA :</span>
      </div>
      <img src={Image} alt="Image" />
    </div>
  );
}

export default App;
