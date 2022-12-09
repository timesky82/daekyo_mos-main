# 대교 MOS

대교 MOS Frontend Framework


# nodejs 최신 버전 설치
[노드 다운로드](https://nodejs.org/ko/download/).

# yarn 설치

```bash
npm install -g yarn
```

# Dependencies 설치

```bash
yarn
```

## 개발 모드 시작 (hot-code reloading, error reporting, etc.)

```bash
yarn dev
```

## Lint 파일

```bash
yarn lint
```

### 파일 포맷

```bash
yarn format
```

## Production 필드

```bash
yarn build
```

## Quasar 설정

[quasar.config.js 설정](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

# 라우터

## priority

오름차순 정렬

## mete.roles

- non-empty array : 권한 필요
- empty array [] : 로그인 필요
- null or net : 로그인 없이 접근 가능

# 참고

[quasar](https://quasar.dev/)
