---
title: Spring 개발을 위한 JSP, JSTL, Servlet, MVC 패턴의 관계
date: 2024-06-20 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Spring, Fundamental, JSP, JSTL, Servlet, MVC, Spring MVC, Spring Framework]
---

<!-- 2024-06-18 글 작성 시작; 2024-06-20 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-06-10,12,17,18 강의)</h2>
> - Tool :  
<img alt="Spring" src="https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" />
<img alt="Spring Tool Suite 4" src="https://img.shields.io/badge/-Spring%20Tool%20Suite%204-6DB33F?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 JSP (Java Server Page)
### 📌 JSP 소게
> - JSP는 HTML, CSS, JavaScript, Java 언어가 복합적으로 작성된 페이지입니다.
> - JSP는 클라이언트 사이드(HTML, CSS, JavaScript)와 서버 사이드(Java)로 구분됩니다.
> - JSP에서는 Java 코드를 서버에서 실행하기 때문에 웹 페이지를 동적으로 생성할 수 있습니다.
> - 즉, 서버단에서는 클라이언트단에 보낼 HTML을 동적으로 생성할 수 있습니다.
> - 만일 JSP에서 뷰포트만 구현할 목적이라면 Java 코드 없이 HTML만으로도 구현 가능합니다.
> - 참고로 <a href="https://kim-src.github.io/posts/Spring-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-JSP,-JSTL,-Servelet,-MVC-%ED%8C%A8%ED%84%B4%EC%9D%98-%EA%B4%80%EA%B3%84/#-mvc-%ED%8C%A8%ED%84%B4-model-view-contraoller">MVC, JSP, Servlet의 관계는 링크된 글</a>에 작성되어 있습니다.

### 📌 JSP 구성
> - JSP의 기본적인 구성은 화면, 처리, 결과로 구분됩니다.
> - 화면(view) 페이지는 클라이언트 사이드이며 브라우저의 뷰포트에 표시되는 내용입니다.
> - 처리(service) 페이지는 서버 사이드에서 데이터 처리와 비즈니스 로직을 담당합니다.
> - 결과(result) 페이지는 로그인 페이지의 성공 또는 실패 등 처리 결과를 표시합니다.
> - JSP 하나로 웹 페이지와 서버 페이지를 생성 및 관리할 수 있으며 이는 장점이자 단점입니다.

### 📌 JSP 구현 예시
> - 아래는 JSP를 구현한 예시입니다.
> - 기본적인 HTML 코드 내에 '<% %>'를 이용하여 Java 코드를 작성하였습니다.

``` jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Insert title here</title>
</head>
<body>
	<%
		String myName = request.getParameter("myName");
		int myAge = Integer.parseInt(request.getParameter("myAge"));
		String[] hobbies = request.getParameterValues("hobby");
		
		out.print("<div><h4>" + myName + "</h4></div>");
		out.print("<div><h4>" + myAge + "</h4></div>");
		
		if(hobbies != null) {
			for(String hobby : hobbies) {
				out.print("<div><h4>" + hobby + "</h4></div>");
			}
		}
	%>
</body>
</html>
```

### 📌 JSTL (Java Server Tag Library)
> - JSTL과 El (Expression Language)은 JSP에 활용되는 주요 기술입니다.
> - JSTL은 말 그대로 태그 라이브러리의 집합이고 JSP에서 로직이 수행될 수 있게 합니다.
> - JSTL의 장점은 JSP에서 복잡한 Java 코드의 역할을 EL로 간단하게 처리할 수 있다는 것입니다.
> - JSTL을 사용할 때는 JSP 상단에 'prefix="c"'를 이용해서 JSTL임을 명시해야 됩니다.
> - EL은 Java의 객체와 컬렉션에 포함되는 접근하는 표현식 언어이며 '${}'로 표현됩니다.
> - 참고로 Spring Boot에서는 JSTL이 아닌 타임리프(Thymeleaf) 템플릿을 사용합니다.
> - 아래는 JSTL의 예시입니다.

#### 🚩 prefix
> - JSTL에서의 prefix는 태그를 식별하기 위해 사용되는 접두사입니다.
> - taglib에서 prefix가 'c'인 이유는 관례적으로 'core'의 첫 글자를 사용하기 때문입니다.
> - 참고로 taglib는 JSP에서 추가적으로 사용할 수 있는 태그를 제공히는 라이브러리입니다.

#### 🚩 JSTL 사용 예시
> - 아래의 예시의 JSP는 할당된 name, age, hobby 값을 뷰포트에 표시하는 기능을 수행합니다.

``` jsp
<!-- 기존 JSP 방식 -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Insert title here</title>
</head>
<body>
	<%
		String myName = request.getParameter("myName");
		int myAge = Integer.parseInt(request.getParameter("myAge"));
		String[] hobbies = request.getParameterValues("hobby");
		
		out.print("<div><h4>" + myName + "</h4></div>");
		out.print("<div><h4>" + myAge + "</h4></div>");
		
		if(hobbies != null) {
			for(String hobby : hobbies) {
				out.print("<div><h4>" + hobby + "</h4></div>");
			}
		}
	%>
</body>
</html>
```

