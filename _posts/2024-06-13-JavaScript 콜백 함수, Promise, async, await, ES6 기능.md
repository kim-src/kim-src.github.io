---
title: JavaScript ES6 신규 기능, jQuery, 브라우저 렌더링 과정
date: 2024-06-13 18:00:00 +09:00
categories: [1. Fundamental, Frontend]
tags: [Fundamental, HTML, CSS, JavaScript, Frontend, JavaScript, Anonymous Function, Callback Function, Async, Await, Browser, Rendering, Synchronous Function, Asynchronous Function, jQuery]
---

<!-- 2024-05-31 글 작성 시작; 2024-06-13 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-05-22,23,27 강의)</h2>
> - Tool :  
<img alt="VS Code" src="https://img.shields.io/badge/-VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
<img alt="jQuery" src="https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white">

<br>

### 🔔 JavaScript 소개
### 📌 JavaScript 개괄 소개
> - JavaScript는 웹 페이지에 동적 기능을 부여하기 위해 개발되었습니다.
> - JavaScript는 변수 선언/수정이 자유롭고 데이터 타입이 동적으로 결정되는 것이 특징입니다.
> - JavaScript는 주로 웹 브라우저 내에서 실행되거나 Node.js같은 환경에서 직접 실행됩니다.
> - JS는 스크립팅 언어로 분류되는데, 스크립팅 언어란 기능 실행이 목적인 언어를 의미합니다.
> - 스크립팅 언어는 복잡한 컴파일 과정이 필요없고 인터프리터에 의해 실행됩니다.
> - 인터프리터란 소스 코드를 기계어로 변환하지 않고 직접 실행하는 프로그램을 의미합니다.

### 📌 인터프리터(interpreter) vs 컴파일러(compiler)
> - 프로그래밍 언어를 실행하기 위해 사용되는 인터프리터는 컴파일러와 대조되는 도구입니다.
> - 인터프리터는 사람이 이해할 수 있는 소스 코드를 순서대로 한 줄씩 해석하고 실행합니다.
> - 컴파일러는 사람이 이해할 수 있는 코드를 바이너리 코드로 구성된 기계어로 변환합니다.
> - 인터프리터에 의해 실행되는 언어는 JavaScript, Python, PHP 등이 있습니다.
> - 컴파일러에 의해 실행되는 언어는 Java, C++, C, Swift 등이 있습니다.

### 📌 JavaScript vs Java 유사점
> - JavaScript와 Java는 명확히 다른 언어이지만 코드 작성 방법은 비슷한 편입니다.
> - JavaScript에서는 Java와 마찬가지로 변수와 메서드를 선언하고 작성해야 됩니다.
> - Java에서는 변수 선언 시 String, int 등의 데이터 타입을 지정해야 됩니다.
> - JavaScript에서는 변수 선언 시 const, let, var 등의 키워드를 입력해야 됩니다.
> - Java에서는 메서드를 생성할 때 보통 이미 정의된 메서드를 사용합니다.
> - JavaScript에서도 메서드를 생성할 때 보통 이미 정의된 메서드를 사용합니다.
> - 그런데 JavaScript는 Java보다 코드 작성이 유연하고 데이터 타입이 동적으로 결정됩니다.
> - 예를들면 Java의 Array의 경우 한 번 선언하면 배열의 크기와 요소를 수정하기 번거롭습니다.
> - 이와 다르게 JavaScript의 배열은 데이터 추가/수정/삭제가 자유롭습니다.
> - 이처럼 JavaScript는 코드 작성이 쉽지만 유지/보수가 어렵고 휴먼 에러 발생 위험성이 큽니다.

### 📌 JavaScript vs Java 차이점
> - JavaScript는 스크립트 언어, Java는 컴파일 언어로 분류됩니다.
> - JavaScript는 인터프리터, Java는 컴파일러에 의해 실행됩니다.
> - JavaScript로 작성된 소스 코드는 인터프리터에 의해 직접적으로 실행됩니다.
> - Java로 작성된 코드는 컴파일러에서 바이트 코드로, JVM에서 기계어로 변환된 후 실행됩니다.
> - JavaScript 코드는 객체/함수/블록으로 관리되고 Java 코드는 객체/클래스로 관리됩니다.
> - JavaScript는 프로토타입 기반의 객체 지향 언어이며 객체를 생성하고 관리합니다.
> - Java는 클래스 기반의 객체 지향 언어이며 객체를 정의하고 인스턴스화(실체화)합니다.
> - 클래스 기반이기 때문에 Java의 모든 코드는 클래스 내부에 위치해야 됩니다.
> - ES6 이후 JavaScript에서도 클래스를 사용할 수 있지만 함수나 블록으로 코드가 관리됩니다.

### 📌 렌더링 과정에서의 JavaScript
> - 브라우저에서 웹 문서를 렌더링하는 과정은 아래와 같습니다.
> - JavaScript의 경우 HTML 파싱 중 ```<script>``` 태그가 파싱되었을 때 실행됩니다.
> - 브라우저에서 웹 문서 렌더링을 완료하면 뷰포트(viewport; 실제 화면)에 내용이 표시됩니다.
> - 참고로 DOM (Document Object Model)은 웹 페이지를 구성하는 요소를 노드로 표현한 것입니다.
>    - HTML 파싱 : 렌더링 시 브라우저는 HTML 문서를 파싱하며 DOM 트리를 생성합니다.
>    - CSS 파싱 : CSS 파일들이 파싱되어 HTML 요소의 스타일을 정의하는 CSSOM 트리가 생성됩니다.
>    - 렌더 트리 생성 : DOM과 CSSOM이 결합된, 실제 화면에 보여지는 렌더 트리를 형성합니다.
>    - 레이아웃 : 렌더 트리 형성 후 각 요소가 화면에서 차지하는 위치와 크기를 계산합니다.
>    - 페인팅 : 레이아웃을 토대로 요소들이 화면에 표시됩니다.
>    - JavaScript 실행 : HTML 파싱 중 script 태그가 파싱되면 JavaScript 기능을 실행합니다.

