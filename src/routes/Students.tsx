import { Link, useSearchParams } from "react-router-dom";
import { studentsDb } from "../studentsDb";
import Student from "./Student";

// TEMP STUFF
// 🤮🤮🤮
// TODO: Use some kind of searchBy query
// searchBy=name
// searchBy=name age
// searchBy=name id age
// ...

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
									.filter((s) => {
										const terms = term.toLowerCase().split(" ");
										return terms.some(
											(term) =>
												s.name.toLowerCase().includes(term) ||
												String(s.age).includes(term)
										);
									})
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
