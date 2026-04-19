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
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App