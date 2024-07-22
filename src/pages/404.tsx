import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex-col-center h-full w-full gap-4">
      <div className="flex-center gap-2">
        <span className="text-lg">404</span>
        <span className="h-3 w-px bg-neutral-500" />
        <span>Page not found</span>
      </div>

      <span className="h-px w-full max-w-48 bg-neutral-500/50" />

      <Link to="/">Go back to home</Link>
    </div>
  );
}
