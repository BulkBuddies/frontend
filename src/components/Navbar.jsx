import { Bars3Icon } from "@heroicons/react/20/solid";
import { storeBulkBuddies } from "../state/state";

const Navbar = () => {
  const { setMobileMenuOpen } = storeBulkBuddies();

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="home" className="flex items-center -m-1.5 p-1.5">
          <img className="h-8 w-auto p-1" src="/bulkbuddies_logo.png" alt="logo" />

          <span className="text-xl font-semibold leading-6 text-gray-900 pl-1">BulkBuddies</span>
          <span className="text-xl font-black leading-6 text-buddies-blue-700">.</span>
        </a>
      </div>
      <a
        href="auth/login"
        className="flex rounded-full bg-white border border-buddies-blue-700 px-6 py-1 text-sm font-semibold text-buddies-blue-700 shadow-sm hover:bg-buddies-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700">
        Ingresar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-1">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      </a>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}>
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {/* <div className="bg-buddies-blue-700 px-6 py-1 rounded-full hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light leading-6 text-buddies-bg"
              >
                {item.name}
              </a>
            ))}
          </div> */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="flex text-sm font-semibold leading-6 text-gray-700">
          Buscar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
