# create-next-app

```
> npx create-next-app <folder name> --typescript
```

# run this file

```
> npm start dev
```

# tailwind 적용

1. [tailwind설치링크](https://tailwindcss.com/docs/guides/nextjs)
   or

```
> npx create-next-app my-project
```

2.

# prisma

database ORM(Object Relational Mapping)

1. VSCODE `prisma` 확장프로그램 설치

2. `prisma` 패키지 설치

```
> npm -i prisma -D

> npx prisma init
```

`prisma/schemaprisma.prisma`파일이 자동으로 생성

<!-- schemar...??=>  -->

`.env`파일이 생성됨

`gitignore`파일에 .env 추가

3. 프리즈마 초기 설정

```
// .env
database_URL=<내 데이터베이스 주소>
//ex)
```

prisma/schemaprisma.prisma 파일 설정

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
    //postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User{
      id String @id @default(auto()) @map("_id") @db.ObjectId
      name String
      age Int
}
// moder-> Schema의 음... 데이터형태를 저장한다... 라구 생각하면 될듯
//&& id String(타입형)?(물음표...>객체(여기선 id)가 있어도 되고 없어도 된다.) @default(입력안하면 이 안의 함수 or 변수 or 상수가 기본값이 됨)
```

4. 데이터베이스에 프리즈마 저장...?

```
> npx prisma db push
```

`npx prisma db push`의 경우 prisma로 만든 schema형태를 db에 등록하는 일을 함

5. prisma studio 실행 (데이터 베이스 웹 클라이언트)

아래 명령어가 실행중일때만 접속가능 디폴트값 http://localhost:5555

```
> npx prisma studio
> npx prisma generate
```

# npm관련

1. npm: 패키지를 설치하는 명령어
2. npx: 패키지를 실행하는 명령어
