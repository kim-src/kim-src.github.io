---
title: Spring 개념 및 동작 원리, HTTP 요청 및 응답 메커니즘
date: 2024-07-25 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Spring, Fundamental, IOC, DI, Inversion of Control, Dependency Injection, Controller, RestController, Service, Mapper, Repository, Component, Bean, Configuration, HTTP, Prefix, Suffix, URL, URI, Request, Response, GET, POST, JPA, MyBatis, Apache Tomcat, Tomcat, Parameter, Attribute]
---

<!-- 2024-06-22 글 작성 시작; 2024-07-25 페이지 호출 완료 -->
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
> - DI는 애플리케이션의 콘텍스트를 구성하는 XML 또는 Java 기반의 파일로 설정됩니다.
> - DI의 주요 방식은 아래와 같습니다.
>    - 생성자 주입 : 객체가 생성될 때 생성자를 통해 의존성을 주입함
>    - Setter 주입 : 객체가 생성된 후 메서드를 통해 의존성을 주입함
>    - 필드 주입 : @Autowired를 사용하여 의존성을 직접적으로 주입함
> - 의존성 주입 코드를 입력한 후에는 'Update Project'를 이용하여 시스템에 등록해야 됩니다.

### 📌 Spring 동작 원리
> - Spring은 DispatcherServlet을 이용하여 클라이언트의 요청에 응답합니다.
> - Spring의 동작 원리는 아래와 같으며 이미지를 기준으로 설명하였습니다.

```
- 1. Spring은 클라이언트의 요청을 DispatcherServlet으로 전달합니다.
- 1-1. 클라이언트의 요청은 Request 객체의 GET 또는 POST 메서드에 포함됩니다.
- 1-2. DispatcherServlet의 주된 역할은 적절한 컨트롤러로 요청을 라우팅하는 것입니다.
- 1-3. DispatcherServlet이 등록된 위치는 Spring 애플리케이션 콘텍스트입니다.
- 1-4. DispatcherServlet이 등록된 이 콘텍스트는 XML 또는 Java 기반의 파일로 구성됩니다.
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

### 🔔 Model
### 📌 ORM (Object Relational Mapping)
> - ORM은 서비스 계층에서 데이터베이스로 접근하기 위해 필요한 도구이며 JPA가 대표적입니다.
> - ORM 도구는 데이터 접근을 단순화하기 위해 객체와 DB 테이블의 매핑을 자동화합니다.

### 📌 JPA vs MyBatis
#### 🚩 JPA (Java Persistence API)
> - JPA는 객체 지향 모델(ORM 모델)을 데이터베이스 테이블에 자동으로 매핑시킵니다.
> - 따라서 개발자는 데이터베이스의 구체적인 구현 내용을 염두에 두지 않아도 됩니다.
> - JPA는 Entity 클래스를 사용해서 데이터베이스 테이블을 표현합니다.
> - Entity 클래스에 표현된 데이터베이스 테이블은 JPA provider가 SQL로 변환시킵니다.
> - JPA의 장점은 SQL의 CRUD 작업을 간단한 API로 호출시킬 수 있다는 것입니다.
> - JPA는 구체적인 SQL에 익숙하지 않은 개발자에게 적합할 수 있지만 개발 이해도가 필요합니다.
> - 아래는 JPA의 예시이며 데이터베이스 테이블과 매핑할 Entity 클래스를 정의하였습니다.

``` java
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "members")
public class Member {

    @Id
    private String mem_id;
    private String mem_name;
    private String mem_birth;
    private String mem_gender;

}
```

#### 🚩 MyBatis
> - MyBatis는 ORM이 아닌 SQL 매핑 프레임워크입니다.
> - MyBatis는 IDE에 SQL 쿼리를 직접 작성할 수 있고 이를 객체와 매핑시킵니다.
> - MyBatis는 데이터베이스에 접근하기 위해 JDBC API를 이용합니다.
> - MyBatis에서 dataSource 객체는 DB 연결, sqlSessionFactory는 SQL 세션 관리를 합니다.
> - MyBatis의 장점은 개발자가 SQL을 직접 제어할 수 있다는 것입니다.
> - MyBatis는 SQL을 직접 관리하기 때문에 SQL 및 데이터베이스에 대한 이해가 있어야 됩니다.
> - MyBatis의 사용 예시는 아래와 같습니다.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="kr.com.web.user.mapper.LoginMapper">

	<select id="getLoginUser" parameterType="java.util.Map" resultType="kr.com.web.user.vo.UserVO">
	
		select  mem_id,
				    mem_name,
			    	mem_birth,
				    mem_gender
		from    members
		where	  mem_id = #{memId}
		  AND 	mem_password = #{memPassword}
	
	</select>

</mapper>
```

