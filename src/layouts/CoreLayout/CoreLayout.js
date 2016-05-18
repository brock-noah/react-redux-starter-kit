import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <span>
    <div className="music">
      <div className="now-playing">
        <h3>Garage Land</h3>
        <em>With Steexz and Stoe</em>
        <p>This is a quick . And some more. show description off (Rock)</p>
        <div className="album">ALBUM</div>
        <div>Artist</div>
        <div>Track</div>
        <div>Album</div>
      </div>
      <button>Listen Now</button>
    </div>
    <div className="content">
      <header>
        <h1>SANTA BARBARA</h1>
        <div>{children}</div>
      </header>
      <div className="inner-row">
        <section>
          <div className="navigation">
            <div className="nav-sqaure nav-sqaure-music">
              <h1>Music</h1>
              <ul>
                <li>Playlist</li>
                <li>Schedule</li>
                <li>Two Week Archive</li>
              </ul>
            </div>
            <div className="nav-sqaure nav-sqaure-articles">
              <h1>Articles</h1>
              <ul>
                <li>Highlights</li>
                <li>Music News</li>
                <li>Sports</li>
                <li>Public Affairs</li>
              </ul>
            </div>
            <div className="nav-sqaure nav-sqaure-contact">
              <h1>Contact</h1>
              <ul>
                <li>Excomm</li>
                <li>Press</li>
                <li>Tickets</li>
                <li>Request Line</li>
              </ul>
            </div>
            <div className="nav-sqaure nav-sqaure-about">
              <h1>About Us</h1>
              <ul>
                <li>Mission</li>
                <li>Getting Involved</li>
                <li>Press</li>
                <li>Alumni</li>
              </ul>
            </div>
            <div className="nav-sqaure nav-sqaure-donate">
              <h1>Donate <small>cart</small></h1>
            </div>
          </div>
        </section>
        <section>
          <div className="iblock-kids">
            <div>a</div>
            <div>s</div>
            <div>d</div>
            <div>f</div>
            <div>g</div>
          </div>
        </section>
        <section><h3>section 3</h3></section>
      </div>
    </div>
    <div className="disc-img">
      <div className="sign-up">
        <input type="text" />
        <button>GO</button>
      </div>
      <div className="legal">
        This is a really awesome website thanks for looking at it, while we look at you
      </div>
    </div>
  </span>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
