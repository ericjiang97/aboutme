import React from 'react'

const Intro = ({ sidebar, children, style, sidebarStyle, globalStyle }) => (
  <div style={globalStyle}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        ...style,
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          minWidth: 300,
          ...sidebarStyle,
        }}
      >
        {sidebar}
      </div>
      <div style={{ flex: 2 }}>{children}</div>
    </div>
  </div>
)

export default Intro
