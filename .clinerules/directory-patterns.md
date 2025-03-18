## ディレクトリ配置規則

```
.clinerules      # プロンプト
docs/            # ドキュメント置き場
backend/*        # Laravelで構成されたアプリケーション
frontend/*       # React+Typescriptで構成されたアプリケーション
```

### frontend/\*

```
/
├── frontend/           # Reactフロントエンドアプリケーション
│   ├── src/            # ソースコード
│   │   ├── components/ # UIコンポーネント
│   │   ├── features/   # 機能モジュール
│   │   ├── apis/       # API連携
│   │   ├── hooks/      # カスタムフック
│   │   ├── routes/     # ルーティング
│   │   └── utils/      # ユーティリティ関数
│   └── public/         # 静的ファイル
│
├── backend/            # Laravelバックエンドアプリケーション
│   ├── app/            # アプリケーションコード
│   ├── database/       # マイグレーションとシード
│   ├── routes/         # APIルート定義
│   └── ...
│
└── docs/               # ドキュメント
    ├── 要件定義書.md
    ├── database_design.md
    └── 各画面の詳細設計書
```
