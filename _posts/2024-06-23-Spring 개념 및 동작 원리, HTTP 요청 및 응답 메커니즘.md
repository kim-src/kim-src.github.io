---
title: Spring 개념 및 동작 원리, HTTP 요청 및 응답 메커니즘
date: 2024-06-23 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Spring, Fundamental, IOC, DI, Inversion of Control, Dependency Injection, Controller, RestController, Service, Mapper, Repository, Component, Bean, Configuration, HTTP, Prefix, Suffix, URL, URI, Request, Response, GET, POST, JPA, MyBatis, Apache Tomcat, Tomcat, Parameter, Attribute]
---

<!-- 2024-06-22 글 작성 시작; 2024-06-24 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-06-10,12,21 강의)</h2>
> - Tool :  
<img alt="Spring" src="https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" />
<img alt="Spring Tool Suite 4" src="https://img.shields.io/badge/-Spring%20Tool%20Suite%204-6DB33F?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 Spring
### 📌 Spring 주요 개념
> - Spring의 동작을 설명하는 주요 개념에는 IOC와 DI가 있습니다.
> - IOC와 DI를 이용하여 객체의 생성과 애플리케이션 관리의 복잡성을 최소화 할 수 있습니다.

#### 🚩 IOC (Inversion of Control)
> - 제어의 역전이란, 개발자의 역할이던 프로그램 제어를 Spring에게 위임한다는 것입니다.
> - 프로그램 제어권을 위임하는 방식 중 하나는 어노테이션을 활용하는 것입니다.
> - Spring은 어노테이션을 통해 객체의 생성, 사용, 소멸 등을 관리합니다.
> - 아래는 IOC 기능이 있는 대표적인 어노테이션의 종류입니다.
>    - @Controller, @RestController : 요청과 응답을 처리하는 컨트롤러 객체를 정의함
>    - @Service : 비즈니스 로직을 처리하는 서비스 계층의 객체를 정의함
>    - @Mapper, @Repository : 데이터베이스와의 상호작용을 처리하는 <a href="https://kim-src.github.io/posts/Spring-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC,-HTTP-%EC%9A%94%EC%B2%AD-%EB%B0%8F-%EC%9D%91%EB%8B%B5-%EB%A9%94%EC%BB%A4%EB%8B%88%EC%A6%98/#-spring-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC">ORM 도구</a>를 사용함
>    - @Component : Spring에서 관리하는 Bean으로 자동으로 등록함
>    - @Bean : 메서드에서 반환되는 객체를 Spring 컨테이너에 Bean으로 등록함
>    - @Configuration : Bean 어노테이션을 포함하는 메서드가 정의된 클래스를 나타냄

#### 🚩 DI (Dependency Injection)
> - 의존성 주입은 IOC의 한 형태로, 객체의 의존성 역시 Spring에서 관리된다는 것입니다.
> - DI는 객체가 필요로 하는 의존성 객체를 외부로부터 자동으로 제공받는 패턴입니다.
> - DI는 애플리케이션의 컨텍스트를 구성하는 XML 또는 Java 기반의 파일로 설정됩니다.
> - DI의 주요 의존성 주입 방식은 아래와 같습니다.
>    - 생성자 주입 : 객체가 생성될 때 생성자를 통해 의존성을 주입함
>    - Setter 주입 : 객체가 생성된 후 메서드를 통해 의존성을 주입함
>    - 필드 주입 : @Autowired를 사용하여 의존성을 직접적으로 주입함

### 📌 Spring 동작 원리
> - Spring은 DispatcherServlet을 이용하여 클라이언트의 요청에 응답합니다.
> - Spring의 동작 원리는 아래와 같으며 이미지를 기준으로 설명하였습니다.

