// Routing
import { Outlet, Link } from "react-router-dom";
// Utils
import { resolvePath } from "../../utils";
import { ArrowLeftIcon } from "../../components/icons";

const NavOutlet = () => {
  return (
    <>
      <nav className="flex p-6 bg-slate-950">
        <Link
          className="flex items-center gap-4 [&>svg]:hover:fill-slate-200 hover:text-slate-200"
          to={resolvePath("/")}
        >
          <ArrowLeftIcon className="fill-white w-4 h-4 after:w-full" />
          <span>Home</span>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NavOutlet;
