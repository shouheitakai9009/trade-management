import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ページ読み込み後にアニメーションを開始
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-20 bg-gradient-to-b from-[#1E222D] to-[#252A37] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* 背景の装飾要素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2962FF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#26A69A]/5 rounded-full filter blur-3xl"></div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            className={`md:w-1/2 mb-8 md:mb-0 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block bg-[#2962FF]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#2962FF] font-medium text-sm">
                トレード管理を効率化
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D1D4DC] leading-tight mb-6">
              株式トレード管理を
              <br className="hidden sm:block md:hidden" />
              <span className="text-[#2962FF] relative">
                シンプル
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#2962FF]/20 -z-10"></span>
              </span>
              に、効率的に
            </h1>
            <p className="text-xl text-[#D1D4DC] mb-4 max-w-lg">
              複雑な売買パターンも最小限の入力で管理。月次パフォーマンスを一目で把握。
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center text-[#D1D4DC] bg-[#2A2E39]/50 p-3 rounded-lg transform transition-all hover:translate-x-1 hover:bg-[#2A2E39]">
                <span className="text-[#26A69A] mr-3 bg-[#26A69A]/10 p-1 rounded-full">
                  ✓
                </span>
                複雑な売買パターンも最小限の入力で管理
              </li>
              <li className="flex items-center text-[#D1D4DC] bg-[#2A2E39]/50 p-3 rounded-lg transform transition-all hover:translate-x-1 hover:bg-[#2A2E39]">
                <span className="text-[#26A69A] mr-3 bg-[#26A69A]/10 p-1 rounded-full">
                  ✓
                </span>
                月次パフォーマンスを自動計算でグラフ化
              </li>
              <li className="flex items-center text-[#D1D4DC] bg-[#2A2E39]/50 p-3 rounded-lg transform transition-all hover:translate-x-1 hover:bg-[#2A2E39]">
                <span className="text-[#26A69A] mr-3 bg-[#26A69A]/10 p-1 rounded-full">
                  ✓
                </span>
                銘柄ごとの損益を一目で把握
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-[#2962FF] hover:bg-[#2962FF]/90 text-white text-lg px-8 py-6 h-auto relative overflow-hidden group w-full sm:w-auto"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  今すぐ無料で始める
                </Button>
              </Link>
            </div>
            <p className="text-sm text-[#787B86] mt-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              登録は30秒で完了。クレジットカードは不要です。
            </p>
          </div>
          <div
            className={`md:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* ポジション管理画面のモックアップ */}
              <div className="w-full h-auto bg-[#2A2E39] rounded-lg overflow-hidden shadow-2xl relative p-4 border border-[#3A3E49] transform transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(41,98,255,0.15)]">
                {/* ヘッダー部分 */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[#D1D4DC] font-semibold text-lg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#2962FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    ポジション管理
                  </div>
                  <div className="text-[#787B86] text-sm bg-[#1E222D] px-3 py-1 rounded-full">
                    更新: 2025/03/16
                  </div>
                </div>

                {/* ポジション一覧テーブル */}
                <div className="bg-[#1E222D] rounded-md p-3 mb-4 border border-[#2A2E39]/50">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#2A2E39]">
                        <th className="text-left py-2 text-[#787B86] font-medium text-sm">
                          銘柄
                        </th>
                        <th className="text-right py-2 text-[#787B86] font-medium text-sm">
                          数量
                        </th>
                        <th className="text-right py-2 text-[#787B86] font-medium text-sm">
                          平均取得価格
                        </th>
                        <th className="text-right py-2 text-[#787B86] font-medium text-sm">
                          現在価格
                        </th>
                        <th className="text-right py-2 text-[#787B86] font-medium text-sm">
                          損益
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#2A2E39]/50 hover:bg-[#2A2E39]/20 transition-colors">
                        <td className="py-3 text-[#D1D4DC] font-medium">
                          AAPL
                        </td>
                        <td className="py-3 text-right text-[#D1D4DC]">25</td>
                        <td className="py-3 text-right text-[#D1D4DC]">
                          ¥24,850
                        </td>
                        <td className="py-3 text-right text-[#D1D4DC]">
                          ¥26,120
                        </td>
                        <td className="py-3 text-right text-[#26A69A] font-medium">
                          +5.2%
                        </td>
                      </tr>
                      <tr className="border-b border-[#2A2E39]/50 hover:bg-[#2A2E39]/20 transition-colors">
                        <td className="py-3 text-[#D1D4DC] font-medium">
                          MSFT
                        </td>
                        <td className="py-3 text-right text-[#D1D4DC]">15</td>
                        <td className="py-3 text-right text-[#D1D4DC]">
                          ¥42,300
                        </td>
                        <td className="py-3 text-right text-[#D1D4DC]">
                          ¥43,910
                        </td>
                        <td className="py-3 text-right text-[#26A69A] font-medium">
                          +3.8%
                        </td>
                      </tr>
                      <tr className="hover:bg-[#2A2E39]/20 transition-colors">
                        <td className="py-3 text-[#D1D4DC] font-medium">
                          GOOGL
                        </td>
                        <td className="py-3 text-right text-[#D1D4DC]">8</td>
                        <td className="py-3 text-right text-[#D1D4DC]">
                          ¥18,750
                        </td>
                        <td className="py-3 text-right text-[#D1D4DC]">
                          ¥18,356
                        </td>
                        <td className="py-3 text-right text-[#EF5350] font-medium">
                          -2.1%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 取引履歴セクション */}
                <div className="bg-[#1E222D] rounded-md p-3 border border-[#2A2E39]/50">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[#D1D4DC] font-semibold flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-[#2962FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      最近の取引
                    </div>
                    <div className="text-[#2962FF] text-sm cursor-pointer hover:underline flex items-center">
                      すべて表示
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-[#2A2E39]/50 rounded hover:bg-[#2A2E39] transition-colors">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#26A69A]/20 flex items-center justify-center mr-2">
                          <span className="text-[#26A69A] text-xs">B</span>
                        </div>
                        <div className="text-[#D1D4DC] font-medium">AAPL</div>
                      </div>
                      <div className="text-[#D1D4DC]">5株 @ ¥25,200</div>
                      <div className="text-[#787B86] text-sm">2025/03/15</div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-[#2A2E39]/50 rounded hover:bg-[#2A2E39] transition-colors">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#EF5350]/20 flex items-center justify-center mr-2">
                          <span className="text-[#EF5350] text-xs">S</span>
                        </div>
                        <div className="text-[#D1D4DC] font-medium">MSFT</div>
                      </div>
                      <div className="text-[#D1D4DC]">3株 @ ¥43,850</div>
                      <div className="text-[#787B86] text-sm">2025/03/14</div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-[#2A2E39]/50 rounded hover:bg-[#2A2E39] transition-colors">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#26A69A]/20 flex items-center justify-center mr-2">
                          <span className="text-[#26A69A] text-xs">B</span>
                        </div>
                        <div className="text-[#D1D4DC] font-medium">GOOGL</div>
                      </div>
                      <div className="text-[#D1D4DC]">2株 @ ¥18,420</div>
                      <div className="text-[#787B86] text-sm">2025/03/12</div>
                    </div>
                  </div>
                </div>

                {/* 装飾的な要素 */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-[#2962FF]/10 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-[#26A69A]/10 rounded-full filter blur-xl"></div>
              </div>

              {/* 装飾的な要素 - 浮かぶドット */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2962FF]/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#26A69A]/30 rounded-full"></div>
              <div className="absolute top-1/4 -right-6 w-4 h-4 bg-[#EF5350]/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 信頼のバッジ */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-8 items-center py-6 px-4 bg-[#1E222D]/80 backdrop-blur-sm rounded-xl border border-[#2A2E39] transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center">
            <div className="text-[#D1D4DC] font-medium mb-1">4.8/5</div>
            <div className="flex text-[#FFD700]">★★★★★</div>
            <div className="text-[#787B86] text-xs mt-1">ユーザー評価</div>
          </div>
          <div className="text-center">
            <div className="text-[#D1D4DC] font-medium mb-1">10,000+</div>
            <div className="text-[#787B86] text-xs">アクティブユーザー</div>
          </div>
          <div className="text-center">
            <div className="text-[#D1D4DC] font-medium mb-1">99.9%</div>
            <div className="text-[#787B86] text-xs">稼働率</div>
          </div>
          <div className="text-center">
            <div className="text-[#D1D4DC] font-medium mb-1">24/7</div>
            <div className="text-[#787B86] text-xs">サポート</div>
          </div>
        </div>
      </div>
    </section>
  );
};
