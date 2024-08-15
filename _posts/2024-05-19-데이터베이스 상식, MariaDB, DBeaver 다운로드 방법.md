---
title: 데이터베이스 상식, MariaDB, DBeaver 다운로드 방법
date: 2024-05-19 18:00:00 +09:00
categories: [1. Fundamental, Database]
tags: [Database, Fundamental, DBMS, Transaction, MariaDB, Oracle, MySQL, MongoDB, DBeaver, RDB, RDBMS, Procedure, Package]
---

<!-- 2024-05-16 글 작성 시작; 2024-05-19,2024-07-06 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-05-09,16 강의)</h2>
> - Tool :  
<img alt="SQL" src="https://img.shields.io/badge/-SQL-336791?style=flat-square&logo=sqlite&logoColor=white" />
<img alt="MariaDB" src="https://img.shields.io/badge/-MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" />
<img alt="DBeaver" src="https://img.shields.io/badge/-DBeaver-372923?style=flat-square&logo=dbeaver&logoColor=white" />

<br>

### 🔔 데이터베이스 관련 기술
### 📌 데이터베이스(DB) 개념
> - 데이터베이스는 데이터를 체계적으로 저장하고 관리하는 시스템입니다.
> - DBMS를 이용하여 데이터베이스에 저장된 데이터를 관리할 수 있습니다.
> - 데이터 관리의 예시로는 데이터 저장, 수정, 삭제, 검색 등이 있습니다.
> - 전 세계적으로 많이 사용되는 DBMS는 Oracle, MySQL, MariaDB, MongoDB 등이 있습니다.

### 📌 DBMS
> - DBMS는 Database Management System의 축약어입니다.
> - 즉, DBMS는 데이터의 생성, 수정, 삭제 등의 관리를 지원하는 소프트웨어 시스템입니다.
> - 애플리케이션의 데이터를 관리하기 위해서는 DBMS를 필수적으로 이용해야 됩니다.
> - DBMS는 크게 관계형 데이터베이스(RDBMS)이거나 아닌 것(NoSQL)으로 구분할 수 있습니다.
> - 초보 개발자가 무료로 사용하기 좋은 DBMS의 예시는 MySQL, MariaDB 등이 있습니다.

### 📌 JDBC
> - JDBC는 Java Database Connectivity의 축약어입니다.
> - Java에서의 데이터베이스 연결 및 데이터 관리는 주로 JDBC API를 통합니다.
> - JDBC의 핵심적인 요소는 Connection, Statement, PreparedStatement, ResultSet입니다.
> - Connection 객체를 통해 Java에서 데이터베이스에 연결을 설정합니다.
> - Statement 또는 PreparedStatement 객체를 이용하여 SQL 문을 데이터베이스에 전송합니다.
> - ResultSet 객체를 통해 애플리케이션이 데이터베이스의 데이터를 조회하고 사용할 수 있습니다.
> - 아래는 각 요소의 특징과 간단한 활용 예시 소개입니다.

#### 🚩 Connection
> - Connection 객체는 Java 애플리케이션과 데이터베이스 사이의 연결을 설정합니다.
> - 이 연결은 보통 1:1 구조이며 하나의 Connection은 하나의 사용자 세션에 해당됩니다.
> - 따라서 여러 사용자가 동시에 DB에 접근하려면 사용자마다의 개별 Connection이 필요합니다.

#### 🚩 Statement
> - Statement 객체는 애플리케이션에서 작성한 SQL 문을 연결된 데이터베이스에 전송합니다.
> - Statement 객체에 포함된 SQL 문은 프로그램 실행 시점에 데이터베이스로 전송됩니다.
> - 즉, 프로그램을 실행할 때마다 데이터베이스가 SQL 문을 파싱하고 컴파일합니다.
> - 만일 동적으로 SQL 문을 생성하고 실행하는 기능을 구현할 경우 유용할 수 있습니다.
> - 하지만 해커가 악의적인 SQL 코드를 DB에 전송하는 SQL 인젝션 공격에 취약합니다.

