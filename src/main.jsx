import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'
import Router from './components/router/Router'
import Wrapper from './components/context/Wrapper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
    <Layout>
    <Router/>
    </Layout>
    </Wrapper>
  </React.StrictMode>,
)
