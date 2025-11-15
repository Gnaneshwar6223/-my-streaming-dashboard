export default function Header() {
  return (
    <header className="p-4 text-white bg-gray-900 flex justify-between items-center">
      <h1 className="text-2xl font-bold">StreamDash</h1>

      <nav className="flex gap-6">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Movies</a>
        <a href="#" className="hover:text-gray-400">TV</a>
      </nav>
    </header>
  );
}
