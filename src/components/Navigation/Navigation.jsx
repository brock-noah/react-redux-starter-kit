import React from 'react'
import { Link } from 'react-router'

const NavBlock = ({block}) => {
  return (
    <div className='nav-square'>
      <h1>{block.label}</h1>
      <ul>
        {block.routes.map(item => {
          return (<li>
            <Link to={item.to}>{item.label}</Link>
          </li>)
        })
      }
      </ul>
    </div>
  )
}

NavBlock.propTypes = {
  block: React.PropTypes.object
}

export const Navigation = ({routes}) => {
  return (
    <div className='navigation'>
      {routes.map(block => {
        return <NavBlock block={block} />
      })
    }
    </div>
  )
}

Navigation.propTypes = {
  routes: React.PropTypes.array
}

export default Navigation
