import { NavLink } from "react-router-dom";
import { ThemeButton } from "../ui/ThemeButton";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../context";
function Header() {
  const { store } = useContext(Context);
  return (
    <header className="navbar bg-base-100 shadow-sm px-4 md:px-10 justify-between relative">

      <NavLink to="/" className="flex items-center">
        <span className="logo font-mono font-bold uppercase tracking-wide text-xl md:text-3xl text-primary">
          krowbee todo
        </span>
      </NavLink>

      <ThemeButton handleTheme={store.handleTheme} />
      <div className="buttons-container flex items-center gap-2 font-mono">
        {!store.isAuth ? (

          <>
            <NavLink to="/login">
              <button className="btn btn-primary btn-sm md:btn-md">Sign in</button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn btn-secondary btn-sm md:btn-md">Sign up</button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/logout">
              <button className="btn btn-outline btn-secondary btn-sm md:btn-md">Logout</button>
            </NavLink>
            <NavLink to="/tasks">
              <button className="btn btn-accent btn-sm md:btn-md">Tasks</button>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default observer(Header);
