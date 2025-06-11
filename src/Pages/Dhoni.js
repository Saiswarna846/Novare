import { Link } from "react-router-dom";

export default function Dhoni() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#121212", color: "white", height: "100vh" }}>
      <h1>Dhoni Waterfalls</h1>
      <p>A scenic trek through lush green trails of Dhoni waterfalls.</p>
      <Link to="/" style={{ color: "cyan" }}>Go Back</Link>
    </div>
  );
}
