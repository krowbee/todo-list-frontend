  import { NavLink, useLocation } from "react-router-dom";
  import { ThemeButton } from "../ui/ThemeButton";
  import { observer } from "mobx-react-lite";
  import { useContext } from "react";
  import { Context } from "../context";
  import PlusIcon from "../assets/plus.svg?react";
  import CrossIcon from "../assets/cross.svg?react";

  
  function Header() {
    const { store } = useContext(Context);
    const location = useLocation();
    const isTasksPage = location.pathname == "/tasks";
    return (
      <header className="navbar bg-base-100 shadow-sm px-3 md:px-10 justify-between relative">

        <NavLink to="/" className="flex items-center">
          <span className="logo font-mono font-bold uppercase tracking-wide text-xl md:text-3xl text-primary flex justify-between">
            krowbee  <p className="text-base-content ml-1">todo</p>
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
              {isTasksPage  && !store.isEditTaskOpen ? 
            
              <button><PlusIcon alt="plusicon" className="flex w-6 h-6 text-primary cursor-pointer" onClick={() => {
                store.handleAddTaskMenu()
              }} /></button>
              : store.isEditTaskOpen ? 
              <button><CrossIcon alt="crossicon" className="flex w-6 h-6 text-primary cursor-pointer" onClick={() => {
                store.handleEditTaskMenu()
              }} />
              </button> :""
              }
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
