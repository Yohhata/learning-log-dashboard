1. State設計

Domain State: 学習記録データ本体。useLocalStorage で永続化。

UI State: ローディング状態 (loading) や検索ワード (searchQuery)。

Derived State: グラフ用の集計データ (chartData)。reduce を用いて元の logs から計算しているため、重複した state を避けている。

2. Custom Hooks

useLocalStorage: データの読み書きと永続化のロジックを分離。

useDocumentTitle: 副作用をカプセル化。

3. Effect と Cleanup

LogList でのタイマー解除や useDocumentTitle でのタイトル復元に cleanup 関数を使用。不要な処理やメモリリークを防いでいる。

4. Router の活用

検索条件を URL (searchParams) に残すことで、ページをリロードしても検索結果が維持されるようにした。