### 📌 DBCP (Database Connection Pool)
> - MyBatis를 구현하기 위해서는 xml 파일에서 DBCP를 사용해야 됩니다.
> - 필자의 경우 Apache Commons의 DBCP 라이브러리를 사용하였습니다.
> - DBCP는 DB에 대한 연결을 미리 구성해놓았다가 요청이 있을 때마다 사용하는 기술입니다.
> - DBCP 라이브러리의 BasicDataSource 클래스를 사용하면 데이터 소스를 정의할 수 있습니다.
> - 데이터 소스를 미리 정의해두면 DB 접근 요청이 있을 때마다 자동으로 연결됩니다.
> - DB 접근을 완료하면 사용된 연결은 다시 DBCP로 반환됩니다.
> - 아래는 DBCP를 구현한 내용이고 주석에 상세 내용을 작성하였습니다.

``` xml
<!-- Bean이 종료되면 close 메서드를 호출하여 리소스 정리 -->
<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource" 
destroy-method="close">
  <!-- 사용할 JDBC 드라이버 지정 -->
  <property name="driverClassName" value="org.mariadb.jdbc.Driver" />
  <!-- DB 서버 위치와 JDBC URL 제공 -->
  <property name="url" value="jdbc:mariadb://localhost:13306/boot_web" />
  <!-- DB 접속에 필요한 아이디 -->
  <property name="username" value="root" />
  <!-- DB 접속에 필요한 비밀번호 -->
  <property name="password" value="0000" />
</bean>

```

### 📌 @Repository vs @Mapper
> - @Repository와 @Mapper는 데이터베이스와의 상호작용을 돕는 어노테이션입니다.
> - @Repository는 JPA, @Mapper는 MyBatis에 주로 적용됩니다.
> - @Repository는 DAO 클래스를 나타내고 해당 클래스의 인스턴스를 Bean으로 자동 등록합니다.
> - @Mapper가 선언된 인터페이스는 MyBatis가 SQL 세션을 통해 자동으로 구현체를 생성합니다.
> - 아래는 @Repository와 @Mapper 어노테이션의 사용 예시입니다.

#### 🚩 @Repository 사용 예시
``` java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    @Autowired
    private EntityManager entityManager;

    public User findUserById(String mem_id) {

        return entityManager.find(User.class, mem_id);

    }

}
```

#### 🚩 @Mapper 사용 예시
``` java
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import kr.com.web.user.vo.UserVO;

@Mapper
public interface LoginMapper {
	
	UserVO getLoginUser(Map<String, Object> param) throws Exception;

}
```

<br>

### 🔔 View
### 📌 ViewResolver
> - DipatcherServlet은 Controller로부터 전달받은 View 이름을 ViewResolver에 전달합니다.
> - ViewResolver는 전달받은 View 이름을 토대로 View 렌더링에 필요한 객체를 찾아 리턴합니다.
> - ViewResolver의 View Template 탐색 메커니즘과 관련된 개념은 아래와 같습니다.

### 📌 prefix-suffix
> - ViewResolver에서 prefix는 View의 경로를 안내할 때 사용되는 접두사입니다.
> - ViewResolver에서 suffix는 View 템플릿의 파일 확장자를 지시하는 접미사입니다.
> - 예를들어 suffix를 .jsp로 설정하면 ViewResolver는 jsp 파일을 탐색합니다.
> - 아래는 ViewResolver에서의 prefix 및 suffix 이용 방법입니다.

