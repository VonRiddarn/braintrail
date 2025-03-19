import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
	const menuItems: { to: string; label: string }[] = [
		{
			to: "/",
			label: "Home",
		},
		{
			to: "about",
			label: "About",
		},
		{
			to: "students",
			label: "students",
		},
	];

	const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
		isActive ? "nav-link active" : "nav-link";

	return (
		<nav>
			<ul>
				{menuItems.map((item) => (
					<li key={item.label}>
						<NavLink to={item.to} className={getLinkClassName}>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
