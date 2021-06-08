const Layout = ({ children }) => {
  return (
    <div className="container h-screen">
      <header className="flex h-16 justify-end bg-gray-600">
        <nav>
          <ul className="flex h-full items-center text-gray-50">
            <li className="mr-8 text-lg">Characters</li>
            <li className="mr-8 text-lg">Comics</li>
            <li className="mr-8 text-lg">Stories</li>
          </ul>
        </nav>
      </header>
      <main>
        <article className="container">{children}</article>
      </main>
    </div>
  );
};

export default Layout;
