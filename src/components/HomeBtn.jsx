import { Link } from "react-router-dom";
const HomeBtn = () => {
    return (
        <div className="flex items-center justify-center">
            <Link to="/" className="px-3 mb-10 py-3 text-white bg-purple-700  rounded-lg font-bold">Return Home</Link>
        </div>
    )
}
export default HomeBtn;