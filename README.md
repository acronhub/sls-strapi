# [Strapi](https://github.com/strapi/strapi) コンテナ

![Strapi](https://cldup.com/7umchwdUBh.png)

---

##  事前準備

### 共通のネットワークを作成

```bash
docker network create gatsby_network
```

### ネットワークの確認

```bash
docker network ls
```

## 環境構築

```bash
docker-compose run --rm strapi yarn install
```

## 起動

```bash
docker-compose up -d
```


