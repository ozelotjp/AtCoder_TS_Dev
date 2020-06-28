# AtCoder_TS_Dev

AtCoderの開発環境をTypeScriptで整えてVSCodeで動かせるやつ。

恐らくどこかのタイミングでC++とかに変えるんだろうなぁ…。

## 環境構築

- VSCodeでディレクトリを開き `Remote-Containers: Reopen in Container` を選択
- `yarn run acc login` コマンドを実行してログイン

## 問題のダウンロード

- 推奨は `yarn run new コンテストID`
- または `yarn run acc new --force --template typescript`

## 解答のチェック

- ソースコードを開いた状態で <kbd>F5</kbd> を押してください

## 解答の提出

- 手動でコピペ（本当は `acc submit` で提出できるはずだが、ログインしていてもログインエラーが出力される…）
