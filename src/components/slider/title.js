import React from 'react'

const Title = ({ text }) => {
  const styles = {
    color: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  }
  return <div className="slide" style={styles}>{text}</div>
}
export default Title