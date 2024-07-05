---
title: 데이터베이스 용어, SQL, 트랜잭션, MariaDB, DBeaver
date: 2024-05-19 18:00:00 +09:00
categories: [1. Fundamental, Database]
tags: [Database, Fundamental, DBMS, Transaction, MariaDB, Oracle, MySQL, MongoDB, DBeaver, RDB, RDBMS]
---

<!-- 2024-05-16 글 작성 시작; 2024-05-19 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-05-09 강의)</h2>
> - Tool :  
<img alt="SQL" src="https://img.shields.io/badge/-SQL-336791?style=flat-square&logo=sqlite&logoColor=white" />
<img alt="MariaDB" src="https://img.shields.io/badge/-MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" />
<img alt="DBeaver" src="https://img.shields.io/badge/-DBeaver-372923?style=flat-square&logo=dbeaver&logoColor=white" />

<br>

### 🔔 데이터 관리 방법
### 📌 데이터베이스(DB)
> - 데이터베이스는 데이터를 체계적으로 저장하고 관리하는 시스템입니다.
> - DBMS를 이용하여 데이터베이스에 저장된 데이터를 관리할 수 있습니다.
> - 데이터 관리의 예시로는 데이터 저장, 수정, 삭제, 검색 등이 있습니다.
> - 전 세계적으로 많이 사용되는 DBMS는 Oracle, MySQL, MariaDB, MongoDB 등이 있습니다.

### 📌 MariaDB
> - 데이터베이스 학습을 위해서 필자는 DBMS 중 MariaDB를 선택하였습니다.
> - MariaDB는 관계형 DBMS이며 MySQL에서 파생되었고 MySQL 기반으로 구성되었습니다.
> - 따라서 MariaDB와 MySQL은 거의 동일한 SQL 구문 및 기능이 지원됩니다.
> - 참고로 MariaDB는 설치 및 사용이 쉽다는 장점이 있으며 기본적인 기능은 무료입니다.

### 📌 DBeaver
> - 데이터베이스를 설치했다면 데이터 관리 체계를 구축해야 됩니다.
> - 데이터를 관리하기 위해서는 SQL 편집 기능이 있는 소프트웨어가 필요합니다.
> - 정확히는 개별 데이터베이스와 호환되는 명령어 편집 기능이 있는 프로그램이 필요합니다.
> - DBeaver는 110개 이상의 다양한 데이터베이스를 관리할 수 있는 툴입니다.
> - 비슷한 목적의 프로그램의 예시로는 MySQL Workbench, HeidiSQL 등이 있습니다.

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

### 📌 SQL 주석
> - 데이터베이스 관리 시 여러 줄의 SQL 명령어를 하나의 명령으로 처리할 때가 있습니다.
> - 한 예시로는 SQL 파싱 과정이 있으며 이때 각 SQL 명령어는 명확하게 구분되어 있어야 됩니다.
> - 그런데 SQL 파싱 과정에서 단일행 주석(--) 사용 시 오류가 발생될 수 있습니다.
> - 왜냐하면 단일행 주석 사용 시 세미콜론 등의 종결문자가 포함되지 않을 수 있기 때문입니다.
> - 따라서 SQL 주석 사용 시 다중행 주석(/* */)을 사용하는 것이 더 안전합니다.

<br>

### 🔔 데이터베이스 및 데이터 생성
### 📌 MySQL Client (MariaDB 10.11 (x64))
> - DBeaver와 MariaDB를 연동시키는 방법은 간단합니다.
> - MariaDB 설치 시 동시에 설치된 MySQL Client에 비밀번호를 입력 후 DB를 생성합니다.
> - DBeaver에 MySQL Client에 생성된 데이터베이스와 동일한 이름으로 DB를 연동시킵니다.
> - DBeaver와 MariaDB에 저장된 데이터베이스 연동에 성공하면 녹색 버튼이 표시됩니다.

### 📌 테이블, 속성, 레코드 생성
> - 아래는 데이터베이스에 포함시킬 데이터를 생성시킨 예시입니다.
> - SQL 명령어를 이용하여 테이블 생성, 데이터 입력, 데이터 조회 기능을 구현하였습니다.

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

### 📌 SELECT
> - 생성된 테이블은 SQL 구문 중 SELECT를 이용하여 조회할 수 있습니다.
> - 데이터 조회 시 별 기호(*)를 이용하면 전체 데이터를 조회할 수 있습니다.
> - SELECT 문은 SQL에서 가장 기초적인 구문이자 가장 중요한 구문이기도 합니다.
> - <a href="https://kim-src.github.io/">다음 글</a>에서는 다양한 데이터 조회 방법에 대해 알아보겠습니다.

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
<br>
<br>
