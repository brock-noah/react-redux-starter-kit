import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import Navigation from '../../components/Navigation'
import routes from './../../routes'

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
          <Navigation routes={routes} />
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
