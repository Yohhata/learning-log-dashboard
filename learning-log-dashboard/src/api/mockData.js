// src/api/mockData.js
export const mockLogs = [
  {
    id: "log-001",
    title: "React Hooks 復習",
    category: "React",
    date: "2026-04-15",
    minutes: 90,
    status: "done",
    memo: "useStateとuseEffectの基本を理解した。",
    favorite: true,
  },
  {
    id: "log-002",
    title: "CSS Gridの練習",
    category: "CSS",
    date: "2026-04-16",
    minutes: 45,
    status: "doing",
    memo: "レイアウト構築が楽になった。",
    favorite: false,
  },
];
export const fetchLogs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockLogs);
    }, 1000);
  });
};