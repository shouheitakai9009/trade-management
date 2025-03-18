import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type TabType = "dashboard" | "trades" | "summary";

type TabButtonProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

const TabButton = ({ active, label, onClick }: TabButtonProps) => (
  <Button
    variant={active ? "default" : "outline"}
    className={`
      ${
        active
          ? "bg-[#2962FF] text-white border-transparent"
          : "bg-transparent text-[#D1D4DC] border-[#2A2E39] hover:bg-[#2A2E39]/50"
      }
      rounded-md px-6 py-2 transition-all duration-300 font-medium
    `}
    onClick={onClick}
  >
    {label}
  </Button>
);

export const DemoSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabContent = {
    dashboard: {
      title: "ダッシュボード",
      description:
        "一目でトレードの状況を把握できるダッシュボード。現在のポジション、月間パフォーマンス、最近のトレードを表示します。重要な情報がすべて集約されているため、投資判断が素早く行えます。",
      imageSrc: "/images/dashboard-screenshot.png",
    },
    trades: {
      title: "トレード一覧",
      description:
        "すべてのトレードを一覧で管理。フィルタリングやソート機能で必要な情報にすぐにアクセスできます。過去の取引履歴を簡単に検索し、トレードパターンを分析することができます。",
      imageSrc: "/trades-demo.png", // 実際の画像に置き換える必要があります
    },
    summary: {
      title: "月次サマリー",
      description:
        "月ごとのパフォーマンスを詳細に分析。勝率、平均利益、最大ドローダウンなどの指標を確認できます。グラフィカルなレポートで、あなたの投資戦略の強みと弱みを視覚的に把握できます。",
      imageSrc: "/summary-demo.png", // 実際の画像に置き換える必要があります
    },
  };

  const currentTab = tabContent[activeTab];

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#1E222D] to-[#252A37] relative overflow-hidden"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#2962FF]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#26A69A]/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="inline-block bg-[#2962FF]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#2962FF] font-medium text-sm">
              使用例デモ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#D1D4DC] mb-4">
            実際の<span className="text-[#2962FF]">画面</span>をご確認ください
          </h2>
          <p className="text-[#787B86] max-w-2xl mx-auto text-lg">
            Trade
            Managerがどのようにトレード管理を効率化するか、実際の画面でご確認ください。
          </p>
        </div>

        <div
          className={`flex justify-center space-x-4 mb-10 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <TabButton
            active={activeTab === "dashboard"}
            label="ダッシュボード"
            onClick={() => setActiveTab("dashboard")}
          />
          <TabButton
            active={activeTab === "trades"}
            label="トレード一覧"
            onClick={() => setActiveTab("trades")}
          />
          <TabButton
            active={activeTab === "summary"}
            label="月次サマリー"
            onClick={() => setActiveTab("summary")}
          />
        </div>

        <div
          className={`bg-[#2A2E39] rounded-lg overflow-hidden shadow-2xl border border-[#3A3E49]/30 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="p-6 md:p-8 border-b border-[#3A3E49]/30">
            <h3 className="text-2xl font-bold text-[#D1D4DC] mb-3 flex items-center">
              {activeTab === "dashboard" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#2962FF]"
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
              )}
              {activeTab === "trades" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#2962FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              )}
              {activeTab === "summary" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#2962FF]"
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
              )}
              {currentTab.title}
            </h3>
            <p className="text-[#787B86] mb-2">{currentTab.description}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-[#2962FF]/10 text-[#2962FF] text-xs px-3 py-1 rounded-full">
                リアルタイム更新
              </span>
              <span className="bg-[#26A69A]/10 text-[#26A69A] text-xs px-3 py-1 rounded-full">
                自動計算
              </span>
              <span className="bg-[#1E222D] text-[#D1D4DC] text-xs px-3 py-1 rounded-full border border-[#3A3E49]">
                カスタマイズ可能
              </span>
            </div>
          </div>
          <div className="relative bg-[#1E222D] overflow-hidden">
            {activeTab === "dashboard" ? (
              // ダッシュボードの実際のスクリーンショット
              <div className="relative">
                <img
                  src={currentTab.imageSrc}
                  alt={`${currentTab.title}のスクリーンショット`}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E222D] to-transparent opacity-20"></div>
              </div>
            ) : (
              // 他のタブのプレースホルダー
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#2962FF]/20 flex items-center justify-center">
                    <span className="text-[#2962FF] text-3xl">📊</span>
                  </div>
                  <p className="text-[#D1D4DC] font-medium text-xl mb-2">
                    {currentTab.title}の画面イメージ
                  </p>
                  <p className="text-[#787B86] max-w-md mx-auto">
                    実際のアプリケーションでは、詳細な{currentTab.title}
                    画面をご利用いただけます。
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-[#2A2E39] border-t border-[#3A3E49]/30 flex justify-between items-center">
            <div className="text-[#787B86] text-sm">
              {activeTab === "dashboard" ? "最終更新: 2025/03/16" : "準備中"}
            </div>
            <Button
              variant="link"
              className="text-[#2962FF] hover:text-[#2962FF]/80 p-0 h-auto"
            >
              詳細を見る
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
            </Button>
          </div>
        </div>

        {/* CTAセクションを削除 */}
      </div>
    </section>
  );
};
