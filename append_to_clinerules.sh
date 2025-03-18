#!/bin/bash

# .clinerules ファイルをクリア
> .clinerules

# .cline/ ディレクトリ内のマークダウンファイルを順番に処理
files=(
  ".cline/00-basic.md"
  ".cline/01-project.md"
  ".cline/_git.md"
  ".cline/coding.md"
  ".cline/directory-patterns.md"
  ".cline/react-design.md"
  ".cline/react-practices.md"
  ".cline/typescrpt.md"
)

# 各ファイルを .clinerules に追記
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "追記中: $file"
    cat "$file" >> .clinerules
    echo -e "\n" >> .clinerules  # ファイル間に空行を追加
  else
    echo "ファイルが見つかりません: $file"
  fi
done

echo "完了しました。.clinerules ファイルが更新されました。"
