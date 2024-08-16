import  '../index.css';
function CardLoader() {
        return (
          <div className="max-w-[20rem] mx-auto w-full p-2 relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-lg "></div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-400/70 dark:bg-gray-700/70 wave-animate bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.5),transparent,transparent,transparent)] dark:bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.25),transparent,transparent,transparent)]"></div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-2 flex-grow">
                    <div className="h-4 bg-gray-400/70 dark:bg-gray-700/70 wave-animate bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.5),transparent,transparent,transparent)] dark:bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.25),transparent,transparent,transparent)] rounded w-3/4"></div>
                    <div className="h-4 bg-gray-400/70 dark:bg-gray-700/70 wave-animate bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.5),transparent,transparent,transparent)] dark:bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.25),transparent,transparent,transparent)] rounded w-1/2"></div>
                  </div>
                  <div className="w-10 h-10 bg-gray-400/70 dark:bg-gray-700/70 wave-animate bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.5),transparent,transparent,transparent)] dark:bg-[linear-gradient(90deg,transparent,transparent,transparent,transparent,rgba(255,255,255,0.25),transparent,transparent,transparent)] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      };

export default CardLoader