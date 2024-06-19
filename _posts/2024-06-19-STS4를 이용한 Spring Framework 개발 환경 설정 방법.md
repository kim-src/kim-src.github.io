---
title: STS4를 이용한 Spring Framework 개발 환경 설정 방법
date: 2024-06-19 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Spring, Fundamental, Java EE, STS, STS4, Spring Tool Suite 4, JSP, Servlet, UTF-8, Tomcat]
---

<!-- 2024-06-19 글 작성 시작; 2024-06-19 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-06-11 강의)</h2>
> - Tool : 
<img alt="Spring" src="https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" />
<img alt="Spring Tool Suite 4" src="https://img.shields.io/badge/-Spring%20Tool%20Suite%204-6DB33F?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 Spring Framework
### 📌 Spring Tool Suite 4 다운로드
> - STS4는 Spring 개발에 초점을 IDE (Integrated Dev. Env.)이며 Eclipse에서 파생되었습니다.
> - 필자의 경우 Eclipse 버전을 다운로드 받았고 현재 사용중입니다.
> - STS4의 개발 환경은 Eclipse와 거의 흡사하며 Spring 개발에 특화되어 있습니다.
> - <a href="https://spring.io/tools">STS4를 다운로드 받을 수 있는 사이트는 링크된 글</a>을 클릭하시면 됩니다.

### 📌 프로젝트명 설정 요령
> - 용이한 개발 및 유지/보수를 위해서는 프로젝트명에 영문 소문자만 입력되어야 됩니다.
> - 왜냐하면 컴파일 과정에서 컴파일러가 대/소문자 구분을 명확히 하지 못하기 때문입니다.
> - 대문자 자체가 문제가 되는 것은 아니지만 한 번 컴파일되면 소문자로 수정되지 않습니다.
> - 협업 과정에서 일부 대문자가 있는 프로젝트명과 소문자가 혼용되면 에러가 발생됩니다.
> - 관련 에러 발생 시 캐시뿐만 아니라 로그까지 소멸시킨 뒤 프로그램을 구축해야 됩니다.
> - 즉, 프로젝트명에 대문자, 특수문자(공백 등), 언더바 등은 지양해야 좋습니다.

<br>
<br>
<br>
