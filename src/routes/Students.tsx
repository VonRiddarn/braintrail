import { Link } from "react-router-dom";
import { studentsDb } from "../StudentsDB";

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
			</div>
		</div>
	);
};

export default Students;
