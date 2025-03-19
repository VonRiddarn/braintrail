import { Student as StudentType } from "../studentsDb";

type StudentProps = {
	student: StudentType | undefined;
};

const Student = ({ student }: StudentProps) => {
	return (
		student && (
			<div>
				<h2>
					{student.id + ": " + student.name}, {student.age}
				</h2>
			</div>
		)
	);
};

export default Student;
