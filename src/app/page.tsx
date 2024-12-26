import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-xl font-bold underline text-black-700">HomePage</h1>
      <div className="flex flex-row gap-2">
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </div>

      <div>
        <AddCompanyButton />
        <MagicButton />
      </div>
    </main>
  );
}
