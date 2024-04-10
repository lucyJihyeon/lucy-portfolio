import { useEffect } from 'react';
import PageContent from '../PageContent';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <PageContent>
      <div className='grid items-center my-40 justify-center'>
      <Outlet />
      </div>
      </PageContent>
      <div className="eclipse"></div>
      <div className="eclipse2"></div>
    </section>
  );
}
export default Page;
