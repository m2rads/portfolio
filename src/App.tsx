import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import DisplayLottie from './containers/DisplayLottie'
import Projects from './components/Projects'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import PageNotFound from './components/PageNoteFound'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[600]
    },
    secondary: pink
  },
  typography: {
    fontFamily: 'Lato',
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
       <Menu />
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/home' element={<Home/>}> </Route>
          <Route path='/projects' element={<Projects/>}> </Route>
          <Route path='/blog' element={<Blog/>}> </Route>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/lottie' element={<DisplayLottie/>}> </Route>
          {/* <Route path='*' element={<PageNotFound/>}> </Route> */} 
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App