<br>

### 🔔 JavaScript 주요 개념
### 📌 동기적 수행(Synchronous Execution)
> - JavaScript는 싱글 스레드(single thread) 언어입니다.
> - 이는 한 번에 하나의 작업을 처리하는 언어라는 뜻입니다.
> - JavaScript는 기본적으로 코드 실행을 동기적으로 처리합니다.
> - 동기적 수행이란, 코드가 작성된 순서대로 실행된다는 것을 의미합니다.
> - 동기적 수행의 예시는 아래와 같습니다.

``` javascript
document.write("첫 번째 문장 <br>");
document.write("두 번째 문장 <br>");
document.write("세 번째 문장 <br>");
```

### 📌 동기적 수행의 문제점
> - 프로그램이 동기적으로만 처리되면 blocking이라는 문제가 발생됩니다.
> - blocking은 실행중인 코드가 완료 상태가 될 때까지 다른 모든 작업이 대기중인 상황입니다.
> - 예를들면 서버로부터 데이터를 전달 받아 기능을 실행해야 되지만 원활하지 않을 때가 있습니다.
> - 만일 blocking이 지속되면 계속해서 다음 코드가 실행되지 않는 문제가 발생됩니다.
> - 이를 방지하기 위해 개발된 것이 비동기적 프로그래밍입니다.

### 📌 비동기적 수행(Asynchronous Execution)
> - 비동기적 수행이란, 코드의 일부 작업을 별도로 진행하는 것을 의미합니다.
> - 비동기적 수행은 프록램의 주요 실행 흐름을 방해하지 않는 것이 장점입니다.
> - 비동기적 수행을 위해서는 보통 브라우저의 Web API가 제공하는 비동기 함수를 사용합니다.
> - 비동기 함수의 예시로는 setTimeout, setInterval, fetch 등이 있습니다.
> - Chrome에서는 V8과 같은 JavaScript 엔진이 있으며 이는 코드를 파싱하고 실행합니다.
> - 코드 실행의 주 역할을 JavaScript 엔진이 한다면, 비동기적 수행은 주로 Web API가 담당합니다.
> - 비동기적 수행의 예시는 아래와 같습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    // 1. 동기적 수행으로 인한 첫 번째 문장 출력
    console.log("첫 번째 문장 <br>");

    // 2. 동기적 수행으로 인한 setTimeout 타이머 시작
    // 4. 비동기적 수행으로 인한 두 번째 문장 5초 후 출력
    setTimeout(() => {
        console.log("두 번째 문장 <br>");
    }, 5000);
    
    // 3. 동기적 수행으로 인한 세 번째 문장 출력
    console.log("세 번째 문장 <br>");
</script>
</html>
```

### 📌 호이스팅(Hoisting)
> - 호이스팅이란 변수 및 함수를 스코프의 최상단으로 끌어올리는 현상을 의미합니다.
> - 이는 본격적인 코드 실행 전에 JavaScript 엔진이 변수 및 함수를 메모리에 저장하는 것입니다.
> - 따라서 변수 및 함수 선언 위치가 아니더라도 변수 및 함수에 접근 가능합니다.
> - 단, 변수 및 함수의 초기화는 선언된 위치에서 이뤄집니다.
> - 초기화를 하지 않으면 'undefined' 문구가 출력됩니다.
> - 예를들어 'this.name'을 입력해야 되는 곳에 'name'만 입력하면 'undefined'가 출력됩니다.
> - 호이스팅은 JavaScript 코드 파싱 과정 중에 발생되는 것이고 이후 코드가 실행됩니다.
> - 참고로 스코프(scope)란 프로그램 내에서 변수 또는 함수에 접근할 수 있는 영역입니다.

### 📌 콜백 함수(Callback Function)
> - 콜백 함수는 '다른 함수의 인자로 전달되는 함수'를 의미합니다.
> - 쉽게 생각해서, 콜백 함수는 '하나의 함수에 파라미터로 들어가는 함수' 입니다.
> - 콜백 함수의 사용 예시로 '버튼을 클릭하면 실행되는 함수'를 정의할 수 있습니다.
> - 콜백 함수는 '버튼 클릭'과 같은 비동기 작업이 완료된 후 실행되는 경우가 흔합니다.
> - 따라서 콜백 함수는 이벤트 등의 JavaScript 비동기 처리를 구현하는 데 필수적입니다.
> - 아래는 콜백 함수를 사용한 예시입니다.

``` javascript
// 버튼이 클릭되면 실행될 콜백 함수 정의
// 버튼이 클릭되면 콘솔창에 Welcome! 출력
document.querySelector('.button').addEventListener('click', function() {
    console.log('Welcome!');
});

