import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PieChart,Pie,Cell,ResponsiveContainer,Legend,Tooltip } from "recharts";

export default function Dashboard(){
  useDocumentTitle("統計ダッシュボード");

  const [logs]=useLocalStorage("learning-logs",[]);

  const categoryDataMap=logs.reduce((acc,log)=>{
    const {category, minutes}=log;
    if(!acc[category]) acc[category]=0;
    acc[category]+=Number(minutes||0);
    return acc;
  },{});

  const chartData = Object.keys(categoryDataMap)
    .map(key => ({
      name: key,
      value: Number(categoryDataMap[key]) 
    }))
    .filter(item => item.value > 0);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a29bfe'];

  const totalMinutes=logs.reduce((sum,log) => sum+Number(log.minutes||0),0);

  const completedCount=logs.filter(log=>log.status ==="done").length;
    return (
     <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>📊 学習統計ダッシュボード</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '12px', flex: 1, textAlign: 'center', backgroundColor: '#1e1e1e' }}>
          <h3 style={{ color: '#888', fontSize: '0.9rem' }}>合計学習時間</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>{totalMinutes} <span style={{ fontSize: '1rem' }}>分</span></p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '12px', flex: 1, textAlign: 'center', backgroundColor: '#1e1e1e' }}>
          <h3 style={{ color: '#888', fontSize: '0.9rem' }}>完了した記録</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>{completedCount} <span style={{ fontSize: '1rem' }}>件</span></p>
        </div>
      </div>

      <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '12px', backgroundColor: '#1e1e1e' }}>
        <h3 style={{ marginBottom: '20px' }}>カテゴリー別学習比率</h3>
        {chartData.length > 0 ? (
          <div style={{ width: '100%', height: '350px', minHeight: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>データがありません。記録を追加してください。</p>
        )}
      </div>
    </div>

    );
}