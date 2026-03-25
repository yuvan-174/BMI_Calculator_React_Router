import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMIForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      setError("Enter valid numbers");
      return;
    }

    navigate("/result", {
      state: { height, weight }
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Enter Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br /><br />

        <button type="submit">Calculate</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default BMIForm;