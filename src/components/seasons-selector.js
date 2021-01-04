import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchIcon } from '../icons';
import { retrieveSeason, retrieveSeasons } from '../redux';

const SeasonsSelector = () => {
  const { seasons } = useSelector((state) => state.footballers);
  const dispatch = useDispatch();
  const [showSeasons, setShowSeasons] = useState(false);

  useEffect(() => dispatch(retrieveSeasons()), []);

  return (
    <div className="grid grid-cols-2 gap-3 px-40 h-60">
      <div className="flex items-center shadow-sm rounded bg-white mt-7 h-48 relative">
        <div className="ml-16">
          <SearchIcon />
        </div>
        <div className="pl-12 pr-16 w-full">
          <input
            onFocus={() => setShowSeasons(true)}
            onBlur={(e) => setShowSeasons(false)}
            onKeyDown={(e) => (e.key === 'Escape' ? setShowSeasons(false) : null)}
            onChange={(e) => console.log(e.target.value)}
            className="w-full outline-none"
            type="text"
            placeholder="Search seasons"
          />
        </div>
        {showSeasons ? (
          <ul
            className="absolute top-60 left-24 rounded shadow-lg bg-white z-10"
            style={{ width: 'calc(100% - 24px)' }}
          >
            {seasons.map((season) => (
              <li
                className="px-16 py-12 relative cursor-pointer hover:bg-palest-blue"
                key={season}
                data-season={season}
                onMouseDown={(e) => dispatch(retrieveSeason(e.target.dataset.season))}
              >
                {season.split('_')[1]}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default SeasonsSelector;
