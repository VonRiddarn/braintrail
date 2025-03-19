import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import About from "./routes/About";
import Students from "./routes/Students";
import RootLayout from "./layouts/RootLayout/RootLayout";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "students",
					element: <Students />,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
