import Dashboard from "./components/Dashboard";
import { TradeTable } from "./components/TradeTable";
import { Toaster } from "@/components/ui/sonner";

// メインアプリケーションコンポーネント

function App() {
  return (
    <>
      <Toaster />
      <div className="flex flex-col gap-8">
        <Dashboard />
        <TradeTable />
      </div>
    </>
  );
}

export default App;