```
- 1. Spring은 클라이언트의 요청을 DispatcherServlet으로 전달합니다.
- 1-1. 클라이언트의 요청은 Request 객체의 GET 또는 POST 메서드에 포함됩니다.
- 1-2. DispatcherServlet의 주된 역할은 적절한 컨트롤러로 요청을 라우팅하는 것입니다.
- 1-3. DispatcherServlet이 등록된 위치는 Spring 애플리케이션 컨텍스트입니다.
- 1-4. DispatcherServlet이 등록된 이 컨텍스트는 XML 또는 Java 기반의 파일로 구성됩니다.
- 2. DispatcherServlet은 Handler Mapping으로 요청을 처리할 수 있는 Controller를 찾습니다.
- 2-1. 매핑 정보는 Controller에서 정의된 @RequestMapping 어노테이션을 기반으로 구성됩니다.
- 3. 요청을 처리할 Controller가 결정되면 해당 Controller의 메서드가 호출됩니다.
- 4. Controller에서 Service 계층의 비즈니스 로직을 실행합니다.
- 5. 데이터베이스 접근 객체를 이용하여 데이터베이스와 상호작용하고 데이터를 추출합니다.
- 5-1. 데이터베이스 접근 객체에는 @Repository 또는 @Mapper 어노테이션이 부여됩니다.
- 5-2. 해당 어노테이션이 부여된 객체는 ORM (Object Relational Mapping) 도구를 사용합니다.
- 5-3. ORM 중 JPA에서는 @Repository, MyBatis에서는 @Mapper가 DB 접근 역할을 수행합니다.
- 5-4. ORM 도구는 데이터 접근을 단순화하기 위해 객체와 DB 테이블의 매핑을 자동화합니다.
- 6. Controller는 처리 결과에 따른 뷰 이름과 모델 데이터를 DispatcherServlet에 반환합니다.
- 6-1. 처리 결과에는 Service 계층으로부터 Controller로 반환된 데이터가 포함됩니다.
- 7. DispatcherServlet은 View Resolver를 이용하여 View 이름에 해당되는 View를 탐색합니다.
- 7-1. 탐색된 View의 형태는 Thymeleaf(.html) 또는 jsp(.jsp) 템플릿일 수 있습니다.
- 7-2. 탐색이 완료되면 View 이름을 실제 View 파일로 매핑합니다.
- 8. Model 객체에는 View 렌더링에 필요한 데이터가 포함됩니다.
- 8-1. 즉, Model 객체에는 View를 통해 사용자에게 표시되는 정보와 관련된 데이터가 포함됩니다.
- 8-2. Model 객체에는 보통 private으로 선언된 변수와 getter/setter 메서드가 포함됩니다.
- 9. 최종적으로 렌더링 된 View 페이지(html) 또는 데이터(JSON, XML)가 응답으로 전송됩니다.
```

<figure>
	<img src="https://github.com/kim-src/Images/assets/150884526/d40ceaa4-8871-4e4b-a1fd-13c5a277fc17" width="500px" alt="figure">
	<figcaption>Spring 동작 원리</figcaption>
</figure>

<br>

### 🔔 HTTP
> - 클라이언트와 Spring이 상호작용하기 위해서는 HTTP 통신 기술이 필수적으로 사용됩니다.
> - HTTP 통신에서 기본적으로 사용되는 객체는 Request, Response, Session, Cookie 등입니다.
> - 이번 문단에서는 Spring 동작 원리와 관련된 HTTP 통신 기술에 대해 알아보겠습니다.

### 📌 Request 객체(요청)
> - 클라이언트가 서버와 상호작용하는 방법은 크게 요청과 응답으로 분류됩니다.
> - 그 중 요청은 클라이언트가 서버에 특정 데이터나 동작을 요구하는 객체입니다.
> - Request에는 URL, 헤더, 데이터 등이 포함됩니다.
> - Request는 데이터를 저장하는 setter 기능은 없고 getter 기능은 제공합니다.
> - 즉, 일반적으로 Request 객체는 데이터를 전송하는 역할을 합니다.
> - 데이터 전송을 위해 Request 객체의 GET 및 POST 메서드를 사용합니다.

#### 🚩 GET 메서드
> - Request 객체의 GET 메서드는 주로 정보를 조회하기 위해 이용되는 메서드입니다.
> - GET 요청은 데이터를 URL에 포함시켜 전송한다는 것이 특징입니다.
> - GET 요청의 예시는 사용자가 브라우저 주소창에 URL을 입력하는 행위입니다.

#### 🚩 POST 메서드
> - Request 객체의 POST 메서드는 주로 정보를 저장하기 위해 이용되는 메서드입니다.
> - POST 요청은 데이터를 HTTP 메시지의 본문(body 태그 내용)에 포함시켜 전송합니다.
> - POST 요청은 서버의 데이터를 생성하거나 업데이트하기 위해서도 사용됩니다.

### 📌 Response 객체(응답)
> - 서버가 클라이언트의 요청에 응답하여 전달하는 데이터를 포함하는 객체입니다.
> - Reponse 객체에 포함되는 데이터의 형태는 헤더의 Content-Type을 통해 명시됩니다.
> - Response 객체가 전달하는 데이터에는 아래 내용이 포함됩니다.
>    - 서비스의 결과물 : HTML, JSON, XML 등
>    - 상태 코드 : 요청에 대한 처리 결과를 나타내는 200(성공), 404(찾을 수 없음) 등
>    - 세션 및 쿠키 관리 : 후속 요청에 필요한 정보를 서버에 저장

#### 🚩 HTML
> - 서버가 클라이언트의 요청에 반환하는 데이터 포맷은 보통 HTML, JSON, XML입니다.
> - HTML은 Hypertext Markup Language의 축약어이고 웹 페이지의 구조와 내용을 정의합니다.
> - HTML은 태그 기반 언어이며 CSS, JavaScript와 함께 사용됩니다.
> - HTML 응답은 헤더에 text/html로 지정됩니다.
> - <a href="https://kim-src.github.io/posts/HTML-%EB%B0%8F-CSS%EC%9D%98-%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90,-%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8,-BootStrap-%EC%86%8C%EA%B0%9C/#-html">HTML에 대한 상세한 내용</a>은 링크된 글에 있습니다.

