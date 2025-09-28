export const Homepage = () => {
  return (
    <main className="w-full h-full px-2 py-6 md:px-40 md:py-10">
      <div className="info-container w-full flex flex-col items-center justify-center bg-base-100 rounded-lg ring-1 ring-base-300 p-3">
        <h1 className="text-base-content w-full text-center text-xl md:text-5xl font-mono font-bold">
          Hi! Welcome to my TODO app
        </h1>

        <p className="text-lg text-center text-base-content">
          I was practicing with React and Express.js while creating this app
        </p>

        <div className="flex w-full flex-col lg:flex-row mt-4">
          
          <div className="card bg-base-200 rounded-box grid h-32 grow place-items-center">
            <pre className="rounded-lg bg-base-100 p-3 text-sm ring-1 ring-base-300">
              <code className="text-base-content">
                {`EMAIL: test123@test.com
PASSWD: test123`}
              </code>
            </pre>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          
          <div className="card bg-base-200 rounded-box grid h-32 grow place-items-center">
            <span className="text-2xl font-mono text-base-content text-center">
              Press{" "}
              <strong className="text-primary">Sign in</strong> button
              <br /> and use test user for this
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
