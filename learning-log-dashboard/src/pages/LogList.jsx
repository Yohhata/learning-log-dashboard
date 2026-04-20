import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchLogs } from '../api/mockData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function LogList() {
  useDocumentTitle("学習記録一覧");


  const [logs,setLogs] =useLocalStorage("learning-logs",[]);
  const [loading,setLoading]=useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || "";

  useEffect(() => {
    const timer=setTimeout(() => setLoading(false),500);
    return ()=>clearTimeout(timer);
  }, []);

  const filteredLogs = logs.filter(log => 
    log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const handleDelete=(id)=>{
    if(!window.confirm("この記録を消去してもよろしいですか？？"))return;

    const newLog=logs.filter(log=>log.id !== id);

  setLogs(newLog);
  };



  if (loading) return <div>データを読み込み中...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>学習記録一覧</h1>

      {/* 検索入力欄 */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="タイトルやカテゴリで検索..." 
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          {filteredLogs.length} 件見つかりました
        </p>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredLogs.length === 0 ? (
          <p>該当する記録がありません。</p>
        ) : (
          filteredLogs.map((log) => (
            <div key={log.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{log.title}</h3>
                {log.favorite && <span>⭐</span>}
                <button 
          onClick={() => handleDelete(log.id)}
          style={{ 
            marginLeft: '10px', 
            cursor: 'pointer', 
            background: 'none', 
            border: 'none', 
            color: '#ff4d4f' 
          }}
        >
          🗑️ 削除
        </button>
              </div>
              <p>カテゴリ: {log.category} | ステータス: {log.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}