``` jsp
<!-- JSTL 사용 -->
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

<br>

### 🔔 Servlet
### 📌 Servlet 소개
> - Servlet은 웹 서버 상에서 실행되는 프로그램으로 웹 요청 및 응답을 생성하는 데 사용됩니다.
> - Servlet은 클라이언트의 요청을 받아 내부 로직에 따라 처리한 후 결과를 반환합니다.
> - Servlet은 MVC 패턴에서 클라이언트와의 상호작용을 담당하는 Controller 역할을 합니다.

### 📌 Servlet 사용 방법
> - Servlet은 HTTP 프로토콜 통신을 위해 Java의 HttpServlet API를 상속 받아 사용합니다.
> - 웹 서버가 Servlet을 호출하기 위해서는 Servlet이 URL과 연결되어 있어야 됩니다.
> - Servlet과 URL의 연결 과정을 Servlet Mapping이라고 합니다.
> - Servlet이 실제로 작동되려면 웹 서버에 등록되어야 합니다.
> - 웹 서버에 Servlet을 등록하는 기존 방법은 web.xml에 직접 등록하는 것이었습니다.
> - Servlet 3.0부터는 '@WebServlet' 등의 어노테이션만 부여해도 웹 서버에 등록이 가능합니다.

### 📌 Servlet 주요 메서드
> - Servlet이 잘 작동되려면 아래 네 가지 정도의 주요 메서드를 사용해야 됩니다.
>    - init() : Servlet 초기화
>    - doGet() : 클라이언트로부터 GET 요청 수신 시 실행될 코드
>    - doPost() : 클라이언트로부터 POST 요청 수신 시 실행될 코드
>    - destroy() : Servlet 자원 소멸 및 사용 종료

### 📌 Servlet 구현 예시
> - 아래는 Servlet을 구현한 예시입니다.
> - 주요 메서드 중 doGet, doPost, init 메서드를 사용하였습니다.
> - process 메서드를 정의하여 GET 및 POST 요청을 동시에 수신할 수 있도록 설정하였습니다.
> - HTML 태그는 Servlet에 내장된 PrintWriter 객체의 print 메서드로 출력하였습니다.

``` java
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// 배열 형태로 Servlet을 등록 받음
@WebServlet(urlPatterns = {"/hello"},
			initParams = {
					@WebInitParam(name="myName", value="홍길동"),
					@WebInitParam(name="myAge", value="30")
			})
public class HelloServlet extends HttpServlet {

	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}

	// request 메서드 중 get, post를 동시에 받을 수 있게 설정함
	public void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		// UTF-8이 적용된 상태에서 PrintWriter가 실행되어야 됨
