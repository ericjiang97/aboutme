import React from 'react'
import JobHeader from './JobHeader'

const Job = ({ name, url, fromMonth, toMonth, jobTitle, shortDescrip }) => (
  <div>
    <JobHeader
      name={name}
      url={url}
      fromMonth={fromMonth}
      toMonth={toMonth}
      jobTitle={jobTitle}
    />

    <p>{shortDescrip}</p>
  </div>
)

export default Job
