import { Link, useSearchParams } from "react-router-dom";
import { studentsDb } from "../studentsDb";
import Student from "./Student";

const Students = () => {
	const term = useSearchParams()[0].get("searchQuery");

	return (
		<div>
			Students
			<div>
				<ul>
					{studentsDb.map((s) => (
						<li key={s.id}>
							<Link to={`/students?searchQuery=${s.id}`}>{s.name}</Link>
						</li>
					))}
				</ul>
				{term && (
					<ul>
						{!isNaN(Number(term)) ? (
							<li>
								<Student student={studentsDb.find((s) => s.id === Number(term))} />
							</li>
						) : (
							<>
								{studentsDb
									.filter(
										(s) =>
											s.name.toLowerCase().includes(term.toLowerCase()) ||
											String(s.age).includes(term)
									)
									.map((s) => (
										<li key={s.id}>
											<Student student={s} />
										</li>
									))}
							</>
						)}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Students;
