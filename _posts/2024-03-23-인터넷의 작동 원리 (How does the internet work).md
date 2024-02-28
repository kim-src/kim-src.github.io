---
title: 인터넷의 작동 원리 (How does the internet work)
date: 2024-03-23 21:00:00 +09:00
categories: [Fundamental, Computer Science]
tags: [Fundamental, Computer Science, Internet, How does the internet work?]
---

<!-- 2024-02-28 글 작성 시작; 2099-01-01 페이지 호출 필요 -->
## ✅ "How does the internet work?"

<br>

### 🔔 인터넷이란
### 📌 "인터넷에 접속했다"에 대한 깊은 의미
> - 인터넷을 작동시키기 위해서는 컴퓨터의 전원을 켜고 LAN 포트에 랜선을 연결하면 됩니다.
> - PC와 연결된 랜선의 다른 끝부분은 벽면의 랜포트 또는 와이파이 공유기로 연결됩니다.
> - 그렇다면 벽면 또는 와이파이 공유기에 있는 랜포트의 보이지 않는 종착 지점은 어디일까요?
> - 이번 글에서는 인터넷의 의미와 작동 원리에 대해 알아보겠습니다.


### 📌 인터넷과 네트워크
> - 인터넷이 어떻게 작동되는지 이해하려면 먼저 인터넷이 무엇인지를 인지해야 됩니다.
> - Internet이란 Inter + Network의 합성어이며 네트워크가 연결된 상태를 의미합니다.
> - 그리고 Network란 Net + Work의 합성어이며 작업 공간이 얽혀져있는 것을 뜻합니다.
> - 그러므로 작업 공간이 이어진 상태를 네트워크 및 인터넷이라고 표현할 수 있겠습니다.

### 📌 네트워크 분류
> - 이 네트워크 개념은 몇 가지 분류에 따라 아래와 같이 구분됩니다.
>   - 규모에 따른 네트워크 분류 → PAN, LAN, MAN, WAN 등
>   - 무선(wireless) 상태의 네트워크 분류 → SAN, VPN 등
>   - 데이터 전송 방식에 따른 네트워크 분류 → 패킷 교환 방식, 셀 릴레이 방식 등
>   - 노드(node) 연결 형태에 따른 네트워크 분류 → 버스형, 스타형, 링형 등
> - 여러 네트워크 개념 중 이번 글에서는 규모에 따른 유선 네트워크 분류만을 다뤄보겠습니다.

### 📌 유선 네트워크
> - 작업 공간을 PC로 가정했을 경우 작업을 하려면 컴퓨터의 전원이 켜진 상태여야 됩니다.
> - 전원이 켜진 상태의 컴퓨터 한 대는 작업을 할 수 있는 환경입니다.
> - 하지만 다른 컴퓨터와 작업이 연결된 상태라고 보기는 어렵습니다.
> - 왜냐하면 타 컴퓨터와 데이터를 주고 받을 수 있는 상태가 아니기 때문입니다.
> - 다른 컴퓨터와 작업이 연결되어 있지 않다는 것은 네트워크 환경이 아님을 의미합니다.
> - 네트워크 환경이 아니기에 인터넷이 작동된다고 보기도 어렵습니다.

### 🔔 확장되는 네트워크 규모
### 📌 Case 1. 컴퓨터끼리의 연결
> - IP 주소를 보유한 서로 다른 컴퓨터끼리 연결시킬 수 있는 가장 간단한 방법은
데이터 전송이 가능한 케이블로 서로를 연결하는 것입니다.
이는 인터넷 환경의 초창기 형태로 볼 수 있겠습니다.
이 상태는 같은 공간 안에 존재하는 컴퓨터들끼리의 작업이 서로 연결된 상태입니다.
그러므로 작은 규모의 인터넷이 작동했던 것입니다.

<br/>

하지만 수많은 컴퓨터가 연결된 네트워크 환경을 구축하기 위해서는
무수히 많은 케이블과 공간이 필요하다는 단점이 있었습니다.

<br/>

컴퓨터들끼리 케이블을 연결한 모식도는 아래와 같습니다. (출처: Mozilla)

<p align = "center"><img src = "https://github.com/Kim-src/Backend/assets/150884526/7cf0adc4-3e1f-4f1f-b986-2968a3c2f4c2" width = "70%"></p>

<br/>

### 📌 Case 2. 공유기(Router)끼리의 연결
Case 1에서의 단점을 보완해주기 위해 개발된 것이 공유기(router)입니다.
공유기는 여러 노드(node)와의 연결을 돕는 중계 장치 역할을 합니다.
서로 다른 전자기기라도 같은 공유기에 연결하면 데이터 교환이 가능한 상태가 됩니다.
참고로 노드란 IP 주소를 보유한 컴퓨터, 스마트폰 등의 정보 처리 장치입니다.

<br/>

그러므로 공유기를 활용하면 근처 컴퓨터들끼리의 연결 효율이 더 좋아집니다.
이러한 네트워크 연결망은 회사 또는 학교 정도의 규모까지는 확장시킬 수 있습니다.

<br/>

아래는 carrier class의 대규모 공유기의 외관입니다. (출처: Wikipedia)

<p align = "center"><img src = "https://github.com/Kim-src/Backend/assets/150884526/15922c12-323b-4df3-8cc9-d22a3d0e3817" width = "70%"></p>

<br/>

최근 와이파이 공유기가 상용화되면서 공유기라는 단어는 우리에게 친숙합니다.
하지만 이번 글에서 말씀드리는 공유기는 가정용 공유기(home router)가 아닙니다.
아래는 소형 공유기의 외관입니다. (출처: Wikipedia)

