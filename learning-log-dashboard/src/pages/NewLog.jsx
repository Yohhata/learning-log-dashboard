import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NewLog(){
    useDocumentTitle("新規記録追加");
    const navigate =useNavigate();

    const [logs,setLogs]=useLocalStorage("learning-logs",[]);

    const [title,setTitle]=useState("");
    const [category, setCategory] = useState("React");
    const [minutes, setMinutes] = useState(0);

    const handleSubmit = (e) => {
    e.preventDefault(); 

   
    if (!title) {
      alert("タイトルを入力してください");
      return;
    }

    const newLog = {
      id: Date.now().toString(), 
      title,
      category,
      minutes,
      date: new Date().toISOString().split('T')[0],
      status: "done",
      favorite:false
    };

    setLogs([...logs,newLog]);

    
    alert("保存しました！");
    navigate("/logs"); 
  };

  return (
    <div style={{ 
    maxWidth: '500px', 
    margin: '40px auto', 
    padding: '30px', 
    backgroundColor: '#1e1e1e', 
    borderRadius: '16px', 
    border: '1px solid #333',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
  }}>
    <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🆕 新規記録を追加</h1>
    
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>学習タイトル</label>
        <input 
          type="text" 
          placeholder="例: ReactのHooksを学ぶ"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#000', color: '#fff' }} 
        />
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>カテゴリ</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#000', color: '#fff' }}
          >
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Git">Git</option>
          </select>
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>学習時間 (分)</label>
          <input 
            type="number" 
            value={minutes} 
            onChange={(e) => setMinutes(e.target.value)} 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#000', color: '#fff' }} 
          />
        </div>
      </div>

      <button 
        type="submit" 
        style={{ 
          marginTop: '10px',
          padding: '15px', 
          borderRadius: '8px', 
          border: 'none', 
          backgroundColor: '#0088FE', 
          color: 'white', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        記録を保存する
      </button>
    </form>
  </div>
  );



}