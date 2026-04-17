import { useState, useEffect } from 'react';
import { fetchLogs } from '../api/mockData';

export default function LogList() {
  
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    document.title="学習記録一覧 | Learning Log Dashboard";
    const getLogs = async () => {
      try {
        const data = await fetchLogs(); 
        setLogs(data);
      } finally {
        setLoading(false); 
      }
    };
    loadData();
  }, []); 

  if (loading) return <div>データを読み込み中...</div>;

  return (
    <div style={{padding:'20px'}}>
      <h1>学習記録一覧</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {logs.length === 0 ? (
          <p>記録がありません。</p> // empty stateの考慮 [cite: 26]
        ) : (
          logs.map((log) => (
            <div key={log.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{log.title}</h3>
                {log.favorite && <span>⭐</span>}
              </div>
              <p>カテゴリ: {log.category} | 時間: {log.minutes}分</p>
              <p>日付: {log.date} | ステータス: {log.status}</p>
            </div>
          ))
        )}
      </div>
    </div>

  );
}