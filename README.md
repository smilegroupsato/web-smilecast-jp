# web-smilecast-jp

SMC株式会社Webサイトの公開用リソース正本リポジトリ。

## 現在の状態

- 状態: 原島さん確認前の初稿
- 公開: 未実施
- 検索エンジン: `noindex` / `robots.txt` でクロール拒否
- 自動デプロイ: `DEPLOY_ENABLED = true` にするまで実行しない

## 公開対象

- ドメイン: `smilecast.jp`
- ドメイン管理: Value Domain
- レンタルサーバー接続先: 未確認
- 公開対象ディレクトリ: `site/`

## 初稿の構成

- `site/index.html`
  - SMCトップページ初稿
- `site/styles.css`
  - PC / スマートフォン対応のスタイル
- `site/script.js`
  - スマートフォンメニュー等
- `site/robots.txt`
  - 公開判断前の検索クロール拒否
- `docs/2026.07.21_01_harashima_review_questions.md`
  - 原島さんとの確認・擦り合わせ項目

## 初稿の前提

現在確認できている次の業務領域を中心に構成している。

1. 通信・インターネット回線の受注後業務
2. 法人向けセールス支援
3. イベント運営・現場対応

働き手は20代中心という現状を踏まえ、若さ、機動力、実行力、清潔感、信頼感をデザインの軸としている。

会社理念、ビジネスモデル、採用したい人物像、詳しい現場内容、取引先名、会社情報などは、原島さんとの確認後に確定する。

## 公開前フロー

1. 初稿を原島さんへ提示する。
2. 会社理念、ビジネスモデル、採用したい人物像、現場内容を確認する。
3. 取引先名・会社情報・信用情報の掲載可否を確認する。
4. 初稿を修正する。
5. 修正版を再確認する。
6. FTP / FTPS接続先とDNSを設定する。
7. 公開判断後に `DEPLOY_ENABLED` を `true` にする。

## GitHub Actions デプロイ

`.github/workflows/deploy.yml` で、`site/` 配下を Value Domain 系レンタルサーバーへ FTP / FTPS デプロイする。

### Actions variables

| Name | Example |
| --- | --- |
| `DEPLOY_ENABLED` | `false`（公開判断後に `true`） |
| `LOCAL_DIR` | `./site/` |
| `REMOTE_DIR` | サーバー側公開ディレクトリ |
| `VALUE_SERVER_FTP_PORT` | `21` |
| `VALUE_SERVER_FTP_PROTOCOL` | `ftps` |

### Actions secrets

| Name | Value |
| --- | --- |
| `VALUE_SERVER_FTP_HOST` | FTP / FTPSホスト名 |
| `VALUE_SERVER_FTP_USER` | FTPユーザー名 |
| `VALUE_SERVER_FTP_PASSWORD` | FTPパスワード |

FTP情報、公開ディレクトリ、DNS接続先は未確認。値が確定するまではデプロイを有効化しない。
