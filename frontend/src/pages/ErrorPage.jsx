import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-white dark:text-white-800">Error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Ooopsi, something went wrong.</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for seems to be missing.</p>

            <div className="flex items-center mt-6 gap-x-3">
              <a href="/">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                  <span>Take me back</span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
