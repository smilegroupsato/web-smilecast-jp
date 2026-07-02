# web-smilecast-jp

SMC株式会社Webサイトの公開用リソース正本リポジトリ。

## 公開対象

- ドメイン: `smilecast.jp`
- 管理: Value Domain
- 公開対象ディレクトリ: `site/`

## GitHub Actions デプロイ

`.github/workflows/deploy.yml` で、`site/` 配下を Value Domain 系レンタルサーバーへ FTP / FTPS デプロイする。

### Actions variables

| Name | Example |
| --- | --- |
| `DEPLOY_ENABLED` | `true` |
| `LOCAL_DIR` | `./site/` |
| `REMOTE_DIR` | サーバー側公開ディレクトリ |
| `VALUE_SERVER_FTP_PORT` | `21` |
| `VALUE_SERVER_FTP_PROTOCOL` | `ftps` |

### Actions secrets

| Name | Value |
| --- | --- |
| `VALUE_SERVER_FTP_HOST` | FTP/FTPSホスト名 |
| `VALUE_SERVER_FTP_USER` | FTPユーザー名 |
| `VALUE_SERVER_FTP_PASSWORD` | FTPパスワード |

`DEPLOY_ENABLED` を `true` にするまで、push時のデプロイジョブはスキップされる。
