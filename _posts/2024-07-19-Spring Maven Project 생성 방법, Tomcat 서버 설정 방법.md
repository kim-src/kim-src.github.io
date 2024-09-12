---
title: Spring Maven Project 생성 방법, Tomcat 서버 설정 방법
date: 2024-07-19 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Spring, Fundamental, Java EE, STS, STS4, Spring Tool Suite 4, JSP, Servlet, UTF-8, Tomcat, JPA, MyBatis, Server, Server Side, Request, Response, GET, POST, WEB-INF]
---

<!-- 2024-06-18 글 작성 시작; 2024-07-19 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-06-11,12,20,21 강의)</h2>
> - Tool :  
<img alt="Spring" src="https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" />
<img alt="Spring Tool Suite 4" src="https://img.shields.io/badge/-Spring%20Tool%20Suite%204-6DB33F?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 Spring Maven Project 초기 세팅
### 📌 Spring Tool Suite 4 다운로드
> - Java EE 기반의 Spring 개발을 할 수 있는 IDE는 다양하고, 필자는 Eclipse를 사용하였습니다.
> - Eclipse 종류 중에서도 <a href="https://spring.io/tools">Spring 개발에 최적화 된 IDE인 STS4</a>를 사용하였습니다.
> - STS4 개발 환경은 Eclipse와 매우 흡사하고 링크된 글에서 다운로드 받으실 수 있습니다.
> - 이번 문단에서는 Spring의 Maven Project를 이용하여 브라우저 뷰포트에 호출해보겠습니다.

### 📌 메모리 할당량 설정
> - STS4 다운로드 완료 후 루트 폴더를 원하는 디렉토리에 위치시킵니다.
> - 다운로드 받았던 STS 루트 폴더를 열고 'SpringToolSuite4.ini'를 클릭합니다.
> - ini 파일의 본문 내용 하단부에 위치한 Xms 값을 Xmx (최댓값)와 동일하게 2048m로 변경합니다.
> - 이는 메모리 할당량을 증가시키는 설정이며 메모리를 요구하는 프로젝트를 개발할 수 있습니다.
> - 예를들면 Dispatcher Servlet에 의해 메모리 사용량이 많은 Spring 웹 개발을 할 수 있습니다.

### 📌 Perspective 설정
> - 메모리 할당량 설정을 마친 후 STS4를 실행시킨 뒤 Perspective를 설정하겠습니다.
> - Perspective는 STS 작업창의 우측 상단에 있으며 기본적으로 Java로 설정되어 있습니다.
> - 애플리케이션 개발을 위한 Maven Project를 생성하려면 이를 Java EE로 변경해야 됩니다.
> - Java EE는 아래 경로를 따라 다운로드 받으시면 됩니다.
> - 다운로드 받으신 후 일정시간 대기하시면 STS를 다시 시작하라는 안내문이 팝업됩니다.
> - STS를 다시 시작하신 뒤 Perspective를 Java EE로 수정해주시면 됩니다.

```
Help 탭 → Eclipse Marketplace → Popular 탭 → Eclipse Enterprise Java 다운로드
```

### 📌 UTF-8 설정
> - Java EE로 Perspective를 수정하셨다면 이제 프로젝트에 적용될 인코딩 설정을 하겠습니다.
> - 인코딩이란 목적에 맞게 데이터를 특정 형식이나 코드로 변환시키는 과정입니다.
> - 소프트웨어의 인코딩이 일치하지 않으면 문자가 정상적으로 표시되지 않습니다.
> - 예를들어 '한글을 입력했는데 글자가 깨지는 현상'이 발생됩니다.
> - 프로그램 상에 한글을 정상적으로 표시하기 위해서는 인코딩을 UTF-8로 설정해야 됩니다.
> - STS에서는 모든 프로젝트에 공통적으로 적용시킬 인코딩을 설정할 수 있습니다.
> - 아래의 인코딩 설정을 전부 수행하시면 대부분의 파일의 인코딩이 UTF-8로 설정됩니다.

