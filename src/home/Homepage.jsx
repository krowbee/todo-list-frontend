import { NavLink } from "react-router-dom";

export const Homepage = () => {
  return (
    <main className="w-full h-full flex flex-col px-2 py-6 md:px-10 lg:px-20 md:py-10 gap-10">
      <div className="info-container w-full flex flex-col items-center justify-center gap-8 p-4 bg-base-200 border-t-6 border-primary rounded-lg">
        <h1 className="text-base-content w-full text-center text-xl md:text-4xl font-mono tracking-wider uppercase text-primary">
          Plan your day efficiently
        </h1>
        <div className="flex w-min-content flex-col md:flex-row">
          <div className="card shadow-lg border border-[0.5px] border-error rounded-box grid grow place-items-center">
            <div className="flex flex-col justify-between gap-3 px-4 py-4 w-full sm:w-[350px] lg:w-[450px]">
              <div className="flex flex-col">
                <h1 className="flex flex-row items-center text-error font-semibold font-mono">❌ Lose track of your day</h1>
                <p className="">Tasks pile up, deadlines blur, and focus fades away</p>
              </div>
              <div className="flex flex-col">
                <h1 className="flex flex-row items-center text-error font-semibold  font-mono">❌ Waste time on chaos</h1>
                <p className="">No structure, missed reminders, and endless catching up</p>
              </div>
            </div>
          </div>
          <div className="divider md:divider-horizontal text-primary before:bg-primary after:bg-primary">OR</div>
          <div className="card shadow-xl border border-[0.5px] border-success rounded-box grid grow place-items-center">
            <div className="flex flex-col justify-between gap-3 px-4 py-4 w-full sm:w-[350px] lg:w-[450px]">
              <div className="flex flex-col">
                <h1 className="flex flex-row items-center text-success font-semibold font-mono">✅ Stay organized, not overwhelmed</h1>
                <p className="">Group your tasks, set clear goals, and let KROWBEE guide your flow</p>
              </div>
              <div className="flex flex-col">
                <h1 className="flex flex-row items-center text-success font-semibold font-mono">✅ Make every minute count</h1>
                <p className="">Smart reminders and clean design keep your work balanced daily.</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-base-content w-full text-center text-xl md:text-xl font-mono tracking-wider uppercase"> What will you choose? </h1>
      </div>
      <div className="w-full flex collapses rounded-lg min-h-[50vh] bg-base-200 p-4 border-t-6 border-primary">
        <div className="collapse-container w-full flex flex-col gap-3 font-sans">
          <h1 className="text-base-content w-full text-center text-xl md:text-4xl font-mono tracking-wider uppercase text-primary">HOW IT WORKS</h1>
          <div tabIndex={0} className="collapse bg-base-100 border-base-300 border transition 0.5s ease hover:scale-[1.01]">
            <div className="collapse-title text-lg font-semibold px-6">📝 Create tasks easily</div>
            <div className="collapse-content text-sm px-6">
              Getting started is simple — click the plus button in the top right corner and fill out the short form to add a new task.
              Add your goals, notes, or deadlines in just a few seconds.
            </div>
          </div>
          <div tabIndex={1} className="collapse bg-base-100 border-base-300 border transition 0.5s ease hover:scale-[1.01]">
            <div className="collapse-title text-lg font-semibold px-6">🧩 Organize and manage your tasks</div>
            <div className="collapse-content text-sm px-6">
              To edit a task, select it from the list and click the “Edit” button, then update the form with new details.
              If a task is no longer needed, open its description and press “Delete” — keeping your list clean and organized has never been easier.
            </div>
          </div>
          <div tabIndex={2} className="collapse bg-base-100 border-base-300 border transition 0.5s ease hover:scale-[1.01]">
            <div className="collapse-title text-lg font-semibold px-6">🔍 How to filter your tasks</div>
            <div className="collapse-content text-sm px-6">
              We’ve built a simple and intuitive filtering system that helps you quickly find what matters most and track your results.
              <ul className="flex flex-col list-disc pl-6">
                <li>On larger screens, the filter is located on the left side.</li>

                <li>On mobile devices, you’ll find it above the task list.</li>
              </ul>
            </div>
          </div>
          <div tabIndex={3} className="collapse bg-base-100 border-base-300 border transition 0.5s ease hover:scale-[1.01]">
            <div className="collapse-title text-lg font-semibold px-6">⏰ Stay on track effortlessly</div>
            <div className="collapse-content text-sm px-6">
              All your changes are saved automatically, and smart reminders help you stay focused and never miss a thing.
              Plan smarter — and let KROWBEE handle the rest.
            </div>
          </div>
        </div>
      </div>
    
      <div className="hero min-h-[50vh] bg-base-200 text-center rounded-lg border-2 border-primary">
        <div className="hero-content flex flex-col">
          <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-wide text-primary mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-xl">
            Join thousands who already plan smarter with <span className="text-primary font-semibold">KROWBEE TODO</span>.
          </p>
          <NavLink to="/register" className="w-full"><button className="btn btn-primary btn-wide text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
            🚀 Try Now
          </button></NavLink>
        </div>
      </div>

    </main>
  );
};