### 📌 ViewResolver & prefix-suffix
> - ViewResolver는 View의 이름과 맞는 적절한 View 템플릿을 탐색하는 기능을 수행합니다.
> - ViewResolver의 탐색 방식 중 하나는 prefix와 suffix를 이용하는 것입니다.
> - prefix는 View 템플릿의 경로, suffix는 View 템플릿의 파일 확장자를 지정할 수 있습니다.
> - 아래는 prefix와 suffix의 활용 예시입니다.

``` xml
  <beans:bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <beans:property name="order" value="2" />
    <beans:property name="prefix" value="/WEB-INF/views/" />
    <beans:property name="suffix" value=".jsp"/>
  </beans:bean>
```

### 📌 View Template
> - View Template이란 사용자에게 보여지는 인터페이스를 동적으로 구성하는 파일의 형식입니다.
> - 대표적으로 Thymeleaf와 JSP가 있고 Thymeleaf는 .html 파일, JSP는 .jsp 파일을 사용합니다.

#### 🚩 Thymeleaf
> - Thymeleaf는 현대적인 서버 사이드 기술이며 HTML에서의 사용에 최적화되어 있습니다.
> - Thymeleaf는 Spring에 통합된 기술이고 Spring의 보안, 폼 처리 기능 등을 수행합니다.
> - Thymeleaf는 HTML 파일에 입력되기 때문에 디자이너와 개발자 간의 협업이 용이한 편입니다.
> - Thymeleaf는 Thymeleaf Standard Expression Language를 사용합니다.
> - Thymeleaf Standard EL은 중괄호를 이용한 문법이며 이는 Java의 EL과 유사합니다.
> - Thymeleaf의 사용 예시는 아래와 같습니다.

``` html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Page</title>
</head>
<body>
    <h1>Thymeleaf Test</h1>
    <p th:text="'Hello, ' + ${mem_name} + '!'">Hello, User!</p>
</body>
</html>
```

#### 🚩 JSP
> - JSP 역시 서버 사이드 기술이고 HTML, CSS, JavaScript, Java 문법 등으로 구성됩니다.
> - JSP는 태그 기반의 HTML 코드 안에 Java 코드를 입력하는 것이 특징입니다.
> - 그런데 JSP 내부에 Java 코드를 입력하는 것은 복잡하다는 문제가 있습니다.
> - JSTL은 이러한 문제를 보완하였고 간편한 Java 코드 입력을 위해 EL 문법을 사용합니다.
> - JSP는 Java Enterprise Edition에서 지원됩니다.
> - JSP에 대한 예시는 아래와 같습니다.
> - <a href="https://kim-src.github.io/posts/Spring-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-JSP,-JSTL,-Servelet,-MVC-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B4%80%EA%B3%84/#-jsp-java-server-page">JSP에 대한 더 자세한 설명은 링크된 글</a>에 잘 작성되어 있습니다.

``` jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Insert title here</title>
</head>
<body>
	<div>
		<h4>${param.myName}</h4>
	</div>
	<div>
		<h4>${param.myAge}</h4>
	</div>
	<c:forEach var="item" items="${paramValues.hobby}">
		<div>
			<h4>${item}</h4>
		</div>
	</c:forEach>
</body>
</html>
```

### 📌 out 객체
> - out 객체는 Java에서 사용되는 PrintWriter 타입의 내장 객체입니다.
> - out 객체는 JSP 환경에서 생성되며 클라이언트에 데이터를 전송하는 데 사용됩니다.
> - out 객체는 내부적으로 Response 객체와 연결되어 있습니다.
> - 그래서 별도의 객체 생성 없이 HTML이나 텍스트를 직접적으로 출력할 수 있습니다.
> - 아래는 JSP에서의 out 객체 사용 예시입니다.

``` jsp
<%
  out.println("JSP 학습");
%>
```

<br>

### 🔔 Controller
### 📌 Parameter 객체
> - Parameter 객체에는 클라이언트(브라우저 등)로부터 전달받은 데이터가 포함됩니다.
> - Parameter 객체에 담긴 데이터는 Key-Value 형태로 저장됩니다.
> - 해당 데이터는 URL의 queryString이나 폼 데이터를 통해 서버로 전달됩니다.
> - 이러한 데이터에 접근하기 위해서는 request.getParameter 등의 메서드를 사용해야 됩니다.
> - 참고로 queryString이란 URL의 일부이며 URL에서 '?' 기호로 시작됩니다.
> - 예를들면 'https://www.example.com/search?id=goldman&score=90'으로 표현됩니다.
> - 아래는 Servlet에서 Parameter에 접근하는 예시입니다.

