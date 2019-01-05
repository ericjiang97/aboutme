import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import currentRoles from '../data/current.json'
import IntroComponent from '../components/intro'
import Job from '../components/Job'

const SummaryHeadingStyle = {
  fontFamily: 'Poppins',
  fontWeight: 600,
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Eric Jiang`, `lorderikir`, `about`, `resume`]}
    />
    <IntroComponent
      sidebar={
        <img
          src="https://avatars0.githubusercontent.com/u/5687681"
          style={{
            width: '80%',
            maxWidth: 500,
            borderRadius: '100%',
          }}
        />
      }
      sidebarStyle={{
        alignItems: 'center',
      }}
    >
      <h1>Hi I'm Eric</h1>
      <h3 style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
        I build software, love travelling and taking photos
      </h3>
      <p>
        I am currently in my final year finishing my degree in Bachelor of
        Information Technology – Majoring in Computer networks and security at
        Monash University. Though my major is in Computer networks and security,
        I have a passion for writing code and building software.
      </p>
      <p>
        Throughout my university course, I have founded, built a team and have
        developed an enterprise solution for the university – MonPlan. MonPlan
        is a course planning tool which is used by students and support staff at
        Monash University.
      </p>
    </IntroComponent>
    <IntroComponent
      globalStyle={{ backgroundColor: '#FFE400', padding: 10 }}
      sidebar={
        <div>
          <h1
            style={{
              fontFamily: 'Merriweather',
              fontWeight: 600,
            }}
          >
            Experience
          </h1>
        </div>
      }
    >
      <h2 style={SummaryHeadingStyle}>Current</h2>
      {currentRoles.map((role, key) => {
        console.log(role)
        return (
          <div key={key}>
            <Job
              url={role.companyURL}
              name={role.companyName}
              fromMonth={role.fromMonth}
              toMonth={role.toMonth}
              jobTitle={role.jobTitle}
              shortDescrip={role.shortDescrip}
            />
            <hr style={{ color: '#435a6f' }} />
          </div>
        )
      })}
    </IntroComponent>
    <IntroComponent globalStyle={{ padding: 10 }} sidebar={<div />}>
      <h2 style={SummaryHeadingStyle}>Previous</h2>
    </IntroComponent>
  </Layout>
)

export default IndexPage
