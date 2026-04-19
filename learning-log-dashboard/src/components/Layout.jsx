import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

    const navItemStyle = (path) => ({
    padding: '12px 20px',
    textDecoration: 'none',
    color: location.pathname === path ? '#fff' : '#888',
    backgroundColor: location.pathname === path ? '#333' : 'transparent',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <nav style={{ 
        width: '250px', 
        borderRight: '1px solid #333', 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        position: 'fixed',
        height: '100vh'
      }}>
        <h2 style={{ padding: '0 20px', marginBottom: '30px', fontSize: '1.2rem' }}>🚀 Study Log App</h2>
        
        <Link to="/" style={navItemStyle("/")}>
          <span>📊</span> ダッシュボード
        </Link>
        <Link to="/logs" style={navItemStyle("/logs")}>
          <span>📋</span> 学習記録一覧
        </Link>
        <Link to="/logs/new" style={navItemStyle("/logs/new")}>
          <span>➕</span> 新規記録追加
        </Link>

        <div style={{ marginTop: 'auto', padding: '20px', color: '#444', fontSize: '0.8rem' }}>
          ver 1.0.0
        </div>
      </nav>

    
      <main style={{ marginLeft: '250px', flex: 1, padding: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}