import React from 'react'

const ProjectComponent = ({
  projectName,
  projectURL,
  photoUrl,
  fromMonth,
  toMonth,
  shortDescrip,
  key,
}) => {
  return (
    <div key={key}>
      {photoUrl && <img src={photoUrl} />}
      <a href={projectURL}>
        <h2>{projectName}</h2>
      </a>

      <h4
        style={{
          textTransform: 'uppercase',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: 500,
          marginBottom: 5,
        }}
      >
        <span>
          {fromMonth} - {toMonth ? toMonth : 'Present'}
        </span>
      </h4>
      <div>{shortDescrip}</div>
    </div>
  )
}
export default ProjectComponent
