import React from 'react'
import PropType from 'prop-types'

const style = {
  textTransform: 'uppercase',
  fontFamily: ['Poppins', 'sans-serif'],
  fontWeight: 500,
  marginBottom: 5,
}

const JobHeader = ({ name, url, fromMonth, toMonth }) => {
  return (
    <h4 style={style}>
      {url ? <a href={url}>{name}</a> : <span>{name}</span>} |{' '}
      <span>
        {fromMonth} - {toMonth ? toMonth : 'Present'}
      </span>
    </h4>
  )
}

JobHeader.propTypes = {
  name: PropType.string.isRequired,
  url: PropType.string,
  fromMonth: PropType.string.isRequired,
  toMonth: PropType.string,
}

export default JobHeader
