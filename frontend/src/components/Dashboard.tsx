import React, { useState } from "react";
import {
  Home,
  List,
  BarChart2,
  Settings,
  Bell,
  Search,
  Plus,
  ChevronDown,
  TrendingUp,
  Calendar,
  Tag,
  DollarSign,
  Briefcase,
} from "lucide-react";

/**
 * ダッシュボードコンポーネント
 * TradingView風のデザインを適用した株式トレード管理アプリのモックアップ
 */
const Dashboard: React.FC = () => {
  // 表示モード（日付順/銘柄グループ）の状態
  const [viewMode, setViewMode] = useState<"date" | "symbol">("date");

  // モックデータ - トレード一覧
  const trades = [
    {
      id: 1,
      date: "2025/03/15",
      symbol: "トヨタ自動車",
      code: "7203",
      sector: "自動車",
      currentPrice: 2550,
      priceChange: 1.2,
      action: "買い",
      amount: 250000,
      profit: null,
      profitRate: null,
    },
    {
      id: 2,
      date: "2025/03/16",
      symbol: "トヨタ自動車",
      code: "7203",
      sector: "自動車",
      currentPrice: 2550,
      priceChange: 1.2,
      action: "買い",
      amount: 120000,
      profit: null,
      profitRate: null,
    },
    {
      id: 3,
      date: "2025/03/20",
      symbol: "トヨタ自動車",
      code: "7203",
      sector: "自動車",
      currentPrice: 2550,
      priceChange: 1.2,
      action: "売り",
      amount: 130000,
      profit: 6650,
      profitRate: 5.4,
    },
    {
      id: 4,
      date: "2025/03/25",
      symbol: "トヨタ自動車",
      code: "7203",
      sector: "自動車",
      currentPrice: 2550,
      priceChange: 1.2,
      action: "売り",
      amount: 270000,
      profit: 22200,
      profitRate: 9.0,
    },
    {
      id: 5,
      date: "2025/03/10",
      symbol: "ソニーグループ",
      code: "6758",
      sector: "電気機器",
      currentPrice: 13250,
      priceChange: -0.5,
      action: "買い",
      amount: 180000,
      profit: null,
      profitRate: null,
    },
    {
      id: 6,
      date: "2025/03/22",
      symbol: "ソニーグループ",
      code: "6758",
      sector: "電気機器",
      currentPrice: 13250,
      priceChange: -0.5,
      action: "売り",
      amount: 195000,
      profit: 15000,
      profitRate: 8.3,
    },
  ];

  // モックデータ - アクティブポジション
  const activePositions = [
    {
      symbol: "任天堂",
      code: "7974",
      sector: "その他製品",
      currentPrice: 6700,
      priceChange: 2.1,
      buyAmount: 320000,
      currentValue: 335000,
      unrealizedProfit: 15000,
      unrealizedProfitRate: 4.7,
    },
    {
      symbol: "ソフトバンクグループ",
      code: "9984",
      sector: "情報・通信",
      currentPrice: 6150,
      priceChange: -1.2,
      buyAmount: 210000,
      currentValue: 205000,
      unrealizedProfit: -5000,
      unrealizedProfitRate: -2.4,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#1E222D] text-[#D1D4DC]">
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-6 py-3 bg-[#131722] border-b border-[#363A45]">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">Trade Manager</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="銘柄検索..."
              className="px-4 py-1 bg-[#2A2E39] border border-[#363A45] rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#2962FF]"
            />
            <Search className="absolute right-2 top-1.5 h-4 w-4 text-[#787B86]" />
          </div>
          <button className="p-2 text-[#787B86] hover:text-[#D1D4DC]">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#2962FF] flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* サイドバー */}
        <aside className="w-56 bg-[#131722] border-r border-[#363A45] flex flex-col">
          <nav className="flex-1 px-2 py-4 space-y-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-[#D1D4DC] bg-[#2A2E39] rounded"
            >
              <Home className="h-5 w-5 mr-3" />
              ダッシュボード
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-[#787B86] hover:text-[#D1D4DC] hover:bg-[#2A2E39] rounded"
            >
              <List className="h-5 w-5 mr-3" />
              トレード一覧
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-[#787B86] hover:text-[#D1D4DC] hover:bg-[#2A2E39] rounded"
            >
              <BarChart2 className="h-5 w-5 mr-3" />
              月次サマリー
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-[#787B86] hover:text-[#D1D4DC] hover:bg-[#2A2E39] rounded"
            >
              <Settings className="h-5 w-5 mr-3" />
              設定
            </a>
          </nav>
        </aside>

        {/* メインコンテンツ */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* 概要カード */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-[#2A2E39] p-4 rounded border border-[#363A45]">
              <h3 className="text-sm font-medium text-[#787B86] mb-2">
                今月の実現損益
              </h3>
              <p className="text-2xl font-mono font-bold text-[#26A69A]">
                +¥43,850
              </p>
              <p className="text-xs text-[#26A69A] mt-1">
                <span className="inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  15.2% 先月比
                </span>
              </p>
            </div>
            <div className="bg-[#2A2E39] p-4 rounded border border-[#363A45]">
              <h3 className="text-sm font-medium text-[#787B86] mb-2">
                未実現損益
              </h3>
              <p className="text-2xl font-mono font-bold text-[#26A69A]">
                +¥10,000
              </p>
              <p className="text-xs text-[#787B86] mt-1">2銘柄保有中</p>
            </div>
            <div className="bg-[#2A2E39] p-4 rounded border border-[#363A45]">
              <h3 className="text-sm font-medium text-[#787B86] mb-2">
                月間平均利益率
              </h3>
              <p className="text-2xl font-mono font-bold text-[#26A69A]">
                7.6%
              </p>
              <p className="text-xs text-[#787B86] mt-1">最大: 9.0%</p>
            </div>
          </div>

          {/* トレード一覧 */}
          <div className="bg-[#2A2E39] rounded border border-[#363A45] mb-6">
            <div className="flex items-center justify-between p-4 border-b border-[#363A45]">
              <h2 className="text-lg font-medium">トレード一覧（2025年3月）</h2>
              <div className="flex items-center space-x-4">
                <div className="flex bg-[#1E222D] rounded overflow-hidden">
                  <button
                    className={`px-3 py-1 text-sm flex items-center ${
                      viewMode === "date"
                        ? "bg-[#2962FF] text-white"
                        : "text-[#787B86]"
                    }`}
                    onClick={() => setViewMode("date")}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    日付順
                  </button>
                  <button
                    className={`px-3 py-1 text-sm flex items-center ${
                      viewMode === "symbol"
                        ? "bg-[#2962FF] text-white"
                        : "text-[#787B86]"
                    }`}
                    onClick={() => setViewMode("symbol")}
                  >
                    <Tag className="h-4 w-4 mr-1" />
                    銘柄グループ
                  </button>
                </div>
                <button className="bg-[#2962FF] text-white px-3 py-1 rounded text-sm flex items-center">
                  <Plus className="h-4 w-4 mr-1" />
                  新規トレード
                </button>
              </div>
            </div>

            {viewMode === "date" ? (
              // 日付順表示
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-[#787B86] text-xs border-b border-[#363A45]">
                      <th className="px-4 py-3 text-left">日付</th>
                      <th className="px-4 py-3 text-left">銘柄</th>
                      <th className="px-4 py-3 text-left">売買</th>
                      <th className="px-4 py-3 text-right">金額</th>
                      <th className="px-4 py-3 text-right">損益</th>
                      <th className="px-4 py-3 text-right">損益率</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map((trade) => (
                      <tr
                        key={trade.id}
                        className="border-b border-[#363A45] hover:bg-[#363A45]"
                      >
                        <td className="px-4 py-3 text-sm">{trade.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <div className="font-medium">{trade.symbol}</div>
                              <div className="text-xs text-[#787B86] flex items-center">
                                <span className="mr-2">{trade.code}</span>
                                <Briefcase className="h-3 w-3 mr-1 text-[#787B86]" />
                                <span>{trade.sector}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 flex items-center">
                            <DollarSign className="h-3 w-3 mr-1 text-[#787B86]" />
                            <span className="text-xs mr-2">
                              ¥{trade.currentPrice.toLocaleString()}
                            </span>
                            <span
                              className={`text-xs ${
                                trade.priceChange >= 0
                                  ? "text-[#26A69A]"
                                  : "text-[#EF5350]"
                              }`}
                            >
                              {trade.priceChange >= 0 ? "+" : ""}
                              {trade.priceChange}%
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded text-sm font-medium ${
                              trade.action === "買い"
                                ? "bg-[#132742] text-[#2962FF] border border-[#2962FF]"
                                : "bg-[#2a1c1c] text-[#EF5350] border border-[#EF5350]"
                            }`}
                          >
                            {trade.action}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-mono">
                          ¥{trade.amount.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-right font-mono">
                          {trade.profit !== null ? (
                            <span
                              className={
                                trade.profit >= 0
                                  ? "text-[#26A69A]"
                                  : "text-[#EF5350]"
                              }
                            >
                              {trade.profit >= 0 ? "+" : ""}¥
                              {trade.profit.toLocaleString()}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="px-4 py-3 text-right font-mono">
                          {trade.profitRate !== null ? (
                            <span
                              className={
                                trade.profitRate >= 0
                                  ? "text-[#26A69A]"
                                  : "text-[#EF5350]"
                              }
                            >
                              {trade.profitRate >= 0 ? "+" : ""}
                              {trade.profitRate}%
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // 銘柄グループ表示
              <div className="p-4 space-y-4">
                {/* トヨタ自動車グループ */}
                <div className="border border-[#363A45] rounded overflow-hidden">
                  <div className="flex items-center justify-between bg-[#1E222D] px-4 py-3 cursor-pointer">
                    <div className="flex items-center">
                      <ChevronDown className="h-5 w-5 mr-2 text-[#787B86]" />
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">
                            トヨタ自動車 (7203)
                          </span>
                          <Briefcase className="h-3 w-3 mr-1 text-[#787B86]" />
                          <span className="text-xs text-[#787B86]">自動車</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-[#787B86] mr-2">
                            ポジション合計:
                          </span>
                          <span className="text-sm font-medium text-[#26A69A]">
                            +¥28,850 (+7.8%)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm text-[#787B86]">
                        4件のトレード
                      </div>
                      <div className="text-xs text-[#787B86] mt-1">
                        現在値: ¥2,550 (+1.2%)
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2A2E39] p-4">
                    <div className="relative pl-8 border-l-2 border-[#363A45] space-y-4">
                      {/* タイムライン表示 */}
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1 w-4 h-4 rounded-full bg-[#132742] border-2 border-[#2962FF]"></div>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm">2025/03/15 買い</div>
                            <div className="text-xs text-[#787B86]">
                              ¥250,000
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1 w-4 h-4 rounded-full bg-[#132742] border-2 border-[#2962FF]"></div>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm">2025/03/16 買い</div>
                            <div className="text-xs text-[#787B86]">
                              ¥120,000
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1 w-4 h-4 rounded-full bg-[#2a1c1c] border-2 border-[#EF5350]"></div>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm">2025/03/20 売り</div>
                            <div className="text-xs text-[#787B86]">
                              ¥130,000
                            </div>
                          </div>
                          <div className="text-sm text-[#26A69A]">
                            +¥6,650 (+5.4%)
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1 w-4 h-4 rounded-full bg-[#2a1c1c] border-2 border-[#EF5350]"></div>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm">2025/03/25 売り</div>
                            <div className="text-xs text-[#787B86]">
                              ¥270,000
                            </div>
                          </div>
                          <div className="text-sm text-[#26A69A]">
                            +¥22,200 (+9.0%)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ソニーグループ */}
                <div className="border border-[#363A45] rounded overflow-hidden">
                  <div className="flex items-center justify-between bg-[#1E222D] px-4 py-3 cursor-pointer">
                    <div className="flex items-center">
                      <ChevronDown className="h-5 w-5 mr-2 text-[#787B86]" />
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">
                            ソニーグループ (6758)
                          </span>
                          <Briefcase className="h-3 w-3 mr-1 text-[#787B86]" />
                          <span className="text-xs text-[#787B86]">
                            電気機器
                          </span>
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-[#787B86] mr-2">
                            ポジション合計:
                          </span>
                          <span className="text-sm font-medium text-[#26A69A]">
                            +¥15,000 (+8.3%)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm text-[#787B86]">
                        2件のトレード
                      </div>
                      <div className="text-xs text-[#787B86] mt-1">
                        現在値: ¥13,250 (-0.5%)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* アクティブポジション */}
          <div className="bg-[#2A2E39] rounded border border-[#363A45]">
            <div className="p-4 border-b border-[#363A45]">
              <h2 className="text-lg font-medium">
                アクティブポジション（2025年3月）
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-[#787B86] text-xs border-b border-[#363A45]">
                    <th className="px-4 py-3 text-left">銘柄</th>
                    <th className="px-4 py-3 text-right">取得金額</th>
                    <th className="px-4 py-3 text-right">現在評価額</th>
                    <th className="px-4 py-3 text-right">評価損益</th>
                    <th className="px-4 py-3 text-right">評価損益率</th>
                    <th className="px-4 py-3 text-right">アクション</th>
                  </tr>
                </thead>
                <tbody>
                  {activePositions.map((position, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#363A45] hover:bg-[#363A45]"
                    >
                      <td className="px-4 py-3 text-sm">
                        <div className="font-medium">{position.symbol}</div>
                        <div className="text-xs text-[#787B86] flex items-center">
                          <span className="mr-2">{position.code}</span>
                          <Briefcase className="h-3 w-3 mr-1 text-[#787B86]" />
                          <span>{position.sector}</span>
                        </div>
                        <div className="mt-1 flex items-center">
                          <DollarSign className="h-3 w-3 mr-1 text-[#787B86]" />
                          <span className="text-xs mr-2">
                            ¥{position.currentPrice.toLocaleString()}
                          </span>
                          <span
                            className={`text-xs ${
                              position.priceChange >= 0
                                ? "text-[#26A69A]"
                                : "text-[#EF5350]"
                            }`}
                          >
                            {position.priceChange >= 0 ? "+" : ""}
                            {position.priceChange}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        ¥{position.buyAmount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        ¥{position.currentValue.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        <span
                          className={
                            position.unrealizedProfit >= 0
                              ? "text-[#26A69A]"
                              : "text-[#EF5350]"
                          }
                        >
                          {position.unrealizedProfit >= 0 ? "+" : ""}¥
                          {position.unrealizedProfit.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        <span
                          className={
                            position.unrealizedProfitRate >= 0
                              ? "text-[#26A69A]"
                              : "text-[#EF5350]"
                          }
                        >
                          {position.unrealizedProfitRate >= 0 ? "+" : ""}
                          {position.unrealizedProfitRate}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="bg-[#2a1c1c] text-[#EF5350] px-2 py-1 rounded text-xs">
                          売却
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