#### 🚩 PreparedStatement
> - PreparedStatement 객체도 프로그램의 SQL 문을 연결된 데이터베이스에 전송합니다.
> - 프로그램의 SQL 문은 PreparedStatement 객체가 생성될 때 데이터베이스 서버로 전송됩니다.
> - 데이터베이스 서버는 전달받은 SQL 문에 대해 파싱 등의 컴파일 과정을 수행합니다.
> - SQL 문을 미리 컴파일하기 때문에 후속 실행 시 Statement 보다 속도가 더 빠릅니다.
> - SQL 문을 미리 컴파일하기 때문에 데이터베이스의 부하를 감축시킨다는 장점도 있습니다.
> - 또한 파라미터화 된 쿼리를 사용하기 때문에 SQL 인젝션 공격으로부터 보다 안전합니다.

#### 🚩 ResultSet
> - ResultSet 객체는 SQL 쿼리의 결과를 저장합니다.
> - 즉, SELECT 쿼리의 결과로 조회 및 반환된 데이터는 JDBC의 ResultSet에 저장됩니다.
> - ResultSet은 테이블 형태로 저장되고 Key(컬럼명) - Value(데이터) 쌍 형태로 관리됩니다.

### 📌 데이터베이스 처리 방식
> - 과거에는 대부분의 비즈니스 로직 처리를 데이터베이스에 전임시켰습니다.
> - 프로시저 및 패키지를 이용하여 복잡한 데이터 연산을 데이터베이스에서 처리하였습니다.
> - 당시 애플리케이션 서버의 역할은 결과 처리 정도였습니다.
> - 그런데 과거와 달리 현재는 컴퓨터 및 네트워크 성능이 향상되었습니다.
> - 그래서 현재는 대부분의 비즈니스 로직 처리를 애플리케이션 서버에 담당시키는 추세입니다.
> - 애플리케이션 서버에서의 로직 처리는 DB 손상 리스크를 감축하고 유연성을 높일 수 있습니다.

#### 🚩 프로시저(Procedure)
> - 프로시저는 실행 가능한 SQL 명령의 집합이며 Java의 메서드와 비슷합니다.
> - 즉, 프로시저는 여러 개의 SQL 명령을 하나의 루틴으로 관리하다가 호출하여 사용합니다.
> - 프로시저는 데이터베이스 서버에서 관리되며 컴파일되고 저장됩니다.
> - 따라서 프로시저를 호출할 때마다 재컴파일 할 필요가 없으며 속도가 빠릅니다.

#### 🚩 패키지(Package)
> - 패키지는 하나의 모듈로, 프로시저와 함수를 그룹화하여 관리하며 Java의 클래스와 비슷합니다.
> - 패키지는 선언 부분(header)과 구현 부분(body)으로 구분됩니다.
> - 프로시저와 패키지는 계좌 이체, 주식 거래와 같은 금융 거래에 효율적입니다.

<br>

### 🔔 데이터베이스 용어
### 📌 스키마(Schema)
> - 스키마란 데이터베이스의 설계도 역할을 하며 데이터베이스 내의 객체와 관계를 정의합니다.
> - 스키마는 데이터베이스의 구조를 설명하는 테이블, 관계, 뷰, 인덱스 등의 정의를 포함합니다.
> - 즉, 데이터베이스를 프로그램 상에 구현시킨 것입니다.

### 📌 쿼리(Query)
> - 데이터베이스의 데이터를 생성, 조회, 수정, 삭제 등 조작할 때 사용하는 명령어입니다.
> - 참고로 SQL (Structured Query Language)이란 데이터 조작하는 데 사용되는 표준 언어입니다.

### 📌 테이블(Table)
> - 데이터베이스에서 데이터가 저장되는 기본적인 형태입니다.
> - 테이블은 열(column)과 행(row)으로 구성됩니다.
> - 각 행의 개별 데이터는 레코드(record)라고 표현됩니다.
> - 각 열은 해당 레코드의 속성(attribute)이라고 표현됩니다.
> - 즉, 테이블에는 데이터의 실제 내용이 담기는 필드입니다.

### 📌 속성(Attribute)
> - 테이블 생성 시 컬럼명, 속성값, not null, comment 등을 입력합니다.
> - 이때 속성값은 테이블에 저장될 레코드를 제한하는 역할을 합니다.
> - 속성값은 열(column)의 이름과 함께 정의됩니다.
> - 참고로 속성값은 Java의 변수 정의 시 사용되는 데이터 타입의 역할을 합니다.

