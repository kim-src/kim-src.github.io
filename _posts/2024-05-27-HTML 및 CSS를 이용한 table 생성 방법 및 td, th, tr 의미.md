---
title: HTML 및 CSS를 이용한 table 생성 방법 및 td, th, tr 의미
date: 2024-05-27 18:00:00 +09:00
categories: [1. Fundamental, HTML-CSS-JavaScript]
tags: [Fundamental, HTML, CSS, JavaScript, Frontend, Tag, Head, Body, Semantic Tag, Live Server, IDE, Browser, Plugin]
---

<!-- 2024-05-27 글 작성 시작; 2024-05-27 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-05-20,21 강의)</h2>
> - Tool :  
<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" />
<img alt="Eclipse" src="https://img.shields.io/badge/-Eclipse-2C2255?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 HTML
### 📌 HTML 소개
> - HTML은 HyperText Markup Language의 약자입니다.
> - 웹 페이지의 구조를 정의하는 데 사용되는 주요 언어입니다.
> - HTML은 태그(tag)와 요소(element)로 구분됩니다.
> - 태그는 ```<head></head>, <body></body>, <footer></footer>``` 등을 지칭합니다.
> - 요소는 태그를 포함하는 개념이며 시작 태그, 태그 내부 콘텐츠, 종료 태그로 구성됩니다.
> - 참고로 HTML의 기본적인 문서 구조는 head 및 body 태그로 구분됩니다.

### 📌 head 태그
> - head 태그에는 웹 페이지의 메타 데이터가 포함됩니다.
> - 메타 데이터에는 문서의 인코딩 방식, 반응형 웹 제작을 위한 viewport 속성 등이 포함됩니다.
> - head 태그에 담긴 내용은 주로 웹 브라우저와 검색 엔진에 사용됩니다.
> - 페이지의 내용이나 레이아웃은 body 태그에 포함됩니다.

### 📌 body 태그
> - body 태그에는 웹 브라우저에 표시되는 모든 콘텐츠가 포함됩니다.
> - 콘텐츠에는 텍스트, 이미지, 비디오, 스크립트 등이 포함됩니다.
> - 참고로 footer 태그에는 저작권 정보, 사이트맵 등이 포함됩니다.

### 📌 Semantic tag
> - 시맨틱 태그는 HTML5에서 도입된 태그 집단입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/c6066466-34e4-4136-a059-5ffe31c7bf44" alt="figure">
    <figcaption>시맨틱 태그와 div 태그 비교 (출처 : SEMRUSH)</figcaption>
</figure>

<br>

### 🔔 CSS

<br>

### 🔔 IDE 및 웹 브라우저 이용 방법
### 📌 HTML 코드 작성 방법
> - VS Code는 프론트엔드 개발을 위해 사용할 수 있는 IDE입니다.
> - VS Code에는 프론트엔드와 관련된 HTML, CSS, JavaScript 등의 코드를 작성 가능합니다.
> - VS Code를 실행 후 새 파일을 만들고 제목에 .html을 작성하면 HTML 파일이 됩니다.
> - 파일 생성 후 입력창에 'html' 네 글자를 입력하면 'html:5'를 선택할 수 있는 창이 표시됩니다.
> - 'html:5' 스니펫을 사용하면 HTML5의 기본적인 html 구조가 자동으로 생성됩니다.
> - 참고로 스니펫(Snippet)이란 반복적으로 사용되는 코드 또는 템플릿 등을 의미합니다.

### 📌 HTML 문서 열람 방법
> - VS Code의 장점 중 하나는 플러그인 확장 기능을 사용할 수 있다는 것입니다.
> - 플러그인 중 Live Server는 웹 브라우저에 웹 페이지를 호출시킬 수 있는 기능이 특징입니다.
> - 웹 페이지란 웹 브라우저가 HTML 파일 내용을 토대로 생성한 화면으로 이해하시면 됩니다.
> - live Server 사용 방법은 HTML 코드 입력창에 커서를 두고 Alt + L + O를 누르면 됩니다.
> - <a href="https://kim-src.github.io/posts/VS-Code-extension(%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%ED%99%95%EC%9E%A5-%EA%B8%B0%EB%8A%A5)-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95-%EC%B6%94%EC%B2%9C/">기본적인 VS Code의 플러그인 확장 관련 내용</a>은 링크된 글에 잘 작성되어 있습니다.
> - 참고로 Live Server를 이용하지 않고 웹 페이지를 호출하는 것은 다소 복잡합니다.

<br>

### 🔔 HTML/CSS 코드 실습
### 📌 웹 페이지에 텍스트 표시
> - body 태그 안에 텍스트 콘텐츠를 입력하였습니다.
> - 콘텐츠 작성 후 Alt + Shift + 방향키를 이용하여 텍스트를 쉽게 복사하였습니다.
> - 텍스트와 함께 리스트를 생성하였습니다.
> - 대략적인 리스트(목록)의 종류는 아래와 같습니다.
>    - ul (Unordered List) : 동그라미로 표시되는 순서 없는 목록
>    - ol (Ordered List) : 숫자로 표시되는 순서 있는 목록
>    - li (List Item) : 목록에 따른 각 문단
>    - dl (Description List) : 설명을 작성하기 위한 목록
>    - dt (Definition Term) : 정의할 용어 또는 이름
>    - dd (Definition Description) : 용어(dt)에 대한 설명

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    텍스트입니다.
    텍스트입니다.
    텍스트입니다.

    <div>
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </div>

    <p>
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </p>

    <ul>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ul>

    <ol>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ol>

    <!-- 줄바꿈 태그 br (break) -->
    <br>

    <dl>
        <dt>Text</dt>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
    </dl>
</body>
</html>
```

### 📌 웹 페이지에 색상 표시
> - 텍스트만 있던 페이지에 글자 및 배경 색상을 지정하였습니다.
> - 각각의 특정 태그마다 id, class, name 속성을 달리 지정하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #text1 {
            color: red;
            background-color: skyblue;
        }

        .pTag {
            color: yellow;
            background-color: black;
        }

        ul[name='ulTag'] {
            color: greenyellow;
            background-color: purple;
        }

        .olTag, .dlTag {
            color: skyblue;
            background-color: navy;
        }
    </style>
</head>
<body>
    텍스트입니다.
    텍스트입니다.
    텍스트입니다.

    <div id="text1" class="divTag" name="divTag">
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </div>

    <p id="text2" class="pTag" name="pTag">
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </p>

    <ul id="text3" class="ulTag" name="ulTag">
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ul>

    <ol id="text4" class="olTag" name="olTag">
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ol>

    <!-- 줄바꿈 태그 br (break) -->
    <br>

    <dl id="text5" class="dlTag" name="dlTag">
        <dt>Text</dt>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
    </dl>
</body>
</html>
```


### 📌 웹 페이지에 테이블 도시



<br>
<br>
<br>
