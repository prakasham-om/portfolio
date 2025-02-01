import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Layout from './components/Layout'
import Footer from './components/Footer'

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
      <>
        <Header isOpen={isOpen} toggleMenu={toggleMenu}  />
        <Layout />
        <Footer />
      </>
  )
}

export default App
