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
> - 클라이언트 단은 서버 단에 간섭할 수 없지만 서버 단은 클라이언트 단에 간섭할 수 있습니다.
> - 만일 JSP에서 뷰포트만 구현할 목적이라면 Java 코드는 필요가 없습니다.
> - 참고로 MVC, JSP, Servlet의 관계는 링크된 글에 작성되어 있습니다.

### 📌 JSP 구성
> - JSP의 기본적인 구성은 화면, 처리, 결과로 구분됩니다.
> - 화면(view) 페이지는 브라우저의 뷰포트에 표시되는 클라이언트 사이드를 담당합니다.
> - 처리(service) 페이지는 로그인 요청 처리 등의 화면 구성에 대한 처리를 합니다.
> - 결과(result) 페이지는 로그인 페이지의 성공 또는 실패 등 처리 결과를 표시합니다.
> - JSP 하나로 웹 페이지와 서버 페이지를 생성 및 관리할 수 있으며 이는 장점이자 단점입니다.

### 📌 JSP 구현 예시
> - 아래는 JSP를 구현한 내용입니다.
> - 기본적인 HTML 코드 내에 '<% %>'를 이용하여 Java 코드를 작성하였습니다.

``` jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=<device-width>, initial-scale=1.0">
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
### 📌 Servlet 구성
### 📌 Servlet 구현 예시

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
		// TODO Auto-generated method stub
		super.init(config);
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		process(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
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

### 🔔 MVC 패턴 (Model-View-Controller)
### 📌 JSP & Servlet
> - JSP는 HTML/CSS 코드 안에 Java 코드를 '<% %>' 내부에 삽입합여 웹 페이지를 구현합니다.
> - 즉, JSP는 디자인 안에 Java 코드를 삽입한 형태입니다.
> - Servlet은 Java 코드 안에 HTML/CSS 코드를 태그 형태로 삽입하여 웹 페이지를 구현합니다.
> - 즉, Servlet은 Java 코드 안에 디자인을 삽입한 형태입니다.
> - 그런데 Servlet은 불필요한 Java 코드가 낭비되었고 JSP는 안정성의 문제가 있습니다.

### 📌 JSP & Servlet 단점
> - Servlet은 디자인 구현을 위해서도 Java 코드를 입력해야 된다는 불편함이 있습니다.
> - JSP는 서버/클라이언트단 구현이 동시에 이뤄지기 때문에 유지/보수가 곤란합니다.
> - 또한 JSP에 작성된 소스 코드는 개발자 페이지 등에 의해 노출되기 쉽습니다.
> - 따라서 JSP를 사용하면 서버 및 데이터베이스 정보의 유출 가능성이 커집니다.
> - 또한 JSP에서 구현한 웹 페이지는 JSP 파일로만 이동된다는 문제도 있습니다.

### 📌 MVC 패턴 소개
> - MVC 패턴은 JSP 및 Servlet의 단점을 보완하고자 개발되었습니다.
> - MVC는 Model, View, Controller로 구분되며 이를 패턴이라고 합니다.
> - Model은 데이터베이스, View에는 JSP, Controller에는 Servlet을 포함합니다.
> - 각각의 MVC는 하나의 서버로 관리된다는 것이 MVC 패턴의 장점입니다.

### 📌 MVC 실제 위치
> - 각각의 MVC의 일반적인 위치는 아래와 같습니다.
> - Controller : root/src/main/java/co/code/mvc/modelname.java
> - View : root/src/main/webContent/WEB-INF/views/jsp
> - Model : 데이터베이스 연결

<br>
<br>
<br>
