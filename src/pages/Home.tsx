import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen p-10">
      <div className="relative bg-yellow-50 w-full h-full rounded-lg border border-yellow-100 shadow-xl">
        <div className="absolute top-1/3 -mt-10 w-full">
          <h1 className="text-center text-5xl font-light mb-9">Welcome on thomasgleizes.fr</h1>
          <div className="flex justify-center space-x-250">
            <div className="text-center font-light text-md">
              <h2 className="text-3xl mb-4">Projets</h2>
              <ol className="space-y-2">
                <li>
                  <a className="hover:underline" href="https://kanime.thomasgleizes.fr/" target="_blank">
                    Kanime
                  </a>
                </li>
              </ol>
            </div>
            <div className="text-center font-light text-md">
              <h2 className="text-3xl mb-4">Links</h2>
              <ol className="space-y-2">
                <li>
                  <a className="hover:underline" href="https://github.com/thomas-gleizes/" target="_blank">
                    Github
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
