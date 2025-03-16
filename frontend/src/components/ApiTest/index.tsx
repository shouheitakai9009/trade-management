import { useHello } from "../../hooks/queries/useHello";

export const ApiTest = () => {
  const { data, isLoading, error } = useHello();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">API接続テスト</h2>

      {isLoading && (
        <div className="text-center py-4">
          <p className="text-gray-500">読み込み中...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>エラーが発生しました</p>
          <p className="text-sm">{(error as Error).message}</p>
        </div>
      )}

      {data && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          <p className="font-medium">{data.message}</p>
          <p className="text-sm">ステータス: {data.status}</p>
        </div>
      )}
    </div>
  );
};
