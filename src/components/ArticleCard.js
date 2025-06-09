import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  return (
    <div className="row g-0 bg-dark position-relative my-3 shadow-lg rounded p-4">
      <div className="col-md-5 mb-md-0 p-md-4 d-flex justify-content-center">
        <img
          src={props.picurl}
          className="w-100 rounded"
          alt="Article Image"
          style={{ border: "3px solid white", borderRadius: "40px" }}
        />
      </div>
      <div className="col-md-6 p-4 ps-md-0 text-white">
        <h5 className="mt-0">{props.title}</h5>
        <p>{props.desc}</p>
        <p className="text-truncate">{props.trundesc}</p>
        <Link to={props.articleLink} className="btn btn-outline-light rounded-pill">
          Read More
        </Link>
      </div>
    </div>
  );
}