```
- Window 탭 → Preferences → General → Content Types → Text → Spring Properties File → Default encoding 입력창 → ISO-8859-1 내용을 UTF-8로 수정 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → JSP → ISO-8859-1 내용을 UTF-8로 수정 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → JSP → JSP Fragment → ISO-8859-1 내용을 UTF-8로 수정 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → JSP → JSP Tag Definition → ISO-8859-1 내용을 UTF-8로 수정 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → CSS → 공란에 UTF-8 입력 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → HTML → 공란에 UTF-8 입력 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → Java Source File → 공란에 UTF-8 입력 → Update → Apply and Close
- Window 탭 → Preferences → General → Content Types → Text → Java Properties File → ISO-8859-1 내용을 UTF-8로 수정 → Update → Apply and Close
```

### 📌 JDK 경로 설정
> - Java를 이용한 애플리케이션을 개발할 때 JDK (Java Development Kit)는 필수적입니다.
> - 왜냐하면 JDK에는 'Java 컴파일러', '라이브러리', '실행 환경' 등이 포함되기 때문입니다.
> - 또한 서버의 역할을 하는 Tomcat은 JDK가 있어야 Java 애플리케이션을 실행시킬 수 있습니다.
> - 왜냐하면 Tomcat은 JDK에 포함된 JRE를 사용하여 애플리케이션을 실행시키기 때문입니다.
> - 참고로 JRE (Java Runtime Envrionment)는 JDK에서 제공하는 '실행 환경'입니다.
> - JDK의 여러 버전 중 JDK 17의 호환성이 가장 좋은 것을 평가받기 때문에 이를 사용하였습니다.
> - <a href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html">JDK 17을 링크된 사이트</a>에서 다운로드 받으신 후 원하는 디렉토리로 이동시키시면 됩니다.
> - 이동시키신 후 시스템 환경 변수에서 JAVA_HOME, Path 등을 JDK 17로 설정하시면 됩니다.
> - JDK 17은 아래 Tomcat 설정에서 다시 말씀드리겠습니다.

```
- Window 탭 → Preferences → Java → Installed JREs → Edit → C드라이브 등에 위치된 JDK 17 선택 → 'jre'를 'jdk-17'로 수정 → Finish
```

<br>

### 🔔 서버(Server)
### 📌 서버 개념
> - 웹 서버는 클라이언트로부터 받은 HTTP 요청을 토대로 콘텐츠를 제공하는 것입니다.
> - 서버란 네트워크를 통해 클라이언트의 요청에 응답하는 컴퓨터입니다.
> - 정확히는 서버 관리 전용 프로그램이 구비된 물리적인 컴퓨터이거나 가상 환경의 것입니다.
> - 서버는 단어 그대로 서비스를 제공하는 역할을 합니다.
> - 서비스에는 웹 페이지 접근, DB 접근, 파일 또는 이메일 전송 등이 포함됩니다.
> - 서버는 일반 사용자(user)가 접근하기 어렵기 때문에 백엔드 파트로 분류됩니다.

### 📌 서버 사이드 기술
> - 서버 사이드(서버단)는 서버 단계의 백엔드(백단) 기술에 해당됩니다.
> - 서버 사이드 기술에는 클라이언트와의 상호작용을 위한 다양한 기술이 포함됩니다.
> - 서버 사이드 기술은 웹 개발의 일환이며 상세 예시는 아래와 같습니다.
> - 참고로 React는 클라이언트 사이드의 UI 구축이 목적인 JS 라이브러리입니다.

#### 🚩 프로그래밍 언어 및 유관 기술
> - Java : Spring Framework, Spring Boot, Java EE
> - Python : Django 및 Flask 프레임워크
> - Node.js : Express 프레임워크
> - Ruby : Ruby on Rails
> - PHP : WordPress

#### 🚩 웹 서버 및 DBMS
> - Apache HTTP Server : HTML, CSS, JS 등 정적 콘텐츠 제공
> - Apache Tomcat : Java 기반 웹 애플리케이션 개발을 위한 JSP, Servlet 파일 처리
> - 데이터베이스 유관 프레임워크 : JPA, MyBatis
> - 각종 DBMS : MySQL, Oracle, MaiaDB, MongoDB 등

### 📌 WAS (Web Application Server)
> - WAS는 웹 서버와 함께 동작하는 소프트웨어입니다.
> - WAS의 대표적인 예시로는 Apache Tomcat이 있습니다.
> - 웹 서버가 클라이언트의 요청을 받으면 WAS는 동적인 페이지를 생성합니다.
> - 동적인 페이지는 DB 조회, 트랜잭션 처리 결과 등을 포함합니다.

