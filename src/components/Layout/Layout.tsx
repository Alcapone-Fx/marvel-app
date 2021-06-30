import { useHistory, useLocation } from 'react-router-dom';

import { paths } from 'utils/paths';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const getNavItemsClassName = (path) =>
    `flex items-center px-2 h-full text-lg tracking-wider cursor-pointer ${
      pathname === path ? 'bg-blue-400' : ''
    } hover:bg-gray-50 hover:text-gray-600`;

  return (
    <div className="h-screen">
      <header className="flex h-16 justify-end bg-gray-600">
        <nav>
          <ul className="flex h-full items-center text-gray-50">
            <li
              className={getNavItemsClassName(paths.characters)}
              onClick={() => push(paths.characters)}
            >
              Characters
            </li>
            <li className={getNavItemsClassName(paths.comics)}>
              Comics
            </li>
            <li className={`mr-8 ${getNavItemsClassName(paths.stories)}`}>
              Stories
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <div className="w-2/3 mx-auto p-4">{children}</div>
        </article>
      </main>
    </div>
  );
};

export default Layout;
