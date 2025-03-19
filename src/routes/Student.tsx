import { useParams } from "react-router-dom";
import { studentsDb } from "../StudentsDB";

const Student = () => {
	const params = useParams();

	const student = studentsDb.find((s) => s.id === Number(params.studentId));

	return (
		<div>
			<h2>{student?.id + ": " + student?.name}</h2>
			<ul>
				<li>{student?.age}</li>
			</ul>
		</div>
	);
};

export default Student;
