import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/badge";

// トレードデータの型定義
interface Trade {
  id: number;
  date: string;
  symbol: string;
  code: string;
  action: "買い" | "売り";
  amount: number;
  profit?: number;
  profitRate?: number;
}

// サンプルデータ
const sampleTrades: Trade[] = [
  {
    id: 1,
    date: "2025/03/01",
    symbol: "トヨタ自動車",
    code: "7203",
    action: "買い",
    amount: 500000,
  },
  {
    id: 2,
    date: "2025/03/05",
    symbol: "ソニーグループ",
    code: "6758",
    action: "買い",
    amount: 300000,
  },
  {
    id: 3,
    date: "2025/03/10",
    symbol: "トヨタ自動車",
    code: "7203",
    action: "売り",
    amount: 550000,
    profit: 50000,
    profitRate: 10.0,
  },
  {
    id: 4,
    date: "2025/03/15",
    symbol: "任天堂",
    code: "7974",
    action: "買い",
    amount: 200000,
  },
];

export function TradeTable() {
  // カラム定義
  const columns: ColumnDef<Trade>[] = [
    {
      accessorKey: "date",
      header: "日付",
    },
    {
      accessorKey: "symbol",
      header: "銘柄",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.symbol}</div>
          <div className="text-sm text-muted-foreground">
            {row.original.code}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: "売買",
      cell: ({ row }) => {
        const action = row.original.action;
        return (
          <Badge variant={action === "買い" ? "default" : "destructive"}>
            {action}
          </Badge>
        );
      },
    },
    {
      accessorKey: "amount",
      header: "金額",
      cell: ({ row }) => {
        return new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(row.original.amount);
      },
    },
    {
      accessorKey: "profit",
      header: "損益",
      cell: ({ row }) => {
        const profit = row.original.profit;
        if (profit === undefined) return "-";

        const formatted = new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
          signDisplay: "always",
        }).format(profit);

        return (
          <div className={profit >= 0 ? "text-green-500" : "text-red-500"}>
            {formatted}
          </div>
        );
      },
    },
    {
      accessorKey: "profitRate",
      header: "損益率",
      cell: ({ row }) => {
        const profitRate = row.original.profitRate;
        if (profitRate === undefined) return "-";

        return (
          <div className={profitRate >= 0 ? "text-green-500" : "text-red-500"}>
            {profitRate.toFixed(2)}%
          </div>
        );
      },
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">トレード一覧</h2>
      <DataTable
        columns={columns}
        data={sampleTrades}
        searchKey="symbol"
        searchPlaceholder="銘柄名で検索..."
      />
    </div>
  );
}
