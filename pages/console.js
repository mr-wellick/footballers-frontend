import { FootballersChart, SeasonsSelector, Sidebar } from "../src/components";

const Console = () => {
  return (
    <section>
      <Sidebar />
      <div className="ml-240 bg-palest-blue h-screen">
        <SeasonsSelector />
        <FootballersChart />
      </div>
    </section>
  );
};

export default Console;
