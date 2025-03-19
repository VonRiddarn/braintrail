import { Link, Outlet } from "react-router-dom";
import { studentsDb } from "../studentsDb";

const Students = () => {
	return (
		<div>
			Students
			<div>
				<ul>
					{studentsDb.map((s) => (
						<li key={s.id}>
							<Link to={`/students/${s.id}`}>{s.name}</Link>
						</li>
					))}
				</ul>
				<Outlet />
			</div>
		</div>
	);
};

export default Students;
