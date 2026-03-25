import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>BMI Calculator</h1>
      <Link to="/bmi">
        <button>Start</button>
      </Link>
    </div>
  );
}

export default Home;