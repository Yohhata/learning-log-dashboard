import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LogList from './pages/LogList';
function App(){
  return (
    <BrowserRouter>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <nav>
          <Link to="/">ダッシュボード</Link> | 
          <Link to="/logs">一覧</Link> | 
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logs" element={<LogList />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App