# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#  学習統計ダッシュボード (Learning Log Dashboard)

日々の学習内容を記録し、カテゴリーごとに学習比率を可視化するためのアプリケーションです。
React 19 と Recharts を活用し、モダンなダークモードUIで設計しました。

##  特徴
- **統計ダッシュボード**: 学習比率を円グラフで可視化し、合計時間や完了件数を表示します。
- **サイドバーナビゲーション**: 画面遷移がスムーズなモダンなレイアウトを採用。
- **リアルタイム検索**: URLのクエリパラメータと連動した検索機能。
- **データの永続化**: `localStorage` を使用しているため、ブラウザを閉じてもデータが残ります。
- **React 19 対応**: `recharts@alpha` を導入し、最新のReact環境で動作を安定させています。

##  使用技術
- **Core**: React 19 (Vite)
- **Routing**: React Router v7
- **Charts**: Recharts (@alpha version)
- **Storage**: Custom Hook (`useLocalStorage`)

##  インストールと実行方法

1. **依存関係のインストール**
   ```bash
   npm install