import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from 'src/js/components/common/Loading'
export default class Page extends Component {
  render () {
    const { className, children, loading = false, inner = false } = this.props
    const loadingStyle = {
      minHeight: 'calc(100vh - 65px)',
      // overflowX: 'hidden',
      padding: '0 15px'
    }
    return (
      <div
        className={className ? className : ''}
        style={loadingStyle}
      >
        {loading ? <Loading spinning /> : ''}
        {children}
      </div>
    )
  }
}


Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  inner: PropTypes.bool,
}