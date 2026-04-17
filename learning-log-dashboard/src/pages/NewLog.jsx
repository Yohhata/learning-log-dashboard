import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function NewLog(){
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
    <div style={{ padding: '20px' }}>
      <h1>新規学習記録の追加</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
        <div>
          <label>タイトル: </label><br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%' }} />
        </div>
        <div>
          <label>カテゴリ: </label><br />
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%' }}>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Git">Git</option>
          </select>
        </div>
        <div>
          <label>学習時間 (分): </label><br />
          <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          保存する
        </button>
      </form>
    </div>
  );



}