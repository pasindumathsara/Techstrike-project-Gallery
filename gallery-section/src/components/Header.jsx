const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-700">
      <h1 className="text-xl font-bold">Tech Innovators Hub</h1>
      <nav className="space-x-6 text-sm">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Gallery</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Join Us</button>
      </nav>
    </header>
  );
};

export default Header;