#### 🚩 Parameter 객체 사용 예시

``` java
String userId = request.getParameter("userId");
String userPw = request.getParameter("userPw");
```

### 📌 Attribute 객체
> - Attribute 객체는 서로 다른 콘텍스트끼리 데이터를 공유할 때 사용됩니다.
> - Attribute 객체에 담긴 데이터는 Key-Value 형태로 저장됩니다.
> - Attribute는 데이터를 저장하고 관리하는 하나의 메커니즘입니다.
> - Attribute 객체는 요청, 세션, 애플리케이션 스코프(콘텍스트)에서 사용할 수 있습니다.
> - Attribute 객체는 각각의 스코프 별 생명주기마다 상이합니다.
> - Attribute 객체의 데이터는 서버에 저장되며 클라이언트는 해당 데이터에 접근할 수 없습니다.
> - Attribute 객체의 데이터는 서버에 저장되기 때문에 데이터 유출 우려가 적은 편입니다.

#### 🚩 Attribute 객체 사용 예시
> - Attribute 객체를 구현해봄으로써 보다 직관적으로 이해해보겠습니다.
> - Request, Session, Application 콘텍스트마다 데이터 접근 방식이 상이합니다.
> - 아래는 Servlet에서의 요청, 세션, 애플리케이션 스코프의 Attribute 설정 및 사용 방법입니다.

``` java
/* Request Attribute */
// 요청이 처리되는 동안 Attribute를 통해 생명주기 동안 여러 컴포넌트가 데이터를 공유됨

// Request Attribute 설정 예시
request.setAttribute("userId", "score");

// Request Attribute 사용 예시
String userId = (String)request.getAttribute("userId");
System.out.println("User ID = " + userId);


/* Session Attribute */
// 세션이 유지되는 동안 Attribute를 통해 여러 요청과 응답에서 사용자별 데이터를 유지하는 데 사용됨

// Session Attribute 설정 예시
HttpSession session = request.getSession();
session.setAttribute("userCart", shoppingCart);

// Session Attribute 사용 예시
ShoppingCart cart = (ShoppingCart) session.getAttribute("userCart");
System.out.println("Items in cart: " + cart.getItemCount());


/* Application Attribute */
// 웹 애플리케이션이 작동되는 동안 Attribute를 통해 애플리케이션 수준의 데이터 등을 저장하는 데 사용됨

// Application Attribute 설정 예시
ServletContext context = request.getServletContext();
context.setAttribute("activeUsersCount", 100);

// Application Attribute 사용 예시
Integer activeUsersCount = (Integer) context.getAttribute("activeUsersCount");
System.out.println("Active Users: " + activeUsersCount);
```

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
> - 그리고 Request에 포함되는 Cookie 등의 정보가 필요할 때 사용됩니다.
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
> - Response 객체에는 클라이언트에게 전송할 정보를 저장할 수 있습니다.
> - 예를들면 Cookie, JWT 등을 Response에 포함시켜서 클라이언트에게 전달할 수 있습니다.
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
  <userName>김두식</userName>
  <userAge>30</userAge>
  <isStudent>false</isStudent>
