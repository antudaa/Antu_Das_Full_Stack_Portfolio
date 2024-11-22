export const Header = () => {
  return (
    <nav className="flex justify-center items-center fixed top-10 w-full z-10">
      <div className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur  bg-white text-gray-900">
        <a href="#home" className="nav_item bg-white text-gray-900  hover:bg-white/70 hover:text-gray-900">Home</a>
        <a href="#project" className="nav_item">Project</a>
        <a href="#about" className="nav_item">About</a>
        <a href="/blog" className="nav_item ">Blog</a>
      </div>
    </nav>
  );
};
