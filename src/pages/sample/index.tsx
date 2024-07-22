import { Link, useNavigate } from "react-router-dom";

export default function Sample() {
  const navigate = useNavigate();

  return (
    <div className="flex-col-center gap-4">
      <h1>Sample</h1>
      <Link to="/">Go back to home</Link>

      <button
        className="btn"
        onClick={() => {
          navigate("/sample/123");
        }}
      >
        Go to sample/123
      </button>
    </div>
  );
}