### 📌 UserAgent
> - UserAgent는 웹 브라우저 등이 사용자를 식별하기 위해 사용하는 문자열입니다.
> - UserAgent는 서버 사이드에 요청을 보낼 때 사용됩니다.
> - 예를들면 웹 사이트 정보를 크롤링할 때 UserAgent를 요청 객체에 포함시킵니다.
> - UserAgent에는 클라이언트의 OS, 브라우저 정보 등이 포함됩니다.

<br>

### 🔔 Apache Tomcat
### 📌 Tomcat 소개
> - Tomcat은 웹 개발에 이용되는 서버이자 웹 컨테이너이고 다양한 디렉토리와 요소로 구성됩니다.
> - bin : Tomcat을 실행/중지하는 데 사용되는 실행 파일 및 스크립트가 포함됩니다.
> - conf : Tomcat 서버의 동작 방식을 결정하는 주요 xml 파일 등이 포함됩니다.
> - lib : Tomcat과 함께 사용되는 Java의 라이브러리 jar 파일 등이 포함됩니다.
> - Tomcat 서버 하나 당 1,000명 정도의 사용자는 감당 가능하기에 개발 초기에 사용하기 좋습니다.
> - Tomcat 서버는 프로젝트 당 하나씩 설정하는 것이 관리에 용이합니다.

### 📌 Apache vs Tomcat
> - 웹은 서버와 컨테이너로 구분되고 서버는 정적, 컨테이너는 동적 콘텐츠 처리에 적합합니다.
> - Apache는 웹 서버, Tomcat은 웹 컨테이너로 분류됩니다.
> - 따라서 함께 사용되는 Apache Tomcat은 담당하는 정적/동적 콘텐츠가 상이합니다.

### 📌 Apache Tomcat 다운로드
> - Spring 프로젝트의 서버 설정을 위해 <a href="https://tomcat.apache.org">링크된 사이트</a>에서 Tomcat 9를 다운로드 받겠습니다.
> - 사이트 접속 후 좌측의 'Tomcat 9' 클릭 → Core → zip을 다운로드 받아주시면 됩니다.
> - 다운로드 및 압축 해제 후 원하는 디렉토리에 위치시키면 됩니다.
> - Tomcat을 STS에서 본격적으로 사용하기 전에 포트 번호 등을 변경하겠습니다.

### 📌 Tomcat 서버 포트 및 인코딩 방식 변경 방법
> - Tomcat 서버의 기본적인 포트 번호는 8080으로 설정되어 있습니다.
> - 그런데 이 8080 포트 번호는 다른 프로그램에서 이미 사용중일 가능성이 큽니다.
> - 따라서 Tomcat 서버의 포트 번호를 9090으로 변경해보겠습니다.
> - 포트 번호 변경을 위해서 Tomcat 루트 폴더에서 conf/server.xml에 접근해보겠습니다.
> - server.xml 파일 하단부에 위치중인 ```Connector port="8080"```에서 9090으로 변경하겠습니다.
> - 그리고 ```maxParameterCount="1000"``` 하단부에 ```URIEncoding="UTF-8"``` 인코딩을 추가하겠습니다.
> - 참고로 server.xml에 있는 코드와 주석을 쉽게 구분하려면 VS Code를 이용하면 됩니다.

### 📌 Tomcat 가상 서버 생성 방법
> - 이제 STS를 실행시키고 아래 소개된 순서대로 Tomcat 서버를 생성해보겠습니다.
> - STS에 Server가 없을 경우 ```Window 탭 → Show View → Servers```를 클릭하시면 됩니다.
> - 프로젝트 하나 당 서버 하나와 연결시키는 것이 개발하기에 용이합니다.
> - 각종 라이브러리들과 데이터베이스 연동 시 서버 연결을 단순화하기 위해서입니다.
> - 참고로 STS에서 사용되는 Tomcat은 프로그램 테스트용 가상 서버라고 이해하셔도 좋습니다.
> - 왜냐하면 현재 개발중인 PC가 서버 전용 프로그램이 구비된 컴퓨터가 아니기 때문입니다.

```
- New Server → Apache → Tomcat v9.0 Server → Next
- 서버 대상 프로젝트 선택 → Add → Next
- Window 탭 → Preferences → Server → Runtime Environment → Add → Apache → Apache Tomcat v9.0 → Next → Browse → Tomcat 경로 선택
- JRE에서 jdk-17로 변경 → Finish → Apply and Close
```

