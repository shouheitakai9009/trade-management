import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E222D]/90 backdrop-blur-sm border-b border-[#2A2E39]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-[#D1D4DC]">Trade Manager</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-[#D1D4DC] hover:text-[#2962FF] transition-colors"
          >
            機能
          </a>
          <a
            href="#demo"
            className="text-[#D1D4DC] hover:text-[#2962FF] transition-colors"
          >
            使用例
          </a>
          <a
            href="#benefits"
            className="text-[#D1D4DC] hover:text-[#2962FF] transition-colors"
          >
            メリット
          </a>
        </nav>

        <div className="flex space-x-4">
          <Link to="/login">
            <Button
              variant="outline"
              className="text-[#D1D4DC] border-[#2A2E39] bg-transparent hover:bg-[#2A2E39] hover:text-white"
            >
              ログイン
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-[#2962FF] hover:bg-[#2962FF]/90 text-white">
              無料登録
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