// 1초가 지나면 실행될 콜백 함수 정의
// 1초가 지나면 콘솔창에 Welcome! 출력
setTimeout(function() {
    console.log('Welcome!');
}, 1000);
```

### 📌 익명 함수(Anonymous Function)
> - 익명 함수란 별도의 이름이 지정되지 않은 함수를 의미합니다.
> - 익명 함수의 예시로는 ```function()``` 또는 ```() => {}```를 들 수 있겠습니다.
> - 익명 함수는 비동기적인 프로그래밍 또는 콜백 함수와 밀접하게 관련되어 있습니다.
> - 상기 setTimeout 함수와 같이 비동기적 프로그래밍에는 콜백 함수 개념이 포함됩니다.
> - 다른 함수의 파라미터로 들어가는 함수의 이름은 명명하기 애매한 부분이 있습니다.
> - 왜냐하면 해당 함수는 재활용이 아닌 일회용으로만 활용될 가능성이 크기 때문입니다.
> - 참고로 ```() => {}```는 <a href="https://kim-src.github.io/posts/JavaScript-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98,-Promise,-async,-await,-ES6-%EA%B8%B0%EB%8A%A5/#-javascript%EC%97%90%EC%84%9C%EC%9D%98-%EC%8B%A0%EA%B7%9C-%ED%95%A8%EC%88%98-%EC%A0%95%EC%9D%98-%EB%B0%A9%EC%8B%9D">화살표 함수</a>를 뜻하며 링크된 글에 설명이 있습니다.

### 📌 함수의 스코프(scope)
> - 스코프란 JavaScript 코드가 변수 또는 함수에 접근할 수 있는 범위를 의미합니다.
> - 이는 전역(global) 스코프, 블록(block) 스코프, 함수(function) 스코프로 구분됩니다.
> - 전역 스코프에 선언된 변수 또는 함수에는 코드의 어느 곳에서든지 접근 가능합니다.
> - 블록 스코프에 선언된 변수 또는 함수에는 블록 내부에서만 접근 가능합니다.
> - 함수 스코프에 선언된 변수 또는 함수에는 함수 내부에서만 접근 가능합니다.
> - 아래 예시로 스코프에 대한 부연 설명을 하겠습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    /* global scope */
    let a = 10;

    for(i = 0; i < 1; i++) {
        /* block scope */
        let b = 20;

        if(true) {
            /* function scope */
            let c = 30;
            // function scope에 선언된 변수 c이기 때문에 이곳에서 활용 가능합니다.
            console.log(c);
        }

        // block scope에 선언된 변수 b이기 때문에 이곳에서 활용 가능합니다.
        console.log(b);
        // function scope에 선언된 변수 c이기 때문에 함수 내에서만 활용 가능합니다.
        // console.log(c);
    }

    // global scope에 선언된 변수 a는 어느 곳에서나 활용 가능합니다.
    console.log(a);
    // block scope에 선언된 변수 b는 블록 내부에서만 활용 가능합니다.
    // console.log(b);
    // function scope에 선언된 변수 c는 함수 내에서만 활용 가능합니다.
    // console.log(c);
</script>
</html>
```

``` console
jsfunc_5.html:60 30
jsfunc_5.html:64 20
jsfunc_5.html:70 10
```

### 📌 변수의 중복(redeclaration) 선언
> - ES6 이후부터추가된 변수 선언 방식인 const 및 let 키워드로는 변수명을 중복시킬 수 없습니다.
> - ES6 이전 기존의 변수 선언 방식인 var 키워드로는 변수명을 중복시킬 수 있습니다.
> - var 키워드에 의존중이었던 변수 또는 상수를 선언 방식에는 변수명 중복 문제가 있었습니다.
> - 변수명이 중복되면 상위 변수에서 할당시켰던 값이 덮어씌워졌기 때문입니다.
> - 이는 프로그램을 구성하는 코드의 양이 많아지거나 협업할 시 치명적인 문제가 있었습니다.
> - 이를 보완할 수 있는 것이 const 및 let 키워드입니다.

### 📌 jQuery
> - jQuery는 JavaScript 코드를 보다 간결하게 작성하는 것을 목적으로 하는 라이브러리입니다.
> - jQuery로 제작된 웹 사이트를 유지/보수하기 위해서 학습하였습니다.
> - jQuery의 객체 지시자는 `$`이며 `$(선택자)`를 입력하여 사용합니다.
> - jQuery의 선택자는 CSS의 선택자와 비슷한 개념이며 기본적인 예시는 아래와 같습니다.
>    - 태그 선택자 : `$('태그명')`
>    - ID 선택자 : `$('#아이디명')`
>    - 클래스 선택자 : `$('.클래스명')`
>    - 속성 선택자 1 : `$('[속성명]')`
>    - 속성 선택자 2 : `$('[속성명=값]')`
> - 기본적인 것 이외에도 자식(child), 후손(descendant), 형제(sibling) 선택자 등이 있습니다.
> - 아래는 jQuery 코드를 이용한 예시이며 순수 JavaScript 코드와 비교하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="area1"></div>
    <div class="area2"></div>