</userInfo>
```

### 📌 Cookie & Session 내용 요약
> - HTTP는 기본적으로 상태를 유지하지 않는 Stateless 프로토콜입니다.
> - 상태를 유지하지 않는다는 것은 클라이언트의 전/후 요청 관계를 구분하지 못한다는 뜻입니다.
> - 이를 보완하기 위해서 세션과 쿠키가 개발되었고 이들은 클라이언트의 상태 정보를 관리합니다.
> - Cookie와 Session은 데이터를 저장하는 저장소입니다.
> - Cookie는 브라우저에 파일 형태로 저장되고 Session은 서버에 객체 상태로 저장됩니다.
> - Request 객체가 생성되면 Request 객체는 Cookie에 저장되어 서버에 전송됩니다.
> - 서버의 자원은 한정적이기 때문에 Session 정보를 Cookie에 저장하는 방법이 좋습니다.
> - 왜냐하면 Session이 담긴 Session Cookie를 사용자가 접속할 때마다 응답할 수 있기 때문입니다.
> - Session Cookie의 예시로는 '로그인 정보'가 있습니다.
> - 개발자 도구(F12 등)의 Cookie 탭에서 Session을 제거하면 로그인 상태가 해제됩니다.
> - 아래는 보다 상세한 Cookie와 Session에 대한 내용입니다.

#### 🚩 Cookie
> - 쿠키는 클라이언트 측(사용자)에서 상태 정보를 저장하는 데이터 조각입니다.
> - 서버는 응답 헤더의 Set-Cookie를 통해 세션 ID 등을 쿠키 형태로 클라이언트에게 전송합니다.
> - 클라이언트는 서버에 요청을 보낼 때마다 보유중인 쿠키 정보를 요청 헤더에 포함시킵니다.
> - 쿠키의 대표적인 역할은 아래와 같습니다.
>    - 세션 관리 : 로그인 상태, 장바구니 현황 등의 실행 상태를 저장함
>    - 개인화 : 사용자 선호, 테마, 언어 등의 사용자 경험을 토대로 설정 내용을 저장함
>    - 트래킹 : 사용자의 행동, 방문 패턴 등을 저장함
> - 쿠키는 클라이언트가 사용한 브라우저에 저장되고 공개되기 때문에 보안에 취약한 편입니다.
> - 대신 트래킹 등 쿠키의 역할을 활용하여 개별 사용자에 맞는 콘텐츠 제공이 가능합니다.
> - 그래서 서비스의 목적과 내용에 따라 Cookie와 Session을 알맞게 사용해야 됩니다.

#### 🚩 Session
> - 세션은 서버 측에서 클라이언트의 상태 정보를 저장합니다.
> - 서버는 세션 ID를 생성하고 생성된 ID를 쿠키 등으로 클라이언트에게 전달합니다.
> - 클라이언트의 경우 동일한 서버에 요청할 때마가 전달받은 세션 ID를 사용할 수 있습니다.
> - 서버는 클라이언트에게 부여한 세션 ID를 통해 사용자의 상태를 조회하고 관리할 수 있습니다.
> - 세션의 예시로, 포털 사이트의 경우 사용자의 로그인 정보를 세션에 담을 수 있습니다.
> - 세션은 서버에 저장되기 때문에 쿠키보다는 보안이 유리한 편입니다.
> - 세션은 서버에 저장되기 때문에 용량 제한이 이론상 없지만 쿠키는 4KB 정도입니다.
> - 보안성은 세션이 쿠키보다 더 좋지만 세션을 남용할 경우 서버 리소스가 부족할 수 있습니다.

#### 🚩 Cookie & Session 소멸 방법
> - Cookie와 Session에 포함된 데이터는 다양한 방법으로 소멸시킬 수 있습니다.
> - 아래 예시는 대표적인 내용이며 서버 환경 설정이나 사용자 요구 사항에 따라 상이합니다.

```
/* Cookie 소멸 방법 */
- 1. 브라우저 종료 : Session Cookie의 경우 브라우저를 종료하면 자동으로 소멸됩니다.
- 2. 만료시간 설정 : JavaScript 등에서 Cookie의 만료 시간을 과거로 설정하면 브라우저가 Cookie 정보를 자동으로 삭제합니다.
- 3. 직접 삭제 : JavaScript 또는 서버 사이드에 설정된 코드를 이용하여 명시적으로 Cookie를 소멸시킬 수 있습니다.

