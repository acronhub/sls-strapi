# [Strapi](https://github.com/strapi/strapi) CloudRun

GCP CloudRun + CloudSQL + CloudStorage(Hosting)

---

##  事前準備

- GCP環境構築済み
  - Githubリポジトリ (https://github.com/acronhub/tf-strapi-infra) で構築している
- Githubにシークレット情報を登録済み
  - 上記構築時に出力された内容をシークレットに登録している

## ローカル環境動作

### 共通のネットワークを作成

```bash
docker network create gatsby_network
```

## 起動

```bash
docker-compose up -d
```

## デプロイ

- Githubリポジトリに「release」ブランチとしてプッシュ