</body>
<!-- jQuery 라이브러리 이용 -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script>
    /* 기본 JavaScript를 이용한 스타일 부여 방식 */
    // querySelector는 css 선택자를 이용하는 메서드
    // html 문서에서 첫 번째로 일치하는 css 요소를 찾아 해당 요소를 반환
    const basicBox = document.querySelector('.area1');

    // basicBox 속성이 존재할 경우 스타일 적용
    // querySelector 메서드 = DOM 메서드
    // 요소가 존재하지 않을 경우 null 반환
    if(basicBox) {
        // style 객체의 cssText 속성에 css 속성 및 값 부여
        // JavaScript에서는 하이픈(-)이 아닌 카멜 케이스로 코드 작성
        basicBox.style.cssText = 'width: 100px; height: 100px';
        // style 객체의 backgroundColor 속성에 값 부여
        // JavaScript에서는 하이픈(-)이 아닌 카멜 케이스로 코드 작성
        basicBox.style.backgroundColor = 'red';
    }

    /* jQuery를 이용한 스타일 부여 방식 */
    // jQuery($) 라이브러리를 사용하여 area2 class에 접근
    const queryBox = $('.area2');

    // queryBox 속성이 존재할 경우 스타일 적용
    // jQuery = 배열 유사 객체
    // 요소가 존재하지 않더라도 배열 유사 객체 반환
    // 즉, 항상 true 반환
    if(queryBox.length > 0) {
        // jQuery에서는 중괄호 내에 css 속성 및 값 부여
        queryBox.css({width: '200px', height: '200px'});
        // jQuery에서는 css와 마찬가지로 하이픈을 사용하여 코드 작성
        queryBox.css('background-color', 'orange');
    }
</script>
</html>
```

<br>

### 🔔 ES6 이후 JavaScript 신규 기능
### 📌 ES6 (ECMAScript 2015)
> - ECMA (European Computer Manufactures Association)는 정보 통신 기술 표준 유관 협회입니다.
> - ECMA는 다양한 기술 표준을 개발하고 관리하는 곳이며 가장 유명한 것은 ECMAScript 표준입니다.
> - ECMAScript는 스크립팅 언어들의 표준이며 이에 대한 구현체 중 하나는 JavaScript입니다.
> - ECMAScript 표준은 프로그래밍 언어의 문법, 유형, 기능 실행 모델 등을 정의합니다.
> - ECMAScript의 목적은 개발자들이 일관된 프로그래밍을 할 수 있는 환경을 구성하는 것입니다.
> - ES6 버전에서는 아래와 같은 JavaScript 개선 사항들을 도입하였습니다.
>    - 변수 선언 방식 추가 : const 및 let 키워드
>    - 변수 삽입 방식 추가 : 백틱(`) 기반의 ${expression} 구문
>    - 비동기 코드 관리 체계 추가 : Promise 객체
>    - 코드 공유 방식 추가 : export, import 키워드를 사용하여 코드 모듈화 및 공유 가능
>    - 클래스 기반의 문법 도입 : 기존 프로토타입 기반의 문법에서 추가된 문법
>    - 함수 정의 방식 추가 : 화살표 함수(Arrow Functions)

### 📌 JavaScript에서의 신규 변수 선언 방식
> - JavaScript는 변수를 선언할 때 const, let, var 키워드를 사용합니다.
> - JavaScript는 변수를 선언할 때 데이터 타입을 명시하지 않아도 괜찮습니다.
> - 왜냐하면 데이터 타입이 동적으로 결정되고 자동으로 할당되기 때문입니다.
> - ES6 이전에는 var 키워드가 변수 또는 상수를 선언하는 주요 키워드였습니다.
> - 그런데 var는 함수 스코프에서만 활용 가능하고 변수명이 중복될 수 있다는 단점이 있습니다.
> - 또한 var를 전역 스코프로 활용하면 window 객체에 영향을 미치는 위험 가능성이 있습니다.
> - 따라서 코드 작성 시 var는 편리하지만 유지/보수 측면에서는 치명적인 문제가 있습니다.
> - 이를 보완할 수 있는 것이 const 및 let 키워드입니다.
> - 아래는 const, let, var 키워드를 사용하여 변수를 선언 및 값을 수정한 예시입니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    /* 최초 변수 선언 */
    const a = 10;
    let b = 20;
    var c = 30;

    /* 변수에 할당된 값 출력 */
    document.write(a);
    document.write("<br>");
    document.write(b);
    document.write("<br>");
    document.write(c);
    document.write("<br>");

    /* 변수에 할당된 값 수정 */
    // a 변수에 할당된 값 수정 불가(const 키워드 변수 선언으로 인한 값 재할당 불가)
    // 그럼에도 수정하려고 하면 동기적인 코드 처리로 인한 JavaScript 코드 실행 중지
    // a = 1000;
    b = 1000;
    c = 1000;

    /* 수정된 값 출력 */
    document.write(a);
    document.write("<br>");
    document.write(b);
    document.write("<br>");
    document.write(c);
    document.write("<br>");
