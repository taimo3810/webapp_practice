# Github API を使うアプリケーション（サンプル）

## セットアップ

1. `src/graphql/schema.graphql` に [Github のパブリックスキーマ](https://docs.github.com/ja/graphql/overview/public-schema) を置く

2. `.env.sample` を参考に、適切な `.env` を作成する

3. コマンド実行する

```sh
npm ci
npm run generate # GraphQL API の型定義と API を呼び出すクエリの生成
npm run dev
```

## 開発方法

### GraphQL API を呼び出す Query, Mutation の追加/変更

1. `src/graphql/queries/*.graphql` または `src/graphql/mutations/*.graphql` を追加・編集する
   - [Github の GraphQL API のリファレンス](https://docs.github.com/ja/graphql/reference)を参考にする
1. `npm run generate` を実行する
1. `src/graphql/__generated__/*.ts` に型定義と hooks が追加・編集されていることを確認し、この hooks を利用する

## フォーマット

```sh
npm run fix
# チェックするだけなら npm run lint
```
