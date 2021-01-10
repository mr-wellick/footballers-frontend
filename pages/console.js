import { useSelector } from 'react-redux';
import { FootballersChart, SeasonsSelector, Sidebar } from '../src/components';

const Console = () => {
  const { activeSeason } = useSelector((state) => state.footballers);
  return (
    <section>
      <Sidebar />
      <div className="ml-240 bg-palest-blue h-screen">
        <SeasonsSelector />
        <div className="max-w-screen-xl mx-auto px-40 pt-40">
          {activeSeason ? (
            <>
              <h2 className="text-2xl font-light">Barcelona season {activeSeason.split('_')[1]}</h2>
              <p className="font-extralight mb-24">
                Message allocation and billing resets on the first of every month at 00:00:00 UTC
              </p>
              <FootballersChart />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-light">No season data to display</h2>
              <p className="font-extralight mb-24">Please use search bar to look up available a season</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Console;
