import React from 'react'
import { withRedux } from '../lib/redux'
import Counter from '../components/counter'

const IndexPage = () => {
  return (
    <>
      <Counter />
    </>
  )
}

IndexPage.getInitialProps = ({ reduxStore }) => {
  return {}
}

export default withRedux(IndexPage)
