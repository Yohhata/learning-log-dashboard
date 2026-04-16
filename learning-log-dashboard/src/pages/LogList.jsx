import { useState, useEffect } from 'react';
import { fetchLogs } from '../api/mockData';

export default function LogList() {
  
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLogs = async () => {
      try {
        const data = await fetchLogs(); 
        setLogs(data);
      } finally {
        setLoading(false); 
      }
    };
    getLogs();
  }, []); 

  if (loading) return <div>データを読み込み中...</div>;

  return (
    <div>
      <h1>学習記録一覧</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {logs.map((log) => (
          <div key={log.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            
            {log.favorite && <span>⭐ </span>}
            <strong style={{ fontSize: '1.2rem' }}>{log.title}</strong>
            <p>カテゴリ: {log.category} | 時間: {log.minutes}分</p>
            <p>日付: {log.date} | ステータス: {log.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}