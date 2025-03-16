import { ArrowDownToLine, BarChart3, Layers } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-gradient-to-br from-[#2A2E39] to-[#252A37] rounded-lg p-6 border border-[#3A3E49]/30 shadow-lg transition-all duration-700 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      } hover:shadow-xl hover:shadow-[#2962FF]/5 hover:translate-y-[-4px] group`}
    >
      <div className="w-14 h-14 bg-[#2962FF]/10 rounded-xl flex items-center justify-center mb-6 text-[#2962FF] group-hover:bg-[#2962FF]/20 transition-all duration-300 group-hover:scale-110 transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#D1D4DC] mb-3 group-hover:text-[#2962FF] transition-colors">
        {title}
      </h3>
      <p className="text-[#787B86] group-hover:text-[#D1D4DC] transition-colors">
        {description}
      </p>
    </div>
  );
};

export const FeaturesSection = () => {
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

  const features = [
    {
      icon: <ArrowDownToLine size={28} strokeWidth={1.5} />,
      title: "簡単データ入力",
      description:
        "最小限の入力でトレードを記録。複雑な計算は自動で行います。スプレッドシートからの解放を実現します。",
    },
    {
      icon: <Layers size={28} strokeWidth={1.5} />,
      title: "ポジション管理",
      description:
        "買い増し・一部売却も自動計算。複雑な取引も簡単に管理できます。平均取得単価も自動で更新されます。",
    },
    {
      icon: <BarChart3 size={28} strokeWidth={1.5} />,
      title: "パフォーマンス分析",
      description:
        "月次サマリーで成績を把握。トレードパターンの分析が容易になります。勝率や平均利益も一目瞭然です。",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#252A37] to-[#1E222D] relative overflow-hidden"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2962FF]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#26A69A]/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="inline-block bg-[#2962FF]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#2962FF] font-medium text-sm">主要機能</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#D1D4DC] mb-4">
            トレード管理を<span className="text-[#2962FF]">シンプル</span>に
          </h2>
          <p className="text-[#787B86] max-w-2xl mx-auto text-lg">
            Trade
            Managerは、トレーダーの日々の作業を効率化するための機能を提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
