import React from 'react';

const UserCard = () => {
    return (
        <div className="border-r border-gray-300 w-96">
          <div className="mx-3 my-3">
            <div className="text-gray-600 flex">
              <span className="flex items-center p-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-gray-300"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="search"
                className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
                name="search"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <ul className="overflow-auto h-[calc(100vh-128px)] overflow-y-scroll">
            <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
            <li>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Jhon Don
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      25 minutes
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">bye</span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Same
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      50 minutes
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">
                    Good night
                  </span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Emma
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      6 hour
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">
                    Good Morning
                  </span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Jhon Don
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      25 minutes
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">bye</span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Same
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      50 minutes
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">
                    Good night
                  </span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Emma
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      6 hour
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">
                    Good Morning
                  </span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Jhon Don
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      25 minutes
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">bye</span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Same
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      50 minutes
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">
                    Good night
                  </span>
                </div>
              </a>
              <a
                href="/"
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              >
                <div className="w-full pb-2">
                  <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                      Emma
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                      6 hour
                    </span>
                  </div>
                  <span className="block ml-2 text-sm text-gray-600">
                    Good Morning
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
    );
};

export default UserCard;