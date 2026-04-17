import { useLocalStorage } from "../hooks/useLocalStorage";
export default function Dashboard(){

  const [logs]=useLocalStorage("learning-logs",[]);

  const totalMinutes=logs.reduce((sum,log) => sum+Number(log.minutes),0);

  const completedCount=logs.filter(log=>log.status ==="done").length;
    return (
    <div style={{padding:'20px'}}>
      <h1>📊 ダッシュボード</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
          <h2>合計学習時間</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalMinutes} 分</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
          <h2>完了した記録</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{completedCount} 件</p>
        </div>
      </div>
    </div>

    );
}