</script>
</html>
```

### 📌 JavaScript에서의 신규 변수 삽입 방식
> - ES6 이후 백틱(`)을 사용하여 문자열 등에 변수를 정적/동적으로 삽입시킬 수 있습니다.
> - 출력할 문자열을 백틱(`)으로 감싸고 '${}' 내부에 변수를 입력하면 적용됩니다.
> - 기존에는 '변수 + "문자열" + 변수 + "문자열" 등으로 변수 삽입 과정이 번잡하였습니다.
> - 추가적으로 줄바꿈 역시 '\n'을 사용하지 않고도 간단히 처리할 수 있습니다.
> - 아래는 백틱 기반으로 문자열을 삽입하는 방식에 대한 예시입니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    // 문자열 내에 변수 삽입
    let name = "JavaMan";
    let skill = "JavaScript";
    
    document.write(`${name}이 Java가 아닌 ${skill}을 학습한다.`);

    document.write("<br>");

    // 문자열 내에 표현식(수학 공식) 삽입
    let price = 10000;
    let tax = 0.1;

    document.write(`대한민국에서 국세를 ${price}원 납부했으면, 지방세는 ${price * tax}원 납부해야 됩니다.`);

    document.write("<br>");

    // 문자열 내에 문장 삽입
    // 콘솔 출력 시 줄바꿈 발생
    // 뷰포트 출력 시 줄바꿈 미발생
    console.log(`아버지가
    방에
    들어가신다.`);

    let sentence = `아버지가
    방에
    들어가신다.`;

    console.log(sentence);
</script>
</html>
```

### 📌 JavaScript에서의 새로운 비동기 코드 관리 체계
#### 🚩 Promise 객체의 pending, fulfilled, rejected 상태
> - ES6 이후 JavaScript에는 Promise 객체 개념이 도입되었습니다.
> - Promise 객체는 JavaScript의 비동기적인 로직을 더욱 명확하게 작성할 수 있게 합니다.
> - Promise 객체의 주요 목적은 비동기적 작업의 완료 또는 실패를 나타내는 것입니다.
> - 아래는 Promise 객체의 세 가지 상태이며 이들은 Promise 객체의 생명주기를 의미합니다.
> - 일반적으로 대기 상태보다 이행 또는 거부로 결과가 출력될 것입니다.
>    - 대기(pending) : 초기 상태이며 작업이 완료되지 않은 상태입니다.
>    - 이행(fulfilled) : 작업이 성공적으로 완료된 상태를 의미합니다.
>    - 거부(rejected) : 작업이 완료되었지만 실패한 상태를 의미합니다.

#### 🚩 Promise 객체의 resolve, reject 함수
> - Promise 객체의 주요 함수는 resolve, reject이며 콜백 함수를 통해 생성됩니다.
> - resolve 함수는 작업이 성공적으로 완료되었을 때 호출됩니다.
> - reject 함수는 작업에 실패하였을 때 호출됩니다.

#### 🚩 Promise 객체의 then, catch, finally 메서드
> - Promise 객체의 주요 메서드는 then, catch, finally입니다.
> - then 메서드에는 Promise가 성공적으로 이행될 때 실행될 콜백 함수를 지정합니다.
> - catch 메서드에는 Promise가 거부되었을 때 실행될 콜백 함수를 지정합니다.
> - finally 메서드에는 Paromise의 성공/거부 여부와 상관없이 실행될 콜백 함수를 지정합니다.
> - 이들의 로직을 Promise 체이닝(chaining)이라고 합니다.
> - then, catch, finally 메서드는 비동기적인 작업이라도 순차적으로 수행할 수 있습니다.
> - 아래는 Promise 객체를 이용한 비동기 로직 예시입니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    /* Promise 객체 생성 예시 */
    // 테스트용 변수 정의
    let a = 20;
    let b = 10;

    // Promise 객체 생성
    const firstPromise = new Promise((resolve, reject) => {
        // 비동기 로직에 따른 조건문 정의
        if(a > b) {
            // 조건이 참일 경우 resolve 함수 호출
            // 값을 반환해야 되기 때문에 document, console은 비적정
            resolve('Success!');
        } else {
            // 조건이 거짓일 경우 reject 함수 호출
            reject('Failure!');
        }
    });


    /* 비동기 로직 생성 */
    // 비동기 로직 실습을 위한 fetchData 함수 생성
    function fetchData() {
        // fetchData 메서드를 실행할 경우 새로운 Promise 객체 반환
        // 반환되는 Promise 객체는 초기 상태(pending)
        return new Promise((resolve, reject) => {
            // 타이머 지정
            setTimeout(() => {
                // Promise 객체에 data를 key, value 형태로 저장
                const data = {name : 'Kim', age : 30};
                // 작업에 성공하면 저장된 data 반환
                resolve(data);
            // 1초 후에 데이터 반환
            }, 1000);
        });
    }

    document.write("<br>")

    // fetchData 메서드 실행
    fetchData()
        // then 콜백은 성공적인 결과 수용
        .then(data => {
            console.log('Information = ', data);
        })
        // catch 콜백 함수는 에러 수용
        .catch(error => {
            console.log('Error = ', error);
        })
        // 성공 여부와 상관없이 실행을 마치면 반환할 내용
        .finally(() => {
            console.log('Fetch attempt finished.');
        })
</script>
</html>
```

#### 🚩 async, await 키워드 및 콜백 지옥(Callback Hell)
> - Callback Hell은 개발자들의 커뮤니티에서 사용되는 단어입니다.
> - Promise 객체가 없던 시기의 JavaScript는 비동기적 로직이 복잡하였습니다.
> - 왜냐하면 콜백 함수가 중첩되어 함수 내부의 함수를 구분하기 어려웠기 때문입니다.
> - 이를 해결하기 위해 ES8 (ES2017) 이후로는 async, await 키워드가 도입되었습니다.
> - 아래는 Promise 객체, async 및 await 키워드를 사용한 서버 데이터 처리 예시입니다.
> - 참고로 ES6 이전 JavaScript 코드는 상당히 복잡하기 때문에 예시는 없습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    /* Promise 객체 사용 예시 */
    // url을 인자로 받는 fetchData1 함수를 정의하였습니다.
    // fetchData1 함수는 전달받은 url을 가지고 서버에 데이터를 요청합니다.
    function fetchData1(url) {
        // url을 인자로 받는 fetch 함수를 사용하였습니다.
        // fetch 함수는 JavaScript의 내장 함수입니다.
        // fetch 함수는 url을 인자로 받아 서버로 데이터를 요청하는 역할을 합니다.
        fetch(url)
            // 서버로부터 응답을 받으면 실행될 함수를 정의하였습니다.
            // 화살표 함수 내용은 response를 인자로 받았을 때 실행될 내용입니다.
            .then(response => {
                // 데이터를 응답받지 못했으면 아래의 에러를 발생시킵니다.
                if(!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                // 데이터를 응답 받았으면 응답을 JSON 형태로 변환합니다.
                return response.json();
            })
        // 서버로부터 data를 받으면 실행될 내용을 정의하였습니다.
        .then(data => {
            // data를 콘솔에 출력합니다.
            console.log(data);
        })
        // 에러 처리를 정의하였습니다.
        .catch(error => {
            // error 내용을 콘솔에 출력하였습니다.
            console.error('Error: ', error);
        })
    }

    // 예시로 필자의 블로그 url을 입력하였습니다.
    // 아래 메서드는 fetchData1 함수를 호출하고 url을 전달합니다.
    // 해당 url의 블로그로부터 응답을 받으면 응답 내용이 JSON 형태로 변환됩니다.
    // 해당 url의 블로그로부터 데이터를 받으면 콘솔에 출력됩니다.
    // 해당 url의 블로그 데이터 교환 과정에서 에러가 발생되면 콜솔에 출력됩니다. 
    fetchData1('https://kim-src.github.io/');


    /* async/await 키워드 사용 예시 */
    // url을 인자로 받는 fetchData 함수를 정의하였습니다.
    // fetchData 함수는 전달받은 url을 가지고 서버에 데이터를 요청합니다.
    async function fetchData2(url) {
        // try 블록에 데이터 요청에 대한 응답 및 결과 관련 로직을 정의하였습니다.
        try {
            // await 키워드를 이용하여 fetch 함수가 url을 인자로 받을 때까지 대기합니다.
            const response = await fetch(url);
            // 데이터를 응답받지 못했으면 아래의 에러를 발생시킵니다.
            if(!response.ok) {
                throw new Error('Network response was not ok.');
            }
            // 데이터를 응답 받았으면 응답을 JSON 형태로 변환합니다.
            const data = await response.json();
            // 서버로부터 data를 받으면 콘솔에 출력합니다.
            console.log(data);
        // catch 블록에 에러 발생 로직을 정의하였습니다.
        } catch(error) {
            // error 내용을 콘솔에 출력하였습니다.
            console.error('Error: ', error);
        }
    }

    // 예시로 필자의 블로그 url을 입력하였습니다.
    // 아래 메서드는 fetchData1 함수를 호출하고 url을 전달합니다.
    // 해당 url의 블로그로부터 응답을 받으면 응답 내용이 JSON 형태로 변환됩니다.
    // 해당 url의 블로그로부터 데이터를 받으면 콘솔에 출력됩니다.
    // 해당 url의 블로그 데이터 교환 과정에서 에러가 발생되면 콜솔에 출력됩니다. 
    fetchData2('https://kim-src.github.io/');
</script>
</html>
```

### 📌 JavaScript에서의 코드 모듈화 및 공유 방식
> - ES6 이후 export, import 키워드를 이용하면 코드를 모듈화 및 공유할 수 있습니다.
> - 모듈화 하는 방법은 다양하며 개별 함수, 여러 함수, 하나의 객체 등을 관리할 수 있습니다.
> - 코드 모듈화 시 주의해야 할 점은 script 태그의 type을 module로 지정해야 된다는 것입니다.
> - 또한 import 대상 파일이 JavaScript 확장자여야 된다는 것입니다.
> - 위 두 가지 규칙을 지켜주지 않으면 브라우저의 렌더링 과정에서 에러가 발생됩니다.
> - 추가적으로 브라우저 뷰포트에 출력하려고 하면 문제가 발생되었기에 콘솔에 출력하였습니다.
> - 아래는 객체를 모듈화하고 공유하는 방식에 대한 예시입니다.

``` javascript
export function add(a, b) {
    return a + b;
}

export function substract(a, b) {
    return a - b;
}

// 객체 변수 자체는 변경 불가
const calculateOperator = {
    // 함수에 할당되는 값은 변경 가능
    multiple(a, b) {
        return a*b;
    },
    divide(a, b) {
        return a / b;
    }
}

// 기본적으로 내보낼 값을 default로 설정했기에 import 편리
// Java와 달리 접근제한자 개념과 상이
// 즉, export default 자체는 하나의 키워드 역할
export default calculateOperator;
```

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>claculator</title>
</head>
<body>
</body>
<script type="module">
    // 이름으로 내보낸 개별 함수 가져오기
    import {add, substract} from './clacOperator.js';

    // 객체로 내보낸 모듈 가져오기
    import calculateOperator from './clacOperator.js';

    // 가져온 모듈을 활용하여 수학 계산
    console.log(add(10, 20));
    console.log(substract(10, 20));
    console.log(calculateOperator.multiple(10, 20));
    console.log(calculateOperator.divide(10, 20));
</script>
</html>
```

``` console
claculator.html:56 30
claculator.html:57 -10
claculator.html:58 200
claculator.html:59 0.5
```

### 📌 JavaScript에서의 클래스 기반 문법
> - ES6 이후 기존의 프로토타입 기반의 문법 이외에도 클래스 기반의 문법 사용이 가능해졌습니다.
> - Java와 유사하게 객체 단위로 변수 및 메서드를 정의할 수 있습니다.
> - 단, 프로토타입 기반 문법에 클래스 기반 문법이 추가된 것이지, 대체된 것은 아닙니다.
> - 객체 단위로 정의된 변수 및 메서드는 타 객체에서 생성자 및 점 연산자로 접근 가능합니다.
> - 참고로 코드 작성 방식이 유사하다고 설명한 것이지, 구동 방식이 유사하게 된 것은 아닙니다.
> - 왜냐하면 JavaScript 전체적인 실행 과정은 설명하기 복잡할 정도이기 때문입니다.
> - 한 예시로 JIT (Just-In-Time) 컴파일의 경우 실시간으로 코드를 기계어로 변환합니다.
> - 하지만 이는 인터프리팅 단계를 거친 후이며 JIT 컴파일로 성능을 최적화 한 것입니다.
> - 다양한 컴파일 방식이 있으며 이는 JavaScript 사용 목적이나 브라우저에 따라 다양합니다.
> - 아래는 클래스 기반 문법을 사용한 예시입니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    /* 부모 클래스 생성 */
    // class 키워드를 사용하여 Phone 클래스 생성
    class Phone {
        // constructor 키워드를 사용하여 클래스의 속성 생성
        constructor(model, company) {
            this.model = model;
            this.company = company;
        }

        // 클래스의 메서드 정의
        phoneInfo() {
            document.write(`이 스마트폰은 ${this.model}이고 ${this.company}에서 제작하였습니다.`);
        }
    }

    // 변수 및 인스턴스 생성(실질적인 값 할당)
    let myPhone = new Phone("S23 Ultra", "Samsung");
    myPhone.phoneInfo();

    document.write("<br>");

    /* 자식 클래스 생성 */
    // class 키워드를 사용하여 User 클래스 생성
    // extends 키워드를 사용하여 Phone 클래스 상속
    class User extends Phone {
        // constructor 키워드를 사용하여 클래스의 속성 생성
        constructor(model, company, user) {
            // super 키워드를 이용하여 부모 클래스 생성자 호출 및 초기화
            super(model, company);
            this.user = user;
        }

        // Phone 클래스의 phoneInfo 메서드 오버라이딩
        phoneInfo() {
            document.write(`이 스마트폰은 ${this.model}이고 ${this.company}에서 제작하였으며 사용자는 ${this.user}입니다.`);
        }
        // Phone 클래스의 
    }

    // 변수 및 인스턴스 생성
    let myPhoneUser = new User("S23 Ultra", "Samsung", "Kim");
    myPhoneUser.phoneInfo();
</script>
</html>
```

### 📌 JavaScript에서의 신규 함수 정의 방식
> - 기존의 function 키워드로 정의되었던 함수가 화살표 함수로도 정의할 수 있게 되었습니다.
> - 화살표 기호는 '=' 기호와 '>' 기호를 연결해서 사용해도 괜찮습니다.
> - 화살표 함수로 인해 함수 정의 방식이 간결해졌다고는 하지만 큰 차이는 잘 모르겠습니다.
> - 아래는 함수 정의에 대한 기존 방식과 화살표 함수 생성 방식을 비교한 예시입니다.

``` javascript
/* 1. 기존 function 키워드를 이용한 함수 정의 방식 */
// 입력 안내 문구 출력을 위한 함수를 생성하였습니다.
function validate() {
    const userId = $('#userId');
    const userPassword = $('#userPassword');

    // 공백을 제외한 userId의 길이가 0일 경우 입력 안내 문구를 출력하였습니다.
    if($.trim(userId.val()).length === 0) {
        alert('Enter your Email Address.');
        return false;
    }

    if($.trim(userPassword.val()).length === 0) {
        alert('Enter your Password.');
        return false;
    }

    return true;
};

// 로그인 성공 문구 출력을 위한 함수를 생성하였습니다.
// validate 값이 true로 return될 경우 기능이 실행되도록 설정하였습니다.
function login() {
    if(validate()) {
        alert('Welcome!');
    }
};


/* 2. 화살표 함수를 이용한 함수 정의 */
// 입력 안내 문구 출력을 위한 함수를 생성하였습니다.
const validate = () => {
    const userId = $('#userId');
    const userPassword = $('#userPassword');

    // 공백을 제외한 userId의 길이가 0일 경우 입력 안내 문구를 출력하였습니다.
    if($.trim(userId.val()).length === 0) {
        alert('Enter your Email Address.');
        return false;
    }

    if($.trim(userPassword.val()).length === 0) {
        alert('Enter your Password.');
        return false;
    }

    return true;
};

// 로그인 성공 문구 출력을 위한 함수를 생성하였습니다.
// validate 값이 true로 return될 경우 기능이 실행되도록 설정하였습니다.
const login = () => {
    if(validate()) {
        alert('Welcome!');
    }
};
```

<br>

### 🔔 JavaScript 실습
### 📌 JavaScript 출력 이해
> - console 객체의 log 메서드, document 객체의 wirte 메서드를 사용하였습니다.
> - console.log에 파라미터를 삽입하면 입력한 내용이 브라우저 콘솔창에 출력됩니다.
> - document.wirte에 파라미터를 삽입하면 입력한 내용이 브라우저 뷰포트에 출력됩니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    console.log("콘솔창에 문구 출력1");
    console.log("콘솔창에 문구 출력2");
    console.log("콘솔창에 문구 출력3");

    document.write("브라우저에 문구 출력1 <br>");
    document.write("브라우저에 문구 출력2 <br>");
    document.write("브라우저에 문구 출력3");
</script>
</html>
```

### 📌 JavaScript 변수 및 메서드 이해
> - const, let, var 키워드를 이용하여 변수를 선언하였습니다.
> - 선언된 변수를 write 메서드를 이용하여 뷰포트에 출력하였습니다.
> - 초기 선언된 변수의 배열에 할당된 요소를 수정 후 출력하였습니다.
> - 수정된 변수의 배열에 할당된 요소에 정수 100을 추가 후 출력하였습니다.
> - join 메서드를 활용하여 배열 요소를 출력하였습니다.
> - for 반복문을 활용하여 배열 요소를 출력하였습니다.
> - 향상된 for 반복문을 활용하여 배열 요소를 출력하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    /* 변수 선언 */
    // const 키워드를 이용하여 변수 선언
    const arrayConstEmpty = [];
    const arrayConstFilled = [1, 2, 3, 4, 5];

    // let 키워드를 이용하여 변수 선언
    let arrayLetEmpty = [];
    let arrayLetFilled = [1, 2, 3, 4, 5];

    // var 키워드를 이용하여 변수 선언
    var arrayVarEmpty = [];
    var arrayVarFilled = [1, 2, 3, 4, 5];

    // document 객체의 write 메서드를 이용하여 정의된 변수 출력
    // document : DOM (Document Object Model)에 접근할 수 있도록 하는 객체
    document.write(arrayConstEmpty);
    document.write("<br>");
    document.write(arrayConstFilled);
    document.write("<br>");
    document.write(arrayLetEmpty);
    document.write("<br>");
    document.write(arrayLetFilled);
    document.write("<br>");
    document.write(arrayVarEmpty);
    document.write("<br>");
    document.write(arrayVarFilled);
    document.write("<br>");

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    /* 변수 요소 수정 */
    // 정의된 변수를 이용하여 배열 요소 수정
    // const 키워드로 정의된 변수는 요소 수정 불가
    // arrayConstEmpty = [10, 20, 30, 40, 50];

    // 정의된 변수를 이용하여 배열 요소 수정
    arrayLetEmpty = ['A', 'B', 'C', 'D', 'E'];

    // 정의된 변수를 이용하여 배열 요소 수정
    // 최하단에 위치한 배열 요소로 최종 적용
    arrayVarEmpty = [10, 20, 30, 40, 50];
    arrayVarEmpty = [13, 14, 15];

    // 배열 요소 수정 결과 출력
    document.write(arrayConstEmpty);
    document.write("<br>");
    document.write(arrayLetEmpty);
    document.write("<br>");
    document.write(arrayVarEmpty);
    document.write("<br>");

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    /* 변수 요소 추가 */
    // push 메서드를 이용하여 배열 요소에 정수 100 삽입
    arrayLetEmpty.push(100);
    arrayLetFilled.push(100);
    arrayVarEmpty.push(100);
    arrayVarFilled.push(100);

    // 배열 요소 추가 결과 출력
    document.write(arrayConstEmpty);
    document.write("<br>");
    document.write(arrayConstFilled);
    document.write("<br>");
    document.write(arrayLetEmpty);
    document.write("<br>");
    document.write(arrayLetFilled);
    document.write("<br>");
    document.write(arrayVarEmpty);
    document.write("<br>");
    document.write(arrayVarFilled);
    document.write("<br>");

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    /* join 메서드 */
    // join 메서드를 이용하여 변수에 할당된 값을 한꺼번에 출력하려고 합니다.
    // join 메서드는 배열의 모든 요소를 연결하여 하나의 문자열을 생성합니다.
    // joint 메서드는 구분자(쉼표 등)를 이용하여 결과물의 형식을 조정합니다.
    document.write(arrayConstEmpty.join(', '));
    document.write("<br>");
    document.write(arrayConstFilled.join(', '));
    document.write("<br>");
    document.write(arrayLetEmpty.join(', '));
    document.write("<br>");
    document.write(arrayLetFilled.join(', '));
    document.write("<br>");
    document.write(arrayVarEmpty.join(', '));
    document.write("<br>");
    document.write(arrayVarFilled.join(', '));
    document.write("<br>");

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    /* for 반복문 */
    // for 반복문을 이용하여 배열 요소를 인덱스 순서대로 출력하였습니다.
    // Java의 for 문과 달리 i는 데이터 타입이 아닌 const, let, var 키워드로 선언해야 됩니다.
    for(let i = 0; i < arrayLetFilled.length; i++) {
        document.write(arrayLetFilled[i]);
    }

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    
    /* 향상된 for 반복문 */
    // for 반복문을 이용하여 배열 요소를 인덱스 순서대로 출력하였습니다.
    // Java의 for 문과 달리 i는 데이터 타입이 아닌 const, let, var 키워드로 선언해야 됩니다.
    for(let forArrayLetFilled of arrayLetFilled) {
        document.write(forArrayLetFilled);
    }
</script>
</html>
```

<br>
<br>
<br>
