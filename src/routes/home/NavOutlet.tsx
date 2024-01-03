// Routing
import { Outlet, Link } from "react-router-dom";
// Utils
import { resolvePath } from "../../utils";
import { ArrowLeftIcon } from "../../components/icons";

const NavOutlet = () => {
  return (
    <>
      <nav className="flex p-6 bg-zinc-950 border border-x-0 border-t-0 border-b border-b-gray-600 shadow-lg shadow-zinc-950">
        <Link
          className="flex items-center gap-4 [&>svg]:hover:fill-slate-200 hover:text-slate-200"
          to={resolvePath("/")}
        >
          <ArrowLeftIcon className="fill-white w-4 h-4 after:w-full" />
          <span>Home</span>
        </Link>
      </nav>
      <>
        <Outlet />
      </>
    </>
  );
};

export default NavOutlet;
