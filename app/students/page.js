import StudentsTable from './StudentsTable';

async function getStudents() {
  console.log('Fetching all users (Static)...');
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div>
      <h2>Student List (Static)</h2>
      <StudentsTable students={students} />
    </div>
  );
}
