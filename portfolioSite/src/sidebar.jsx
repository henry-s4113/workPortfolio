export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 text-xl font-bold">
        My Portfolio
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <a
          href="/home"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <img src="/img/headshot.jpg" alt="Home" className="w-5 h-5" />
          About
        </a>
        <a
          href="/inbox"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <img src="/img/headshot.jpg" alt="html-class" className="w-5 h-5" />
          HTML Classwork
        </a>
        <a
          href="http://citweb.lanecc.edu:5010/"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <img
            src="/img/shoppingList-icon.png"
            alt="javascript-react-class"
            className="w-5 h-5"
          />
          JavaScript & React Classwork
        </a>
      </nav>

      {/* Optional Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2025 My Portfolio
      </div>
    </div>
  );
}
