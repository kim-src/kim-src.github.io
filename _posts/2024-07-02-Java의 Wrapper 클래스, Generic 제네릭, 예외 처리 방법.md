---
title: Java의 Wrapper 클래스, Generic 제네릭, 예외 처리 방법
date: 2024-07-02 18:00:00 +09:00
categories: [1. Fundamental, Java]
tags: [Java, Fundamental, Wrapper Class, Generic, Exception, Try-Catch]
---

<!-- 2024-06-14 글 작성 시작; 2024-07-02 페이지 호출 완료 -->
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

### 🔔 에러의 종류
> - 예외 처리가 필요한 대표적인 에러는 아래와 같으며 실제 종류는 예시보다 더욱 다양합니다.

### 📌 리소스 부족 에러
> - 메모리 부족 : 시스템에서 사용 가능한 메모리가 부족할 때 발생되는 에러입니다.
> - CPU 부족 : CPU 자원의 소모로 인해 시스템이 요청을 처리할 수 없는 에러입니다.
> - 디스크 공간 부족 : 저장 장치의 공간이 부족할 때 발생되는 에러입니다.

### 📌 문법 에러(Syntax Error)
> - 문법 에러는 Syntax Error라고 하며 프로그래밍 코드에 문법적인 오류가 있을 때 발생됩니다.
> - 이는 컴파일이나 코드 해석 단계에서 발견되고 프로그램의 실행을 차단합니다.
> - 보통 세미콜론이나 괄호 등을 누락시켰을 때 발생됩니다.
> - IDE 코드 입력 과정 중 빨간색 밑줄이 있는 경우 Syntax Error를 의심해볼 수 있습니다.

### 📌 런타임 에러(Runtime Error)
#### 🚩 Checked Exception
> - 시스템 레벨의 연산 과정에서 발생되는 예외이며 이를 처리하지 못하면 컴파일되지 않습니다.
> - 예를들면 데이터 입출력(IO; input / output), 데이터베이스 접근 등에서 발생되는 예외입니다.
> - 이러한 예외는 프로그램 실행 전에 예측 가능하기 때문에 예외 처리 과정이 필요합니다.
> - 참고로 Exception 클래스는 모든 checked 예외를 포함하는 슈퍼 클래스입니다.

#### 🚩 Unchecked Exception
> - 개발자의 실수(휴먼 에러)로 인해 발생되는 예외이며 프로그램 실행 중 발생됩니다.
> - 예를들면 잘못된 타입의 객체를 사용하거나 변수명을 제대로 입력하지 않아 발생되는 예외입니다.
> - 이러한 예외가 있어도 컴파일은 되지만 프로그램이 정상 실행되지는 않습니다.
> - 참고로 RuntimeException 클래스는 모든 unchecked 예외를 포함하는 클래스입니다.
> - Exception 클래스는 RuntimeException의 부모 클래스입니다.

<br>

### 🔔 예외 처리
### 📌 예외 처리 개념
> - 예외는 예측 가능한 에러와 예측 불가능한 에러로 구분됩니다.
> - 예외 처리란 에러가 발생됐을 때 프로그램을 안정적으로 유지하기 위한 개념입니다.
> - 즉, 에러 발생 사실을 알리고 다른 동작을 계속 이어갈 수 있게 하는 것이 예외 처리입니다.
> - 만일 예외를 처리하지 않는 경우 예외가 발생된 스레드의 실행이 중단됩니다.

### 📌 try-catch 블록
> - try-catch 블록의 목적은 애플리케이션 실행 도중 에러 발생 시를 대비하는 것입니다.
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

### 📌 throws 키워드
> - throws 키워드의 목적은 애플리케이션 실행 전에 에러 발생 가능성을 명시하는 것입니다.
> - throws 키워드는 예상되는 에러 명칭과 함께 메서드 선언부에 입력합니다.
> - throws 키워드는 해당 메서드를 호출하는 코드에게 예외 처리의 책임을 위임합니다.
> - throws 키워드의 예시는 아래와 같습니다.

``` java
public class ThrowsTest {
	
	public static int divide(int numerator, int denominator)
		throws ArithmeticException {
		return numerator / denominator;
	} 
	
	public static void main(String[] args) {
		
		try {
			System.out.println(divide(10, 0));
		}
		catch (ArithmeticException e) {
			System.out.println("나눗셈 오류");
		}
		catch (NullPointerException e) {
			System.out.println("객체 생성 오류");
		}
		
		System.out.println("시스템 종료");
		
	}

}
```

### 📌 finally 블록
> - finally 블록에는 예외 발생 여부와 상관없이 항상 실행되는 코드를 입력할 수 있습니다.
> - finally 블록에 입력되는 코드의 예시는 리소스 자원을 정리하는 코드 등이 있습니다.
> - 아래 예시의 finally 블록에는 Scanner 클래스의 close 메서드를 입력하였습니다.

``` java
import java.util.InputMismatchException;
import java.util.Scanner;

public class FinallyTest {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int googoodan = 0;
		
		while(true) {
			try {
				System.out.println("구구단 게임을 시작하겠습니다.");
				System.out.print("2~9 사이의 숫자 입력 = ");
				googoodan = scan.nextInt();
				
				if(googoodan < 2 || googoodan > 9) {
					// InputMismatchException 발생 가능성
					throw new InputMismatchException("2~9 사이의 정수를 입력하세요.");
				}
				else {
					// 구구단 나열을 위한 반복문
					for(int i = 1; i < 10; i++) {
						System.out.print(googoodan + " X " + i + " = " + (googoodan * i) + "   ");
					}
					
					// 출력이 끝나면 이탈
					break;
				}
			}
			// 예외 발생 시 코드 실행
			// Exception 슈퍼 클래스는 Java에서 발생될 수 있는 모든 종류의 예외 포함
			catch(Exception e) {
				// 버퍼 해소
				scan.nextLine();
				// null이면 문구 출력, null이 아니면 메시지 출력
				String comment = (e.getMessage() == null ? "잘못 입력하였습니다." : e.getMessage());
				System.out.println(comment);
			}
			// 예외 발생 유무와 상관 없이 실행
			finally {
				if(googoodan >= 2 && googoodan <= 9) {
					System.out.println();
					System.out.println("final");
				}
			}
		}
		
	}

}
```

### 📌 기타 방법
> - 예외 처리는 다양한 방법으로 이뤄지며 아래는 간략하게 종류만 작성하였습니다.
> - Try-with-resources : AutoCloseable 인터페이스를 구현한 객체를 자동으로 차단
> - Exception Chaining : 하나의 예외를 다른 예외로 포장
> - Exception Suppression : 특정 예외를 명시적으로 무시
> - 조건문 사용 : 단순 예외 상황 원천 차단
> - 사용자 정의 : 애플리케이션 요구에 맞는 예외를 정의하여 구체적인 예외 처리 가능

<br>
<br>
<br>
