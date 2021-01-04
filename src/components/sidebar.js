import { HomeIcon, IexIcon } from '../icons';

const Sidebar = () => {
  return (
    <div className="fixed h-screen text-14 w-240 bg-dark-blue">
      <div className="px-24 py-16">
        <IexIcon />
      </div>
      <nav className="text-white">
        <div className="flex items-center pl-28 pr-24 py-7">
          <div className="h-full mr-16">
            <HomeIcon />
          </div>
          <div>Home</div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
