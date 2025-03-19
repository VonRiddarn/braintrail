import { useParams } from "react-router-dom";
import { studentsDb } from "../studentsDb";

const Student = () => {
	const params = useParams();

	const student = studentsDb.find((s) => s.id === Number(params.studentId));

	return (
		<div>
			<h2>
				{student?.id + ": " + student?.name}, {student?.age}
			</h2>
		</div>
	);
};

export default Student;
