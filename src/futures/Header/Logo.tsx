import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/" className="text-xl font-medium tracking-tight">
      <span className="text-blue-500">Drive</span>Market
    </Link>
  )
}