---
title: AutoWired를 이용한 객체끼리의 의존성 부여 방법
date: 2024-04-12 18:00:00 +09:00
categories: [4. Fundamental, Spring]
tags: [Fundamental, Spring, Service, Repository, Annotation, DI, Dependency Injection, Constructor Method, Autowired, Spring Bean]
---

<!-- 2024-04-12 글 작성 시작; 2024-04-99 페이지 호출 완료 -->
<h2>강의 내용 복습 : 김영한의 스프링 입문 강의 (섹션 4)</h2>
> - Tool :  
<img alt="IntelliJ" src="https://img.shields.io/badge/-IntelliJ-000000?style=flat-square&logo=intellij-idea&logoColor=white" />
<img alt="Spring Boot" src="https://img.shields.io/badge/-SpringBoot-6DB33F?style=flat-square&logo=spring&logoColor=white" />

<br>

### 🔔 강의 내용
### 📌 MemberController

### 📌 @AutoWired

### 📌 @Service & @Repository
> - <a href="https://kim-src.github.io/posts/%ED%9A%8C%EC%9B%90%EA%B4%80%EB%A6%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%9D%EC%B2%B4,-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4,-%EB%A6%AC%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/#-%EC%9D%BC%EB%B0%98%EC%A0%81%EC%9D%B8-%EC%9B%B9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EA%B3%84%EC%B8%B5-%EA%B5%AC%EC%A1%B0">웹 애플리케이션 계층 구조</a>는 보통 컨트롤러, 서비스, 리포지토리, 도메인으로 구성됩니다.
> - MVC 형태의 애플리케이션 개발 시 컨트롤러에 Controller 어노테이션을 부여합니다.
> - 이 어노테이션(@)은 스프링이 코드의 존재를 인식하게 하는 것이며 코드 기능이 실행되게 합니다.
> - 그러므로 서비스 및 리포지토리 객체에 각 어노테이션을 부여하면 서로 의존 관계가 됩니다.

<br>

### 🔔 개념 보충
### 📌 Dependency Injection

<br>

### 🔔 로직 이해
### 📌 MemoryMemberRepository 객체의 테스트 코드
> - 아래는 MemoryMemberRepositoryTest의 전체 코드이며 관련 설명을 주석으로 작성하였습니다.


<br>
<br>
<br>
