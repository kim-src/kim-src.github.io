---
title: 싱크홀(공동) 자동 분석 AI 모델 VisualCavity AI v0.1.3
date: 2024-03-16 21:00:00 +09:00
categories: [VisualCavity, VisualCavity AI]
tags: [Python, TensorFlow, AI, AI Model, Numpy, VisualCavity, VisualCavity AI, Machine Learning, Deep Learning, CNN]
---

<!-- 2024-02-26 글 작성 시작; 2099-01-01 페이지 호출 필요 -->
## ✅ 싱크홀(공동) 자동 분석 AI 모델 VisualCavity AI

<br>

### 🔔 1. Introduction
### 📌 모델 소개
> - 모델명 : VisualCavity AI (ver. 0.1.3)
> - 모델분류 : 이미지 학습 CNN AI 모델
> - 상세내용 : 싱크홀(공동) 자동 분석 프로그램 제작을 위한 이미지 학습 AI 모델
> - 개발목적 : 3D-GPR 데이터 분석 난이도 하향
> - 주요자료 : 지하 물리 탐사로 획득한 74,838장의 싱크홀 또는 지장물 이미지

### 📌 VisualCavity AI v0.1.0 소개
> - <a href="https://kim-src.github.io/posts/%EC%8B%B1%ED%81%AC%ED%99%80(%EA%B3%B5%EB%8F%99)-%EC%9E%90%EB%8F%99-%EB%B6%84%EC%84%9D-AI-%EB%AA%A8%EB%8D%B8-VisualCavity-AI-v0.1.0/">해당 AI 모델의 깃허브 블로그 글(링크)</a>
>   - VisualCavity v0.1.0 소개
>   - 전문 용어 및 개념 정리 : CNN, GPR, 싱크홀, 지장물, 맨홀, GPR 탐사 모습 등
>   - 싱크홀 및 지장물에 대한 GPR 이미지 설명
>   - AI 모델 구축을 위한 코드 정보
>   - VisualCavity AI v0.1.0 테스트 결과
>   - VisualCavity AI 개발 현황
> - <a href="https://github.com/Kim-src/VisualCavity">해당 AI 모델의 깃허브 README.md(링크)</a>

<br>

### 🔔 2. Methodology
### 📌 개발 환경
> - Google Colab에서 Python 코드를 작성하였습니다.
> - 주로 사용된 Python 라이브러리는 TensorFlow, OpenCV 입니다.
> - AI 학습용 이미지 데이터 출처는 과학기술정보통신부 주관의 <a href="https://www.aihub.or.kr/">AI Hub 사이트</a>입니다.

### 📌 기존 이미지 데이터 분석
> - 데이터 출처는 AI HUB입니다.
> - 기존의 싱크홀 및 지장물 이미지 데이터는 총 192,120장입니다.
> - 데이터 분석 과정에서 해당 데이터는 3D 구성 데이터 중 일부만으로 구성되어 있었습니다.
> - 3D 데이터는 종단면(Y-Z), 횡단면(X-Z), 평단면(X-Y) 세 가지로 구분됩니다.
> - 기존 데이터의 데이터 셋은 종단면 및 평단면으로만 구분되었습니다.
> - 종단면
> - 그런데 기존 데이터는 크게 두 가지 단면 종단면(Longitudinal Section)과 평단면(Plan Section) 세

<br>

### 🔔 3. Results
### 📌 부제목

<br>

### 🔔 4. Conclusions
### 📌 부제목

<br>

### 🎁 5. References

<br>

### 🔔 6. Appendix
### 🚀 VisualCavity AI 개발 현황 (현재 ver. 0.1.0)
> - v0.1.0 : Train 싱크홀 이미지 1장 학습 완료(2024-01-09)  
>   - 기초 모델을 구축하였고 단일 싱크홀 이미지를 학습시킴  
> - v0.1.3 : 싱크홀 및 지장물 이미지에 대한 Train, Validation, Test 데이터셋 비중 조절  
>   - 기존 : Train 170,774장, Validation 21,346장
>   - 변경 : Train 134,484장, Validation 28,818장, Test 28,818장  
> - v0.1.7 : Test 데이터셋을 포함한 VisualCavity 개발 계획 재구성  
>   - 현재 : 초기 AI 모델 개발 계획  
>   - 추후 : 발전된 AI 모델 개발 계획(v0.1.7 이후 전반적인 개발 계획 변경 예정)  
> - v0.2.0 : Train 싱크홀 이미지 11,205장 학습 완료  
>   - 기존 모델에 싱크홀 이미지만이 아닌 지장물 이미지를 추가적으로 학습시킴  
>   - 싱크홀 및 지장물을 구분할 수 있는 능력을 상승시킴  
> - v0.3.0 : Validation 싱크홀 이미지 1,401장을 이용하여 학습된 이미지 11,205장에 대한 검토 완료  
> - v0.4.0 : Train 싱크홀 이미지 34,136장 학습 완료  
> - v0.5.0 : Validation 싱크홀 이미지 장을 이용하여 학습된 이미지 34,136장에 대한 검토 완료  
> - v0.4.0 : Train 싱크홀 이미지 34,136장 학습 완료  
> - v0.5.0 : Validation 싱크홀 이미지 장을 이용하여 학습된 이미지 34,136장에 대한 검토 완료  
> - v0.6.0 : Train 싱크홀 및 지장물 이미지 170,774장 학습 완료  
> - v0.7.0 : Validation 이미지 21,346장을 이용하여 학습된 이미지 170,774장에 대한 검토 완료  
> - v0.8.0 : Train 싱크홀 이미지 98,435장 학습 완료  
> - v0.9.0 : Validation 싱크홀 이미지 12,304장을 이용하여 학습된 이미지 11,205장에 대한 검토 완료  
> - v1.0.0 : AI를 이용한 싱크홀 분석 모델 생성(싱크홀 분석 프로그램에 본 AI 모델을 적용시킬 예정)   

<br>
<br>
<br>
