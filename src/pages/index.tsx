import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex-col-center gap-4">
      <span>Home Page</span>
      <Link to="/sample">Go to sample page</Link>
    </div>
  );
}
