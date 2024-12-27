import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main className="flex flex-col mt-50vh gap-5 items-center justify-center">
      <h1 className="text-xl">HomePage</h1>
      <AddCompanyButton />
    </main>
  );
}