### 📌 레코드(Record)
> - 각각의 열은 행(row)과 교차되며 행에 입력된 실제 값은 레코드라고 표현됩니다.
> - INSERT INTO 문을 이용하여 레코드를 생성시킬 수 있습니다.
> - 각 데이터(레코드)를 추가하고 싶은 컬럼명을 먼저 작성합니다.
> - 이후 VALUES를 이용하여 각 컬럼에 맞는 데이터를 삽입합니다.

### 📌 인스턴스(Instance)
> - 인스턴스는 데이터를 저장하고 처리하는 환경 자체를 의미합니다.
> - 즉, 인스턴스는 데이터베이스 시스템의 운영과 관련된 메모리 및 프로세스의 집합을 의미합니다.
> - 그래서 데이터베이스를 관리하기 위해서는 인스턴스의 생명주기와 작동 방식을 이해해야 됩니다.
> - DBMS의 역할은 서버 컴퓨터의 메모리에 인스턴스를 생성하고 프로세스를 실행시키는 것입니다.
> - 이때 인스턴스는 데이터베이스 서버가 DBMS를 통해 시작될 때 생성됩니다.

### 📌 인덱스(Index)
> - 데이터베이스에서 데이터 검색 속도를 향상시키기 위해 사용되는 자료 구조입니다.
> - 인덱스를 통해 효율적인 데이터 조회가 가능합니다.

### 📌 트랜잭션(Transaction)
> - 트랜잭션의 사전적인 의미는 '업무 처리' 또는 '거래'입니다.
> - 데이터베이스 영역에서의 트랜잭션은 다량의 작업을 단일 작업 단위로 묶는 것을 의미합니다.
> - 트랜잭션의 특징은 모든 작업이 성공적으로 완료되거나 전부 실패 처리되어야 하는 것입니다.
> - 즉, 트랜잭션에는 원자성(atomicity)이 적용되며 중간 단계가 존재할 수 없습니다.
> - 해당 개념은 은행 계좌 이체, 환전 등의 금융 거래, 주문, 재고 관리 등에 적용됩니다.
> - <a href="https://kim-src.github.io/posts/SQL%EC%9D%98-%EC%86%8D%EC%84%B1,-%EC%98%B5%EC%85%98,-%EA%B8%B0%EB%B3%B8%ED%82%A4,-%EC%99%B8%EB%9E%98%ED%82%A4,-%EB%AA%85%EB%A0%B9%EC%96%B4,-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B0%9C%EB%85%90/#-transaction">트랜잭션에 대한 더욱 자세한 설명은 링크된 글</a>에 잘 작성되어 있습니다.

<br>

### 🔔 SQL 명령어
### 📌 SQL 기본 명령어
> - CREATE DATABASE : 새 데이터베이스를 생성합니다.
> - CREATE TABLE : 새 테이블을 생성합니다.
> - INSERT INTO : 새 데이터를 입력합니다.
> - SELECT : 저장된 데이터를 조회합니다.
> - WHERE : 특정 조건을 만족하는 데이터만 조회합니다.
> - GROUP BY : 특정 열을 기준으로 데이터를 그룹화합니다.
> - JOIN : 2개 이상의 테이블에서 조건에 맞는 데이터를 결합하여 조회합니다.
> - 참고로 SQL 명령어는 대/소문자 구분이 없습니다.
> - <a href="https://kim-src.github.io/posts/SQL%EC%9D%98-%EC%86%8D%EC%84%B1,-%EC%98%B5%EC%85%98,-%EA%B8%B0%EB%B3%B8%ED%82%A4,-%EC%99%B8%EB%9E%98%ED%82%A4,-%EB%AA%85%EB%A0%B9%EC%96%B4,-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B0%9C%EB%85%90/#-sql-%EB%AA%85%EB%A0%B9%EC%96%B4">SQL 명령어에 대한 더욱 자세한 설명은 링크된 글</a>에 잘 작성되어 있습니다.