### 📌 웹 페이지 호출 방법 변경
> - 브라우저에 JSP 등의 웹 페이지를 호출하는 방법은 localhost 주소를 입력하는 것입니다.
> - 이때 'localhost:8080/projectname/location' 등의 주소를 입력합니다.
> - 그런데 이러한 방식의 URL 주소는 프로젝트명을 입력해야 되기에 불편할 수 있습니다.
> - URL 주소 입력을 더 간단하게 입력하기 위해서는 아래 방법을 따라하시면 됩니다.
> - URL을 간편화시키면 'localhost:8080/location' 주소만 입력해도 페이지 호출이 가능합니다.

```
- 생성된 Server 더블 클릭 → STS 전체 작업창의 중앙으로부터 7시 방향에 위치한 Modules 탭 클릭 → Enabled 상태의 서버 클릭 → Edit 버튼 클릭 → Path 내용 전부 제거
```

<br>

### 🔔 Spring Maven Project 개발 방법
### 📌 Maven Project 생성 방법
> - Package Explorer 창에 마우스를 대고 우클릭합니다.
> - New → Maven project를 클릭합니다.
> - 테스트용 애플리케이션 제작을 위한 Create a simple project를 클릭합니다.
> - Group Id에 'kr.com'을 예시로 입력합니다.
> - Artifact Id에 'spring-board'를 예시로 입력합니다.
> - Packaging을 war로 선택합니다.
> - Name을 Artifact Id와 동일한 'spring-board'로 입력합니다.
> - Finish를 클릭하면 프로젝트가 생성됩니다.

### 📌 프로젝트명 설정
> - 용이한 개발 및 유지/보수를 위해서는 프로젝트명에 영문 소문자만 입력되어야 됩니다.
> - 왜냐하면 컴파일 과정에서 컴파일러가 대/소문자 구분을 명확히 하지 못하기 때문입니다.
> - 대문자 자체가 문제가 되는 것은 아니지만 한 번 컴파일되면 소문자로 수정되지 않습니다.
> - 협업 과정에서 일부 대문자가 있는 프로젝트명과 소문자가 혼용되면 에러가 발생됩니다.
> - 관련 에러 발생 시 캐시뿐만 아니라 로그까지 소멸시킨 뒤 프로그램을 구축해야 됩니다.
> - 즉, 프로젝트명에 대문자, 특수문자(공백 등), 언더바 등은 지양해야 좋습니다.

### 📌 WEB-INF 디렉토리 생성
> - WEB-INF 디렉토리는 클라이언트가 JSP에 직접적으로 접근하지 못하게 차단할 수 있습니다.
> - 서버에 의한 접근은 가능하지만 URL/URI와 연결된 HTTP를 통한 접근은 허용되지 않습니다.
> - 즉, JSP 파일 등의 보안을 강화하기 위해서는 WEB-INF 디렉토리 아래에 저장해야 됩니다.
> - WEB-INF 디렉토리를 생성하는 방법은 아래와 같습니다.
> - 참고로 INF는 information의 축약어입니다.

```
- root/src/main/webapp → 마우스 우클릭 → WEB-INF 폴더 생성
```

### 📌 WEB-INF 콘텐츠 생성
> - WEB-INF 내에 프로젝트 구성에 필요한 콘텐츠를 생성해면 됩니다.
> - WEB-INF 내에는 config, spring, views 디렉토리와 <a href="https://github.com/kim-src/study-spring/blob/main/spring-board/src/main/webapp/WEB-INF/web.xml">web.xml</a>이 포함될 수 있습니다.
> - spring 디렉토리 내에는 <a href="https://github.com/kim-src/study-spring/blob/main/spring-board/src/main/webapp/WEB-INF/spring/root-context.xml">root-context.xml</a>, <a href="https://github.com/kim-src/study-spring/blob/main/spring-board/src/main/webapp/WEB-INF/spring/servlet-context.xml">servlet-context.xml</a> 등이 포함됩니다.
> - views 디렉토리 내에는 jsp 등의 정적 콘텐츠가 포함됩니다.
> - 각각의 깃허브 링크에는 파일 내용이 포함됩니다.

