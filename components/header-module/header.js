import Router from 'next/router'
import Link from '../link/Link'
import NxtHead from '../head/nxthead'

export default () => (
  <>
  <NxtHead />
  <header>
    <nav>
      <style jsx>{`
        .active:after {
          content: ' (current page)';
        }
        .nav-link {
          text-decoration: none;
          padding: 10px;
          display: block;
        }
      `}</style>
      <p> Header for react application </p>
      <ul>
        <li>
          <Link activeClassName='active' href='/'>
            <a className='nav-link home-link'>Home</a>
          </Link>
        </li>
        <li>
          <Link activeClassName='active' href='/about' as='/about'>
            <a className='nav-link'>About</a>
          </Link>
        </li>
        <li>
          <Link activeClassName='active' href='/preact' as='/preact'>
            <a className='nav-link'>Preact</a>
          </Link>
        </li>
        <li>
          <Link activeClassName='active' href={{ pathname: '/posts', query: {id: '2'}}} as='/posts/2'>
            <a className='nav-link'>Posts</a>
          </Link>
        </li>
        <li>
          <Link activeClassName='active' href='/error_page' as='/errorPage'>
            <a className='nav-link'>Error</a>
          </Link>
        </li>
        <li>
          <Link activeClassName='active' href='/form-module' as='/formModule'>
            <a className='nav-link'>Form Module</a>
          </Link>
        </li>
        <li>
          <Link activeClassName='active' href='/blog-contents' as='/blog'>
            <a className='nav-link'>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  </>
)
