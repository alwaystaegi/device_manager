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

6. etc...)

# CRUD

## `Create`

우선 prisma등 대부분의 db가 클라이언트단 즉 CSR에서는 사용이 불가함. 이게 가능하다면 아마 해킹이 매우 쉬워질 것이다.
그러하므로 create는 서버단에서 이루어져야한다. 이 프로젝트는 api폴더의 adduser(2022-09-26.04.43 커밋 기준)에서 생성을 하였다.

## `Read`

fetch("/api/alluser").then((res) => {
res.json().then((json)}

fetch("")==> 펫치 안의 주소를 가져옴. 후 then((res)=>{})로 콜백함수를 사용하면 res에 가져온 결과를 넣어준다. 이하 동일

# npm관련

1. npm: 패키지를 설치하는 명령어
2. npx: 패키지를 실행하는 명령어

# prisma CRUD 관련 자료

https://www.prisma.io/docs/concepts/components/prisma-client/crud

# 데이터 관련

만약 변수와 그 값?? 뭐라해야할지 모르겠는데... users:users 이렇게 둘이 같으면 users로만 입력해도 사용가능하다... 뿅 ("pages/api/alluser:25")

prisma를 이용한 데이터 타입 지정시

A(장치) B(장치의 기타 데이터들)을 연관시킨다?라고 한다면 A에서 Bs B[] 이렇게 선언을 할것이다...
그러면 자동으로 B는 A와 연관시킬 id를 구하고 한다//...ㅠㅠ

# typescript 관련

만약 타입스크립트의 적용을 잠시 우회하고 싶다라고 한다면 (자바 스크립트처럼) `//@ts-ignore`를 통해 우회할수 있다. 다만 급할 때에만 사용할 것(개발 과정에서만 사용하기... 배포할때도 사용한다면 크게 혼날 것.)
