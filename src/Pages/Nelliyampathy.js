import { Link } from "react-router-dom";

export default function Chimmony() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#121212", color: "white", height: "100vh" }}>
      <h1>Chimmony Wildlife Sanctuary</h1>
      <p>Explore the untouched beauty of Chimmony with lush forests and wildlife.</p>
      <Link to="/" style={{ color: "cyan" }}>Go Back</Link>
    </div>
  );
}
