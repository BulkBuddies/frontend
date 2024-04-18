import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { storeBulkBuddies } from "../state/state";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Explorar", href: "/posts/explore" },
  { name: "Publicar", href: "/posts/publish" },
  { name: "+Info", href: "/info" },
];

const Navbar = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = storeBulkBuddies();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className="rounded-b-[2rem] mx-auto grid grid-cols-2 lg:grid-cols-3 max-w-10xl align-middle justify-between p-4 lg:px-8 backdrop-blur-sm bg-buddies-bg/30 shadow-md max-h-[--heigth-navbar]"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex ml-4">
            <Link to="/" className="flex items-center -m-1.5 p-1.5">
              <img
                className="h-8 w-auto p-1"
                src="/bulkbuddies_logo.png"
                alt="logo"
              />
              <span className="text-xl font-semibold leading-6 text-gray-900 pl-1">
                BulkBuddies
              </span>
              <span className="text-xl font-black leading-6 text-buddies-blue-700">
                .
              </span>
            </Link>
          </div>

          {/* Desktop navigation*/}
          <div className="relative isolate hidden lg:flex z-50">
            <div className="bottom-8 m-auto inset-x-0 justify-between max-w-80 px-6 py-1 rounded-full flex lg:gap-x-12 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-md font-semibold leading-6 text-gray-900 hover:text-buddies-blue-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Ingresar / Login */}
          <div className="justify-end mr-4 hidden lg:flex">
            <Link
              to="/auth/login"
              className="flex justify-center w-[8rem] rounded-full bg-white border border-buddies-blue-700 px-6 py-1 text-sm font-semibold text-buddies-blue-700 shadow-sm hover:bg-buddies-blue-700 hover:text-buddies-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700"
            >
              Ingresar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </Link>
          </div>

          {/* Burger menu */}
          <div className="flex lg:hidden justify-end mr-4">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile navigation */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BulkBuddies</span>
                <img
                  className="h-8 w-auto"
                  src="/bulkbuddies_logo.png"
                  alt="logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Ingresar
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
