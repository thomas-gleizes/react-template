import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen p-10 shadow-xl">
      <div className="relative bg-yellow-50 w-full h-full rounded-lg">
        <div className="absolute top-1/3 -mt-10 w-full">
          <h1 className="text-center text-5xl font-light mb-9">
            React-template started with Vite by{" "}
            <a
              href="https://github.com/thomas-gleizes"
              target="_blank"
              className="transition transform hover:scale-105 duration-100"
            >
              Thomas Gleizes
            </a>
          </h1>
          <div className="text-center font-light text-md">
            <h2 className="text-3xl">Packages</h2>
            <ol>
              <li>
                <a
                  className="hover:underline"
                  href="https://fr.reactjs.org/"
                  target="_blank"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  Tailwindcss
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://prettier.io/"
                  target="_blank"
                >
                  Prettier
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                >
                  Typescript
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
