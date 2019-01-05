import React from 'react'
import PropType from 'prop-types'

const style = {
  textTransform: 'uppercase',
  fontFamily: ['Poppins', 'sans-serif'],
  fontWeight: 500,
  marginBottom: 5,
}

const JobHeader = ({ name, url, fromMonth, toMonth, jobTitle }) => {
  return (
    <div>
      <h2>{jobTitle} at </h2>
      <h3
        style={{
          fontFamily: ['Poppins'],
          fontWeight: 300,
        }}
      >
        <span>
          {url ? (
            <a
              href={url}
              target="_blank"
              style={{
                color: '#435a6f',
                textDecoration: 'none',
                ':hover': {
                  color: '#435a6f',
                },
              }}
            >
              {name}
            </a>
          ) : (
            <span>{name}</span>
          )}
        </span>
      </h3>
      <h4 style={style}>
        <span>
          {fromMonth} - {toMonth ? toMonth : 'Present'}
        </span>
      </h4>
    </div>
  )
}

JobHeader.propTypes = {
  name: PropType.string.isRequired,
  url: PropType.string,
  fromMonth: PropType.string.isRequired,
  toMonth: PropType.string,
  jobTitle: PropType.string.isRequired,
}

export default JobHeader