#### 🚩 JSON
> - JSON은 JavaScript Object Notation의 축약어이고 데이터 교환 형식 중 하나입니다.
> - JSON은 JavaScript의 객체 표기법 기반의 형식이며 Key-Value 쌍으로 표현됩니다.
> - JSON 응답은 헤더에 application/json으로 지정됩니다.
> - JSON의 예시는 아래와 같습니다.

``` json
{
  "userName": "김두식",
  "userAge": 30,
  "isStudent": false
}
```

#### 🚩 XML
> - XML은 Extensible Markup Language의 축약어이고 태그 기반으로 작성됩니다.
> - XML은 사용자가 태그를 정의할 수 있기 때문에 데이터 구조를 명확하게 표현할 수 있습니다.
> - XML은 정의된 태그를 이용하여 데이터 구조를 계층적으로 나타낼 수 있습니다.
> - XML 응답은 헤더에 application/xml로 지정됩니다.
> - XML의 예시는 아래와 같습니다.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<userInfo>
  <userName>홍길동</userName>
  <userAge>25</userAge>
  <isStudent>false</isStudent>
</userInfo>
```

### 📌 Cookie vs Session
> - HTTP는 기본적으로 상태를 유지하지 않는 Stateless 프로토콜입니다.
> - 상태를 유지하지 않는다는 것은 클라이언트의 전/후 요청 관계를 구분하지 못한다는 뜻입니다.
> - 이를 보완하기 위해서 세션과 쿠키가 개발되었고 이들은 클라이언트의 상태 정보를 관리합니다.

#### 🚩 Cookie
> - 쿠키는 클라이언트 측(사용자)에서 상태 정보를 저장하는 데이터 조각입니다.
> - 서버는 응답 헤더의 Set-Cookie를 통해 세션 ID 등을 쿠키 형태로 클라이언트에게 전송합니다.
> - 클라이언트는 서버에 요청을 보낼 때마다 보유중인 쿠키 정보를 요청 헤더에 포함시킵니다.
> - 쿠키의 대표적인 역할은 아래와 같습니다.
>    - 세션 관리 : 로그인 상태, 장바구니 현황 등의 실행 상태를 저장하는
> - 쿠키는 클라이언트가 사용한 브라우저에 저장되고 공개되기 때문에 보안에 취약한 편입니다.


#### 🚩 Session
> - 세션은 서버 측에서 클라이언트의 상태 정보를 저장합니다.
> - 서버는 세션 ID를 생성하고 생성된 ID를 쿠키 등으로 클라이언트에게 전달합니다.
> - 클라이언트의 경우 동일한 서버에 요청할 때마가 전달받은 세션 ID를 사용할 수 있습니다.
> - 서버의 경우 클라이언트에게 부여한 세션 ID를 통해 사용자의 상태를 조회하고 관리할 수 있습니다.
> - 세션의 예시로, 포털 사이트의 경우 사용자의 로그인 정보를 세션에 담을 수 있습니다.
> - 세션은 서버에 저장되기 때문에 쿠키보다는 보안이 유리한 편입니다.
> - 세션은 서버에 저장되기 때문에 용량 제한이 이론상 없지만 쿠키는 4KB 정도입니다.
> - 보안성 등의 이유로 세션이 쿠키보다 더 좋지만 세션을 남용할 경우 서버 리소스가 부족할 수 있습니다.

### 📌 URL vs URI

<br>

### 🔔 Spring 유관 기술
### 📌 Parameter 객체

### 📌 Attribute 객체
> - 클라이언트가 서버로부터 데이터를 받으려면 무조건?

### 📌 ORM (Object Relational Mapping)
> - ORM은 서비스 계층에서 데이터베이스로 접근하기 위해 필요한 도구입니다.
> - ORM 도구는 데이터 접근을 단순화하기 위해 객체와 DB 테이블의 매핑을 자동화합니다.
> - 대표적인 ORM은 JPA와 MyBatis가 있습니다.

### 📌 JPA vs MyBatis
#### 🚩 JPA
#### 🚩 MyBatis
### 📌 @Mapper
### 📌 @Repository

### 📌 View Templete
> - View를 구성하는 대표적인 템플릿에는 Thymeleaf와 JSP가 있습니다.
> - Thymeleaf는 .html 파일, JSP는 .jsp 파일로 구성되며 각각의 특징은 아래와 같습니다.

### 📌 View 렌더링
#### 🚩 Prefix & Suffix
> - Prefix + viewName + suffix = 경로 + 이름 = full 경로
#### 🚩 Thymeleaf
#### 🚩 JSP

<br>
<br>
<br>

