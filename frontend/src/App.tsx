import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollManager } from './components/ScrollManager'
import Dashboard from './pages/Dashboard'
import DownloadsPage from './pages/DownloadsPage'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import { ROUTES } from './data/site'

export default function App() {
  return (
    <>
      <a className="tl-skip-link" href="#main-content">
        Skip to main content
      </a>

      <ScrollManager />
      <Navbar />

      <Routes>
        <Route
          path={ROUTES.home}
          element={
            <main id="main-content">
              <Home />
            </main>
          }
        />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.downloads} element={<DownloadsPage />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signup} element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}
