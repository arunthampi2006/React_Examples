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
  let chkPath
  if (typeof(props.href) !== 'object') {
    href =  props.href
    chkPath = props.as && asPath === props.as
    chkPath = chkPath ? chkPath : pathName === href
  } else {
    let link =  props.href
    href = link.pathname + '/' + link.query.id

    chkPath = pathName === href
  }

  if ( chkPath && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim()
  }
  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, {className})}</Link>
}

export default withRouter(activeLink)
