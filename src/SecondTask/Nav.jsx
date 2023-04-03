import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
        <div>
        <Link to='/'>Home</Link>
        </div>
        {/* <div> */}
        <button>
        <Link to='/CheckTask'>Task</Link></button>
        {/* </div> */}
    </div>
  )
}

export default Nav