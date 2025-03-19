import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = () => navigate(`students?searchQuery=${encodeURIComponent(searchQuery)}`);

	return (
		<span>
			<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<button onClick={handleSubmit}>🔎</button>
		</span>
	);
};

export default SearchBar;
