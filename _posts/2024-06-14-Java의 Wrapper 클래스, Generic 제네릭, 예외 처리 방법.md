---
title: Java의 Wrapper 클래스, Generic 제네릭, 예외 처리 방법
date: 2024-06-14 18:00:00 +09:00
categories: [1. Fundamental, Java]
tags: [Java, Fundamental, Wrapper Class, Generic, Exception, Try-Catch]
---

<!-- 2024-06-14 글 작성 시작; 2024-06-14 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-05-07,13 강의)</h2>
> - Tool :  
<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" />
<img alt="Eclipse" src="https://img.shields.io/badge/-Eclipse-2C2255?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 데이터 타입 단일화
### 📌 Wraaper 클래스
> - Wrapper 클래스는 기본 데이터 타입을 객체로 포장하여 객체처럼 다룰 수 있는 기능입니다.
> - Wrapper 클래스의 목적은 객체 데이터만을 다루는 API에 대응하려는 것입니다.
> - Wrapper 클래스의 예시로는 Integer, Double, Boolean, Character가 있습니다.
> - 참고로 String은 기본 타입이 아닌 참조형 데이터 타입이기에 wrapper 클래스가 아닙니다.

### 📌 제네릭(Generic)
> - 제네릭은 단일 또는 다수의 객체화 된 데이터 타입을 파라미터처럼 처리하는 기능입니다.
> - 제네릭을 사용하기 위해서는 중괄호('<>')를 사용하면 됩니다.
> - 객체화 된 데이터 타입의 예시로는 int의 wrapper 클래스인 Integer 등입니다.
> - 제네릭의 장점은 다른 타입의 객체가 유입되는 것을 컴파일 과정에서 차단할 수 있다는 것입니다.
> - 제네릭이 사용된 블록은 데이터 타입이 명확하기 때문에 프로그램 유지/보수에 좋습니다.
> - 제네릭의 사용 예시는 아래와 같습니다.

``` java
// Java 7 이후 버전
// Java의 유추 기능 추가로 코드의 간결화 가능
List<Integer> lottoWinningNumber = new LinkedList<>();

// Java 7 이전 버전
LinkedList<Integer> lottoWinningNumber = new LinkedList<Integer>();
```

<br>

### 🔔 예외 처리
### 📌 try-catch 블록
> - try-catch 블록은 에러로 인한 프로그램 기능 정지 전에 처리하는 방법입니다.
> - try 블록에는 실행될 코드를, catch 블록에는 예상되는 에러 종류를 작성합니다.
> - try 블록의 코드 실행 중 예외가 발생되면 catch 블록의 코드가 실행됩니다.
> - try-catch 블록의 흔한 예시로는 사용자의 잘못된 입력으로 인한 에러 출력 방지입니다.
> - try-catch 블록의 예시는 아래와 같습니다.

``` java
import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatchTest {
	
	public static void main(String[] args) {
		
		int num = 10;
		int result = 1;
		Scanner scan = new Scanner(System.in);
		
		// 문법적으로는 맞지만 수학적으로는 문제가 있는 공식을 작성하였습니다.
		try {
			result = num / 0;
		}
		// ArithmeticException 에러 발생 시 안내 문구를 출력하였습니다.
		catch(ArithmeticException e) {
			System.out.println("0으로 나눌 수 없습니다.");
		}
		
		// result에 할당된 값이 변경됐는지 확인하였습니다.
		System.out.println(result);
		
		// 문법적으로는 맞지만 사용자가 잘못 입력할 수 있는 코드를 작성하였습니다.
		try {
			System.out.println("숫자를 입력하세요.");
			System.out.print("숫자 입력 = ");			
			scan.nextInt();
			System.out.println("입력 완료");
		}
		// InputMismatchException 에러 발생 시 안내 문구를 출력하였습니다.
		catch(InputMismatchException e) {
			System.out.println("문자를 입력하셨습니다.");
			System.out.println("숫자를 입력하세요.");
			scan.nextLine();
			
			try {
				System.out.print("숫자 입력 = ");
				scan.nextInt();
				System.out.println("입력 완료");
			}
			catch(InputMismatchException ee) {
				System.out.println("문자가 입력되어 시스템을 종료합니다.");
			}
		}
		
		scan.close();
		
	}

}
```

<br>
<br>
<br>