### 📌 SQL 주석
> - 데이터베이스 관리 시 여러 줄의 SQL 명령어를 하나의 명령으로 처리할 때가 있습니다.
> - 한 예시로는 SQL 파싱 과정이 있으며 이때 각 SQL 명령어는 명확하게 구분되어 있어야 됩니다.
> - 그런데 SQL 파싱 과정에서 단일행 주석(--) 사용 시 오류가 발생될 수 있습니다.
> - 왜냐하면 단일행 주석 사용 시 세미콜론 등의 종결문자가 포함되지 않을 수 있기 때문입니다.
> - 따라서 SQL 주석 사용 시 다중행 주석(/* */)을 사용하는 것이 더 안전합니다.

### 📌 기본적인 SQL 활용 방법
> - 생성된 테이블은 SQL 구문 중 SELECT를 이용하여 조회할 수 있습니다.
> - 데이터 조회 시 별 기호(*)를 이용하면 전체 데이터를 조회할 수 있습니다.
> - SELECT 문은 SQL에서 가장 기초적인 구문이자 가장 중요한 구문이기도 합니다.
> - <a href="https://kim-src.github.io/posts/SQL%EC%9D%98-%EC%86%8D%EC%84%B1,-%EC%98%B5%EC%85%98,-%EA%B8%B0%EB%B3%B8%ED%82%A4,-%EC%99%B8%EB%9E%98%ED%82%A4,-%EB%AA%85%EB%A0%B9%EC%96%B4,-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B0%9C%EB%85%90/">다음 글</a>에서는 다양한 데이터 조회 방법에 대해 알아보겠습니다.

``` sql
CREATE TABLE basic_test (
	std_num		varchar(50)  not null  comment  '학번',
	std_name	varchar(60)  not null  comment  '이름',
	std_age		int			 not null  comment  '나이',
	std_gender	varchar(10)  not null  comment  '성별',
	
	primary key(std_num)
);

INSERT INTO basic_test(std_num, std_name, std_age, std_gender)
VALUES('st101', '김군', 21, '남자'),
	('st102', '이군', 22, '여자'),
	('st103', '박군', 23, '남자'),
	('st104', '민군', 24, '여자'),
	('st105', '유군', 25, '남자');

select * from basic_test;
```

<br>

### 🔔 DBMS를 이용한 데이터베이스 구축 방법
### 📌 MariaDB
> - 데이터베이스 학습을 위해서 필자는 DBMS 중 MariaDB를 선택하였습니다.
> - MariaDB는 관계형 DBMS이며 MySQL에서 파생되었고 MySQL 기반으로 구성되었습니다.
> - 따라서 MariaDB와 MySQL은 거의 동일한 SQL 구문 및 기능이 지원됩니다.
> - 참고로 MariaDB는 설치 및 사용이 쉽다는 장점이 있으며 기본적인 기능은 무료입니다.

### 📌 MariaDB 다운로드 방법
> - <a href="https://mariadb.com/downloads/connectors/">MariaDB는 링크된 사이트</a>에서 다운로드 받으실 수 있습니다.
> - 사이트에서 각 항목은 아래와 같이 선택하시고 하부의 다운로드 버튼을 클릭하면 됩니다.
>    - Product : Java 8+
>    - Version : 3.3.3-GA 이상
>    - OS : Platform Independent



### 📌 DBeaver
> - 데이터베이스를 설치했다면 데이터 관리 체계를 구축해야 됩니다.
> - 데이터를 관리하기 위해서는 SQL 편집 기능이 있는 소프트웨어가 필요합니다.
> - 정확히는 개별 데이터베이스와 호환되는 명령어 편집 기능이 있는 프로그램이 필요합니다.
> - DBeaver는 110개 이상의 다양한 데이터베이스를 관리할 수 있는 툴입니다.
> - 비슷한 목적의 프로그램의 예시로는 MySQL Workbench, HeidiSQL 등이 있습니다.

### 📌 MySQL Client (MariaDB 10.11 (x64))
> - DBeaver와 MariaDB를 연동시키는 방법은 간단합니다.
> - MariaDB 설치 시 동시에 설치된 MySQL Client에 비밀번호를 입력 후 DB를 생성합니다.
> - DBeaver에 MySQL Client에 생성된 데이터베이스와 동일한 이름으로 DB를 연동시킵니다.
> - DBeaver와 MariaDB에 저장된 데이터베이스 연동에 성공하면 녹색 버튼이 표시됩니다.

<br>
<br>
<br>
