import SearchButt from "./SearchButt"

export default function Search() {
  return (
    <div className="flex items-center gap-2 flex-1 max-w-lg">
      <input
        type="text"
        placeholder="Пошук авто..."
        className="flex-1 h-9 px-3 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="h-9 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
        Знайти
      </button>
    </div>
  )
}