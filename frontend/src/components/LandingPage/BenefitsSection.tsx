import { Check, Shield, Clock, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type BenefitItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const BenefitItem = ({ icon, title, description, delay }: BenefitItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className={`flex items-start p-4 rounded-lg transition-all duration-700 ${
        isVisible
          ? "opacity-100 transform translate-x-0"
          : "opacity-0 transform -translate-x-10"
      } hover:bg-[#2A2E39]/50`}
    >
      <div className="mr-4 mt-1">
        <div className="w-10 h-10 rounded-lg bg-[#2962FF]/10 flex items-center justify-center text-[#2962FF] transition-all duration-300 group-hover:scale-110 transform">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#D1D4DC] mb-2">{title}</h3>
        <p className="text-[#787B86]">{description}</p>
      </div>
    </div>
  );
};

export const BenefitsSection = () => {
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

  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "スプレッドシートからの解放",
      description:
        "複雑な数式や手動計算から解放され、トレード記録に集中できます。データ入力の効率が大幅に向上し、ミスも減少します。",
    },
    {
      icon: <Check size={24} />,
      title: "複雑な売買パターンに対応",
      description:
        "買い増しや一部売却など、複雑な取引パターンも簡単に記録・管理。平均取得単価や実現損益を自動計算するため、常に正確な情報が得られます。",
    },
    {
      icon: <Clock size={24} />,
      title: "パフォーマンス把握の容易さ",
      description:
        "月次・年次のパフォーマンスを自動集計。勝率、平均利益、最大ドローダウンなどの指標を一目で確認でき、投資戦略の改善に役立ちます。",
    },
    {
      icon: <Globe size={24} />,
      title: "どこからでもアクセス可能",
      description:
        "レスポンシブデザインにより、デスクトップからスマートフォンまで、あらゆるデバイスからアクセスできます。外出先でも最新情報を確認できます。",
    },
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#252A37] to-[#1E222D] relative overflow-hidden"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-[#2962FF]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#26A69A]/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div
            className={`md:w-2/5 transition-all duration-700 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="sticky top-24">
              <div className="inline-block bg-[#2962FF]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-[#2962FF] font-medium text-sm">
                  ユーザーメリット
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#D1D4DC] mb-6">
                Trade Managerで
                <br />
                <span className="text-[#2962FF]">得られるメリット</span>
              </h2>
              <p className="text-[#787B86] mb-8 text-lg">
                Trade
                Managerは、トレーダーの日々の作業を効率化し、より良い投資判断をサポートします。
              </p>

              <div className="bg-[#2A2E39]/50 p-6 rounded-lg border border-[#2A2E39] mb-8 transform transition-all hover:shadow-lg hover:shadow-[#2962FF]/5 hover:translate-y-[-4px]">
                <p className="text-[#D1D4DC] italic">
                  「以前はスプレッドシートで管理していましたが、Trade
                  Managerに切り替えてから作業時間が半分になりました。特に複数の銘柄を同時に管理する際の効率が格段に上がりました。」
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-[#2962FF]/20 flex items-center justify-center mr-3">
                    <span className="text-[#2962FF] font-bold">T</span>
                  </div>
                  <div>
                    <p className="text-[#D1D4DC] font-medium">田中 太郎</p>
                    <p className="text-[#787B86] text-sm">個人投資家</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="bg-[#2A2E39] p-3 rounded-lg text-center min-w-[100px]">
                  <div className="text-[#D1D4DC] font-bold text-2xl">50%</div>
                  <div className="text-[#787B86] text-xs">作業時間削減</div>
                </div>
                <div className="bg-[#2A2E39] p-3 rounded-lg text-center min-w-[100px]">
                  <div className="text-[#D1D4DC] font-bold text-2xl">99%</div>
                  <div className="text-[#787B86] text-xs">計算精度</div>
                </div>
                <div className="bg-[#2A2E39] p-3 rounded-lg text-center min-w-[100px]">
                  <div className="text-[#D1D4DC] font-bold text-2xl">24/7</div>
                  <div className="text-[#787B86] text-xs">アクセス可能</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`md:w-3/5 bg-[#2A2E39] rounded-xl p-6 md:p-8 border border-[#3A3E49]/30 shadow-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={index * 200}
                />
              ))}
            </div>

            <div
              className={`mt-8 p-6 bg-[#1E222D] rounded-lg border border-[#2A2E39] transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <h3 className="text-xl font-bold text-[#D1D4DC] mb-4 flex items-center">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                よくある質問
              </h3>

              <div className="space-y-4 mt-4">
                <div className="border-b border-[#2A2E39] pb-4">
                  <h4 className="text-[#D1D4DC] font-medium mb-2">
                    利用料金はかかりますか？
                  </h4>
                  <p className="text-[#787B86]">
                    いいえ、Trade
                    Managerは完全無料でご利用いただけます。すべての機能を無料でお使いいただけます。
                  </p>
                </div>
                <div className="border-b border-[#2A2E39] pb-4">
                  <h4 className="text-[#D1D4DC] font-medium mb-2">
                    どのような投資商品に対応していますか？
                  </h4>
                  <p className="text-[#787B86]">
                    現在は株式投資のみに対応しています。将来的には他の投資商品にも対応する予定です。
                  </p>
                </div>
                <div>
                  <h4 className="text-[#D1D4DC] font-medium mb-2">
                    スマートフォンでも利用できますか？
                  </h4>
                  <p className="text-[#787B86]">
                    はい、レスポンシブデザインを採用しているため、スマートフォンやタブレットなど、あらゆるデバイスからアクセスできます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
