import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const CtaSection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#1E222D] to-[#252A37] relative overflow-hidden"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2962FF]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#26A69A]/10 rounded-full filter blur-3xl"></div>

      {/* 装飾的な要素 - 浮かぶドット */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-[#2962FF]/30 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-[#26A69A]/30 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#EF5350]/30 rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`max-w-4xl mx-auto bg-[#2A2E39] rounded-2xl p-8 md:p-12 border border-[#3A3E49]/30 shadow-2xl relative overflow-hidden transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-20"
          }`}
        >
          {/* 装飾的な要素 */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2962FF]/10 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#26A69A]/10 rounded-full filter blur-xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div
                className={`inline-block bg-[#2962FF]/10 px-4 py-2 rounded-full mb-4 transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-10"
                }`}
              >
                <span className="text-[#2962FF] font-medium text-sm">
                  今すぐ始める
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#D1D4DC] mb-4 transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-10"
                }`}
              >
                今すぐトレード管理を始めましょう
              </h2>
              <p
                className={`text-[#787B86] max-w-2xl mx-auto text-lg transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-10"
                }`}
              >
                無料アカウントですべての機能をお試しいただけます
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 mb-8 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <Link to="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#2962FF] hover:bg-[#2962FF]/90 text-white text-lg px-8 py-6 h-auto w-full sm:w-auto relative overflow-hidden group"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  無料で登録する
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2A2E39] bg-[#1E222D]/80 text-[#D1D4DC] hover:bg-[#2A2E39] text-lg px-8 py-6 h-auto w-full sm:w-auto"
                >
                  ログイン
                </Button>
              </Link>
            </div>

            <div
              className={`flex flex-wrap justify-center gap-8 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#26A69A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[#D1D4DC]">クレジットカード不要</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#26A69A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[#D1D4DC]">30秒で登録完了</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#26A69A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[#D1D4DC]">いつでも解約可能</span>
              </div>
            </div>
          </div>
        </div>

        {/* 追加のCTAセクション */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <p className="text-[#787B86] mb-4">
            すでにアカウントをお持ちですか？
          </p>
          <Link to="/login">
            <Button
              variant="link"
              className="text-[#2962FF] hover:text-[#2962FF]/80"
            >
              ログインしてダッシュボードに移動
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