/* Session 소멸 방법 */
- 1. Cookie 삭제 : Session 객체를 담은 Session Cookie를 소멸시키면 Session과의 연결이 끊기고 Session 역시 소멸 됩니다.
- 2. 서버 재시작 : 서버를 리부팅하면 메모리에 저장되어 있던 Session 데이터를 소멸시킬 수 있습니다.
- 3. 만료시간 설정 : 일정 시간 동안 사용자의 활동이 없을 경우 서버 사이드에서 자동으로 Session을 종료하도록 설정할 수 있습니다.
- 4. 변수 초기화 : Session 객체에서 정의된 변수를 초기화하는 행위는 Session 데이터를 소멸시키는 행위입니다.
- 5. Session 파괴 : 각각의 프로그래밍 언어네서 destroy 메서드 등을 이용하면 Session 자체를 파괴시킬 수 있습니다.
```

####  🚩 Cookie & Session 고급 학습
> - Cookie가 클라이언트 사이드에 저장되어 있으면 서버의 로딩 시간이 감축됩니다.
> - 왜냐하면 서버가 클라이언트에게 변경된 정보만 전송하면 되는 상태이기 때문입니다.
> - Cookie는 브라우저에 파일 형태로 저장되며 공개되기 때문에 보안에 불리합니다.
> - Cookie의 보안을 강화하기 위해 https, HttpOnly, Secure 등이 사용됩니다.
> - Session은 서버 사이드에 데이터를 저장하기 위한 목적으로 존재하는 것이 아닙니다.
> - Session은 클라이언트와 서버 사이의 통신을 식별하기 위해 개발된 것입니다.

#### 🚩 HttpOnly flag
> - HttpOnly는 Cookie의 보안을 강화시킬 수 있는 플래그이며 Cookie를 생성할 때 설정합니다.
> - Cookie에 HttpOnly를 설정하면 클라이언트는 웹 서버를 거쳐야만 데이터에 접근 가능합니다.
> - HttpOnly는 주로 JavaScript 등을 통한 클라이언트 사이드 공격을 방지하기 위해 사용됩니다.
> - 예를들어 XSS는 Cookie를 탈취하는 클라이언트 사이드 스크립트 공격의 대표적인 예시입니다.
> - HttpOnly가 설정된 Cookie는 오로지 HTTP 헤더가 포함된 요청과 응답에서만 사용됩니다.
> - 즉, HTTP 통신이 활성화됐을 때만 Cookie에 저장된 데이터에 접근이 가능해집니다.
> - 참고로 플래그란 특정 조건이나 상태를 나타내기 위해 사용되는 변수 또는 식별자를 뜻합니다.
> - HttpOnly 플래그 사용 방법 예시는 아래와 같습니다.

```
Set-Cookie: sessionid=kimsrc; HttpOnly
```

#### 🚩 Secure flag
> - Secure 플래그 역시 HttpOnly와 비슷하게 Cookie의 보안을 강화시킬 수 있는 플래그입니다.
> - Secure는 서버와 트래픽 사이에서 정보를 탈취하는 중간자 공격 등을 방지하는 목적입니다.
> - 따라서 Secure는 금융 정보나 개인 식별 정보 서비스에 있어 필수적이라고 할 수 있겠습니다.
> - Secure와 HttpOnly 플래그를 함께 사용하면 Cookie의 보안성을 증대시킬 수 있습니다.
> - Secure 및 HttpOnly 플래그를 함께 사용하는 방법에 대한 예시는 아래와 같습니다.

```
Set-Cookie: sessionid=kimsrc; HttpOnly; Secure
```

### 📌 URI vs URL
> - URI와 URL은 주로 클라이언트(브라우저 등)가 서버로 전송하는 HTTP 요청으로 사용됩니다.
> - 아래는 URI와 URL의 개념이며 참고로 URL 개념은 URI에 포함됩니다.

#### 🚩 URI (Uniform Resource Identifier)
> - URI는 인터넷에서 리소스를 식별하는 데 사용되는 문자열입니다.
> - URI는 리소스를 나타내는 데 필요한 모든 정보를 포함하는 포괄적인 개념입니다.
> - URI의 특징은 리소스의 위치를 구체적으로 표현한 것은 아니라는 것입니다.
> - 예를들면 URI 문자열에 프로토콜, 호스트, 포트 등이 있을 수도 있고 없을 수도 있습니다.

#### 🚩 URL (Uniform Resource Locator)
> - URL은 웹 상의 리소스가 실제로 위치하는 주소를 지시하는 데 사용되는 문자열입니다.
> - URL의 특징은 리소스의 정확한 위치를 지정한다는 것입니다.
> - URL의 단점은 해당 위치에 리소스가 존재하지 않을 경우 404 에러 등이 응답된다는 것입니다.
> - URL의 기본 구성은 프로토콜, 호스트, 포트, 경로, queryString 등을 대부분 포함합니다.

<br>
<br>
<br>
