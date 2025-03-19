import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import About from "./routes/About";
import Student from "./routes/Student";
import Students from "./routes/Students";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			/* Use children here (like Home and About to create Layouts)*/
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/students",
			element: <Students />,
			children: [
				{
					path: ":studentId",
					element: <Student />,
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