//		resp.setContentType("text/html; charset=utf-8");
		// 더욱 완벽한 방법
		resp.setCharacterEncoding("utf-8");
		PrintWriter out = resp.getWriter();
		
		String myName = this.getInitParameter("myName");
		String myAge = this.getInitParameter("myAge");
		
		out.print("<html>");
		out.print("	<body>");
		out.print("		<span>이름 : " + myName + "</span><br>");
		out.print("		<span>나이 : " + myAge + "</span><br>");
		out.print("	</body>");
		out.print("</html>");
	}

}
```

<br>

### 🔔 MVC 패턴 (Model-View-Controller)
### 📌 JSP & Servlet
> - JSP는 HTML 코드 안에 Java 코드를 '<% %>' 태그를 사용하여 삽입하고 웹 페이지를 구현합니다.
> - 즉, JSP는 디자인 안에 Java 코드를 삽입한 형태입니다.
> - Servlet은 Java 코드 안에 HTML 태그 등을 작성하여 웹 페이지를 구현합니다.
> - 즉, Servlet은 Java 코드 안에 디자인을 삽입한 형태입니다.
> - 한편 JSP의 장점이자 단점은 디자인과 코드가 혼합되어 있어서 관리 난이도가 있다는 것입니다.

### 📌 JSP & Servlet 단점
> - Servlet에서 디자인을 구현하려면 Java 코드도 함께 입력해야 된다는 불편함이 있습니다.
> - 게다가 디자인을 변경하려면 Java 코드도 함께 변경해야 됩니다.
> - JSP는 프레젠테이션 로직과 비즈니스 로직이 혼합되어 있기 때문에 관리하기 복잡합니다.
> - 또한 JSP는 서버 설정이나 코드 작성 방식에 따라 정보 유출 가능성이 있습니다.

### 📌 MVC 패턴 소개
> - MVC 패턴은 JSP 및 Servlet의 단점을 보완하고자 개발되었습니다.
> - MVC의 Model은 데이터, View는 Thymeleaf/JSP, Controller는 Servlet을 주로 사용합니다.
> - MVC 패턴은 웹 애플리케이션의 유지보수성과 확장성을 높이기 위해 개발된 것입니다.
> - MVC 패턴은 각 요소가 명확하게 분리되어 있기 때문에 관리가 용이합니다.

### 📌 MVC 패턴 역할
> - MVC 패턴을 구성하는 요소의 각각의 역할과 실제 위치는 아래와 같습니다.
> - Model : Model은 getter/setter를 포함하는 클래스로 데이터의 상태를 저장하고 관리합니다.
> - View : View는 모델을 통해 전달된 데이터를 사용자가 이해할 수 있는 형태로 렌더링합니다.
> - Controller : 사용자의 입력을 처리하고 모델을 업데이트하고 적절한 뷰를 선택합니다.
>    - Controller : root/src/main/java/package/ControllerName.java
>    - View : root/src/main/webapp/WEB-INF/views/jsp/ViewName.jsp
>    - Model : root/src/main/java/package/ModelName.java

### 📌 Controller 
> - Controller에서 페이지 이동을 처리하는 방법으로는 주로 forward 또는 redirect가 사용됩니다.
> - forward는 Request 객체, redirect는 Response 객체에 각각 포함된 메서드입니다.
> - forward는 사용자가 원하는, redirect는 서버가 원하는 목적지로 이동시킵니다.
> - forward는 현재의 Request/Response 객체를 그대로 전달하기에 데이터가 그대로 유지됩니다.
> - redirect는 새로운 요청이 발생되는 것이기에 원래의 요청/응답이 유지되지 않습니다.
> - forward는 상담 센터에 대표 전화로 연락을 취하면 전화를 내부적으로 돌리는 것과 비슷합니다.
> - redirect는 전화 번호가 바뀌어 새로운 번호로 다시 연락하라는 안내를 받는 것과 비슷합니다.

### 📌 WEB-INF
> - WEB-INF 디렉토리는 클라이언트가 JSP에 직접적으로 접근하지 못하게 차단할 수 있습니다.
> - 웹 또는 애플리케이션 서버에 의한 접근은 가능하지만 HTTP를 통한 접근은 허용되지 않습니다.
> - 즉, JSP 파일 등의 보안을 강화하기 위해서는 WEB-INF 디렉토리 아래에 저장해야 됩니다.
> - 참고로 INF는 information의 축약어입니다.

### 📌 Spring MVC
> - Spring Framework에서는 MVC, Boot, Security, Data, WebFlux 등의 기능을 지원합니다.
> - 이들 중 Spring MVC는 전통적인 웹 애플리케이션 개발 기술 중 하나입니다.
> - Spring MVC는 Java EE의 Servlet API를 기반으로 구축된 웹 프레임워크입니다.
> - Spring MVC는 DispatcherServlet이라는 중앙 서블릿을 사용하여 웹 요청을 처리합니다.
> - DispatcherServlet은 모든 웹 요청을 받아 적절한 컨트롤러로 라우팅하는 역할을 수행합니다.

### 📌 MVC 패턴의 발전 과정
> - 초기 웹 페이지는 JSP와 Servlet을 이용하여 개발되었습니다.
> - 이후 JSTL의 커스텀 태그를 사용하면서 JSP 페이지의 로직 처리를 단순화하였습니다.
> - 이후 JSP와 Servlet의 복잡한 혼합 구조를 단순화 한 MVC 패턴이 개발되었습니다.
> - 초기 MVC 1 패턴은 주로 하나의 Servlet이 여러 개의 JSP 뷰와 상호작용하는 형태였습니다.
> - 그렇다보니 애플리케이션 규모가 커질수록 세션 처리가 빈번해지는 등 비효율적이었습니다.
> - 이후 MVC 2 패턴은 모든 요청을 DispatcherServlet이 처리하게 설정하였습니다.
> - MVC 2 이후 애플리케이션의 세션 관리가 단순화되면서 유지/보수가 용이해졌습니다.

### 📌 Spring 동작 원리
> - 아래 이미지는 Spring이 작동되는 원리에 대한 모식도입니다.
> - <a href="https://kim-src.github.io/posts/Spring-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC,-HTTP-%EC%9A%94%EC%B2%AD-%EB%B0%8F-%EC%9D%91%EB%8B%B5-%EB%A9%94%EC%BB%A4%EB%8B%88%EC%A6%98/">Spring의 작동 원리에 대한 상세한 내용</a>은 링크된 글에 있습니다.

<figure>
	<img src="https://github.com/kim-src/Images/assets/150884526/d40ceaa4-8871-4e4b-a1fd-13c5a277fc17" width="500px" alt="figure">
	<figcaption>Spring 동작 원리</figcaption>
</figure>

<br>
<br>
<br>
