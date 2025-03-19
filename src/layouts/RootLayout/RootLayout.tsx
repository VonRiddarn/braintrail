import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

const RootLayout = () => {
	return (
		<>
			<NavBar />
			<SearchBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
