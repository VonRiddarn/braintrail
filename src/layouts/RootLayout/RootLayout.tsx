import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const RootLayout = () => {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
