import * as React from "react"
import Layout from "../components/layout"
import Title from "../components/title"

const mid = {
  height: '100vh',
  fontWeight: '600',
  fontSize: '2rem',
  display: 'flex',
  flexFlow: 'colum wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Home() {
  return (
    <Layout>
      <Title title='Home | Gurubani' />
      <div style={mid}>
        <div>ਵਾਹਿਗੁਰੂ</div>
      </div>
    </Layout>
  )
}
