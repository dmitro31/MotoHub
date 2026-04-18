import { useState, useEffect, useRef } from "react";
import { catalog } from "../../data/Catalog";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        Каталог
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[700px] bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Оберіть марку та модель
          </p>
          <div className="grid grid-cols-4 gap-6">
            {catalog.map((c, i) => (
              <div key={i}>
                <h2 className="text-sm font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-100">
                  {c.brand}
                </h2>
                <ul className="flex flex-col gap-1">
                  {c.models.map((m, j) => (
                    <li key={j}>
                      <Link
                        to={`/car/${m.link}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-gray-500 hover:text-blue-600 hover:translate-x-0.5 transition-all duration-150 inline-block"
                      >
                        {m.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}