import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen text-neutral-200 bg-neutral-800 antialiased">
      <div className="flex">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-36 hover:transition duration-1600 hover:scale-115 p-6"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-36 hover:transition duration-1600 hover:scale-115 p-6 animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl my-8 font-bold">Vite + React</h1>
      <div className="p-8">
        <button
          className="px-[1.2rem] py-[0.6rem] bg-neutral-900 rounded-lg hover:border-[#646cff] border border-transparent"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="my-4 text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
