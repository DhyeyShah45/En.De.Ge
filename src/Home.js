import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Want to Encrypt or Decrypt ??</h2>
      <div className="home-button">
        <Link to="/encrypt">
          <button value="Encrypt">Encrypt</button>
        </Link>
        <Link to="/decrypt">
          <button value="Decrypt">Decrypt</button>
        </Link>
        <Link to="/generate">
          <button value="Generate">Generate</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