### 📌 Lombok 설정
> - Lombok은 반복적인 Java 코드를 최소화하기 위해 개발된 도구입니다.
> - Lombok은 사용하기 위해서는 어노테이션을 부여하면 되며 사용 예시는 아래와 같습니다.
>    - @Getter/@Setter : 필드의 getter/setter 메서드를 어노테이션으로 생성할 수 있습니다.
>    - @ArgsConstructor : 각각의 목적에 맞는 생성자를 자동으로 생성할 수 있습니다.
>    - @Builder : 복잡한 객체 생성 시 사용하는 빌더 패턴을 구현할 수 있습니다.
>    - @Cleanup : 파일 input/output과 같은 자원을 자동으로 정리할 수 있습니다.
> - <a href="https://projectlombok.org/download">Lombok은 링크된 사이트</a>에서 다운로드 받을 수 있습니다.
> - Lombok과 관련된 jar 파일을 클릭하고 경로 등을 설정하면 설치가 완료됩니다.

### 📌 jar 파일
#### 🚩 jar 소개
> - Spring을 개발하다보면 jar 파일을 사용해야 될 때가 있습니다.
> - jar는 Java Archive 파일의 축약어이며 Java Build Path 중 하나입니다.
> - Java Build Path는 내부 라이브러리를 Java 프로젝트에 적용할 때 사용되는 개념입니다.
> - jar는 여러 Java 클래스, 메타 데이터, 프로그램 리소스 등이 포함될 수 있는 압축 포맷입니다.
> - 사용자는 jar 파일 하나만으로도 애플리케이션의 기능을 쉽게 확장시킬 수 있습니다.

#### 🚩 jar 활용
> - jar 파일은 실행 가능한 압축 파일 형태일 수 있으며 더블 클릭하면 실행되는 경우가 있습니다.
> - Deployment Assembly에서는 프로젝트에 jar 내용이 잘 적용되었는지 확인할 수 있습니다.
> - jar 파일의 예시는 각종 라이브러리와 STS, lombok 설치 파일 등입니다.

<br>

### 🔔 Spring MVC 구축
### 📌 Model 구축
> - 데이터베이스에 접근하기 위해 MyBatis를 사용하였습니다.
> - MyBatis는 SQL 매핑 프레임워크 중 하나이며 SQL 문을 XML 또는 어노테이션으로 관리합니다.
> - resources/config 디렉토리 내에 <a href="https://github.com/kim-src/study-spring/blob/main/spring-board/src/main/resources/config/mybatis-config.xml">MyBatis를 설정하는 xml 파일</a>을 생성하였습니다.

### 📌 View 구축
> - JSP를 이용하여 테스트용 웹 페이지를 생성하였습니다.
> - 해당 웹 페이지는 JSTL 및 EL을 이용하여 구현되었습니다.
> - <a href="https://kim-src.github.io/posts/Spring-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-JSP,-JSTL,-Servelet,-MVC-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B4%80%EA%B3%84/#-jsp-java-server-page">JSP에 대한 설명은 링크된 글</a>에 잘 작성되어 있습니다.
> - 아래는 JSP 내용입니다.

``` jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>2024-06-21 강의 실습</div>
	<h1>${msg} Spring 작동 메커니즘</h1>
	<!-- EL 사용 아닐 경우 -->
	<% String msg = (String)request.getAttribute("msg"); %>
</body>
</html>
```

### 📌 Controller 구축
> - 웹 페이지 호출을 위한 컨트롤러를 구현하였습니다.
> - 웹 페이지 호출 시 GET 또는 POST 사용 방식의 예시도 있습니다.
> - <a href="https://kim-src.github.io/posts/Spring-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-JSP,-JSTL,-Servelet,-MVC-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B4%80%EA%B3%84/#-controller">컨트롤러에 대한 설명은 링크된 글</a>에 잘 작성되어 있습니다.

``` java
package kr.com.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
	
	// GET/POST 모두 수용
	// @RequestMapping(value="/hello.do")
	// only GET 수용
	// @RequestMapping(value="/hello.do", method = RequestMethod.GET)
	// only POST 수용
	// @RequestMapping(value="/hello.do", method = RequestMethod.POST)
	
	@GetMapping(value="/hello.do")
	public String hello(Model model) {
		model.addAttribute("msg", "2024-06-21 강의 주제 : ");
		return "hello";
	}

}
```

<br>
<br>
<br>
