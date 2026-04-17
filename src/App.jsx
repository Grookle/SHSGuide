import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ChatPage from './pages/ChatPage'
import CurriculumPage from './pages/CurriculumPage'
import FAQPage from './pages/FAQPage'
import HomePage from './pages/HomePage'
import RecommendPage from './pages/RecommendPage'
import './shsguide.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="matcher" element={<RecommendPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
