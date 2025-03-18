/**
 * @feature
 * トレード管理機能：
 * - リアルタイム損益計算
 * - ポジション管理（複数通貨対応）
 * - リスク分析ダッシュボード
 * - トレード履歴の詳細表示
 *
 * @dataflow
 * データの流れ：
 * 1. WebSocketで価格データを受信
 * 2. Reduxで状態を管理
 * 3. useMemoで計算結果をキャッシュ
 * 4. 各コンポーネントでデータを表示
 */

import Dashboard from "./components/Dashboard";
import { TradeTable } from "./components/TradeTable";
import { Toaster } from "@/components/ui/sonner";

/**
 * メインアプリケーションコンポーネント
 *
 * @description
 * アプリケーションのルートコンポーネント。以下の要素で構成されています：
 * - Toaster: トースト通知を表示するためのコンポーネント
 * - Dashboard: トレード活動の概要を表示するダッシュボード
 * - TradeTable: トレード履歴を表示するテーブル
 */
function App() {
  return (
    <>
      {/* グローバルトースト通知コンポーネント */}
      <Toaster />
      {/* メインレイアウト: 縦方向のフレックスボックスで要素間に2remの間隔を設定 */}
      <div className="flex flex-col gap-8">
        {/* トレードの概要と分析を表示するダッシュボード */}
        <Dashboard />
        {/* トレード履歴の詳細な一覧を表示するテーブル */}
        <TradeTable />
      </div>
    </>
  );
}

export default App;
