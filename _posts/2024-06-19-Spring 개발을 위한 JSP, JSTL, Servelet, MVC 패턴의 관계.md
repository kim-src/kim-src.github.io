---
title: Spring 개발을 위한 JSP, JSTL, Servlet, MVC 패턴의 관계
date: 2024-06-19 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Spring, Fundamental, JSP, JSTL, Servlet, MVC, Spring MVC, Spring Framework]
---

<!-- 2024-06-18 글 작성 시작; 2024-06-99 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-06-10,12 강의)</h2>
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

<br>

### 🔔 Servlet
### 📌 Servlet 소개
> - Servlet은 웹 서버 상에서 실행되는 프로그램으로 웹 요청 및 응답을 생성하는 데 사용됩니다.
> - Servlet은 클라이언트의 요청을 받아 내부 로직에 따라 처리한 후 결과를 반환합니다.
> - Servlet은 MVC 구조에서 클라이언트와의 상호작용을 담당하는 Controller 역할을 합니다.

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

### 🔔 MVC 구조/패턴 (Model-View-Controller)
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

### 📌 MVC 구조 소개
> - MVC 구조는 JSP 및 Servlet의 단점을 보완하고자 개발되었습니다.
> - MVC의 Model은 데이터베이스, View에는 JSP, Controller에는 Servlet을 주로 사용합니다.
> - MVC 구조는 웹 애플리케이션의 유지보수성과 확장성을 높이기 위해 개발된 것입니다.
> - MVC 구조는 각 요소가 명확하게 분리되어 있기 때문에 관리가 용이합니다.

### 📌 MVC 실제 위치
> - 각각의 MVC의 일반적인 위치는 아래와 같습니다.
> - Controller : root/src/main/java/co/code/mvc/ControllerName.java
> - View : root/src/main/webapp/WEB-INF/views/jsp/ViewName.jsp
> - Model : Java 클래스에서 데이터베이스 연결 로직 처리

### 📌 Spring MVC
> - Spring Framework에서는 MVC, Boot, Security, Data, WebFlux 등의 기능을 지원합니다.
> - 이들 중 Spring MVC는 전통적인 웹 애플리케이션 개발 기술 중 하나입니다.
> - Spring MVC는 Java EE의 Servlet API를 기반으로 구축된 웹 프레임워크입니다.
> - Spring MVC는 DispatcherServlet이라는 중앙 서블릿을 사용하여 웹 요청을 처리합니다.
> - DispatcherServlet은 모든 웹 요청을 받아 적절한 컨트롤러로 라우팅하는 역할을 수행합니다.

<br>
<br>
<br>
