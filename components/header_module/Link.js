import { withRouter } from 'next/router'
import Link from 'next/Link'
import React, {Children} from 'react'

const activeLink = ({router, children, ...props}) => {
  const child = Children.only(children)

  let className = child.props.className || null

  let asPath = router.asPath
  let pName = router.pathname
  let pathName = pName !== asPath ? asPath : pName
  let href
  if (typeof(props.href) !== 'object') {
    href =  props.href
  } else {
    let link =  props.href
    href = link.pathname + '/' + link.query.id
  }

  if (pathName === href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim()
  }
  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, {className})}</Link>
}

export default withRouter(activeLink)
