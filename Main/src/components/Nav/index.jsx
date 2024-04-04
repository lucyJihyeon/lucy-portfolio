import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['projects', 'resume', 'contact'];

  return (
    <nav className='fixed right-40'>
      <ul className="flex-row">
        {/* first item = About (current page/landing) */}
        <li
          className={`mx-2 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-2${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Nav;
