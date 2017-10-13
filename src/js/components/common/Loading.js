import React from 'react'
import PropTypes from 'prop-types'
//import styles from 'Src/styles/components/loading.less'

const Loading = ({ spinning, fullScreen }) => {

  let classNames = 'loadingRoot '
  classNames += !spinning ? 'hidden ' : ''
  classNames += fullScreen ? 'fullScreen' : ''
  return (<div className={classNames}>
    <div className='loadWarpper'>
      <div className='inner' />
      <div className='text' >LOADING</div>
    </div>
  </div>)
}


Loading.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loading