<p align = "center"><img src = "https://github.com/Kim-src/Backend/assets/150884526/57d4cff7-e129-485f-afea-1dcbd3503ad7" width = "70%"></p>

<br/>

공유기에 연결된 컴퓨터들끼리의 네트워크 개념도는 아래와 같습니다. (출처: Mozilla)
참고로 와이파이 공유기 등 무선 연결과 관련된 내용은 추후 작성해보겠습니다.
<p align = "center"><img src = "https://github.com/Kim-src/Backend/assets/150884526/48359b74-d306-4199-b486-7b7aa92a3fe7" width = "70%"></p>

<br/>

### 📌 Case 3. 모뎀(Modem)과 공유기의 연결
네트워크의 규모에 따라 네트워크는 크게 네 가지로 구분됩니다.
> 1. PAN: 가장 작은 규모의 네트워크 # Personal Area Network
> 2. LAN: 집, 학교, 회사 정도 규모의 네트워크 # Local Area Network
> 3. MAN: 도시, 대학교 캠퍼스 정도 규모의 네트워크 # Metropolitan Area Network
> 4. WAN: 대륙과 대륙, 국가와 국가 규모의 네트워크 # Wide Area Network

<br/>

따라서 근래의 인터넷이란 WAN 네트워크를 의미한다고 표현하는 것이 적절하겠습니다.
데이터의 교환이 대륙이나 국가와 같은 물리적인 공간을 관통하기 때문입니다.

<br/>

그런데 Case 2와 같이 공유기끼리로만 형성된 네트워크 규모는 LAN 정도입니다.
그렇다면 LAN 규모였던 네트워크를 WAN 규모로 확장시킬 수 있었던 방법은 무엇일까요?

<br/>

불가능할 것 같았던 거대 규모로의 네트워크 확장은 전화 통신 인프라로 해결되었습니다.
전화 통신 인프라는 이미 광범위한 통신망으로 전 세계에 구축된 상태였습니다.
그렇지만 전화 통신망은 아날로그(analog) 신호를 이용하고 있었습니다.
아날로그는 진동, 전압, 전류 등의 물리적인 신호입니다.
(전화 통신 인프라: telecommunications infrastructure)

<br/>

이와는 달리 컴퓨터에서 발생된 네트워크 정보는 디지털(digital) 형태입니다.
따라서 기존에 아날로그 신호만 통하던 전화 통신망을 네트워크 망으로 이용하기 위해서는
디지털 신호와 아날로그 신호를 서로 교환해주는 장치가 필요한 상황이었습니다.

<br/>

그래서 개발된 장치가 바로 모뎀입니다.
모뎀의 역할은 디지털 및 아날로그 신호를 서로 변환해주는 것입니다.

<br/>

정리하겠습니다.
현재와 같은 인터넷 환경이 구축되기까지 복잡한 일련의 과정이 있었습니다.
인터넷 환경은 서로 다른 기기와의 데이터 송수신이 가능한 상태를 뜻합니다.
이러한 인터넷이 정상 작동하려면 노드, 공유기, 모뎀이 동시에 동작하여야 됩니다.

<br/>

노드, 공유기, 모뎀이 연결된 모식도는 아래와 같습니다. (출처: Mozilla)
<p align = "center"><img src = "https://github.com/Kim-src/Backend/assets/150884526/ddce0e00-fb08-40e0-bcda-7d4cd984ea8f" width = "70%"></p>

<br/>

### 📌 ISP의 네트워크 관리
근래 네트워크는 상기 내용과 같이 노드, 공유기, 모뎀이 연결된 상태입니다.
그리고 우리의 디지털 정보는 케이블을 따라 이들 장치를 통해 전송되며 공유됩니다.
한편 데이터가 송수신되는 네트워크 환경은 개인이 관리하기 어렵습니다.

<br/>

그래서 거대한 규모의 네트워크를 관리하는 업체가 존재하게 됐습니다.
이 관리 업체를 ISP (Internet Service Provider)라고 합니다.
ISP의 역할은 송신 목적의 네트워크 정보 등을 수신 가능한 목적지로 연결시켜주는 것입니다.
즉, ISP의 역할은 인터넷 환경을 정상적으롤 유지하는 것이라고 표현할 수도 있겠습니다.

<br/>

이번 글에서는 인터넷 작동 원리를 파악해보았습니다.
다음 글에서는 HTTP가 무엇인지 알아보겠습니다.
아래 이미지는 방대한 인터넷 환경에 대한 개념도입니다. (출처: Wikipedia)
<p align = "center"><img src = "https://github.com/Kim-src/Backend/assets/150884526/2b8fa099-4759-438c-a7b0-5c47f9a36642" width = "70%"></p>

<br/>

### 🎁 References
> 1. [Developer ⏩ Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
> 2. [Youtube ⏩ Lesics](https://www.youtube.com/watch?v=x3c1ih2NJEg&t=3s)
> 3. [Youtube ⏩ BLASTERTECHNOLOGY](https://www.youtube.com/watch?v=Sfzo4xm5eX8)
> 4. [Youtube ⏩ 쉬운코드](https://www.youtube.com/watch?v=oFKYzp6gGfc&t=318)
> 5. [CCTV 뉴스 ⏩ 최형주 기자님](https://www.cctvnews.co.kr/news/articleView.html?idxno=210852)

***

<br/>
<br/>
<br/>