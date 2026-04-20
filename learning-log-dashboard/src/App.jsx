import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LogList from './pages/LogList';
import NewLog from './pages/NewLog';
import Layout from './components/Layout';

const globalStyle = {
  fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
};
function App(){
  return (
    <div style={globalStyle}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="logs" element={<LogList />} />
            <Route path="logs/new" element={<NewLog />} />
            <Route path="logs/:id" element={<div>詳細画面（開発中）</div>} />
            <Route path="logs/:id/edit" element={<div>編集画面（開発中）</div>} />
            <Route path="*" element={<div>404 Not Found - ページが見つかりません</div>} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App