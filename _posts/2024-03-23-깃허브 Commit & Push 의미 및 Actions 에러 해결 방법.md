---
title: 깃허브 Commit & Push 의미 및 Actions 에러 해결 방법
date: 2024-03-23 18:00:00 +09:00
categories: [1. Web Development, GitHub Blog]
tags: [Web, Github, Github Actions, Actions, Commit, Push, git add, git status, git commit, git psuh, build, deploy]
---

<!-- 2024-03-24 글 작성 시작; 2024-03-24 페이지 호출 필요 -->
<h2>깃허브 연동 방법 및 빌드/배포 과정 이해</h2>

<br>

### 🔔 1. 깃허브의 역할
### 📌 깃허브(GitHub)
> - 깃허브는 다양한 오픈 소스 데이터를 공유할 수 있는 플랫폼입니다.
> - 따라서 개발자라면 깃허브를 이용하여 다양한 프로그램이나 서비스를 개발/관리 할 수 있습니다.
> - 게다가 GitHub Pages(일명 깃허브 블로그)에 소프트웨어 개발 과정을 기록할 수 있습니다.
> - 이러한 깃허브를 이용하기 위해서는 원격 저장소인 깃허브에 자료를 연동시킬 수 있어야 됩니다.
> - 그래서 이번 글에서는 깃허브 연동과 관련된 코드와 연동 과정에 대한 내용을 소개하였습니다.

### 📌 깃허브 연동
> - 깃허브에 로컬 저장소에 있는 데이터를 연동시키는 방법은 각종 IDE 마다 상이합니다.
> - 그런데 다행히도 Git 명령문에는 일련의 공통점이 있습니다.
> - 바로 ```git add .```, ```git status```, ```git commit -m "message"```, ```git push```입니다.
> - 이번 글에서는 이들 명령문의 의미와 ```git push``` 이후 과정에 대해 말씀드리겠습니다.
> - 참고로 각 IDE에서 깃허브로 데이터를 연동시키는 방법을 아래와 같습니다.
>    - IntelliJ에서 깃허브로 Commit & Push 하는 방법
>    - VS Code에서 깃허브로 Commit & Push 하는 방법
>    - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-Jekyll%EC%9D%98-Chirpy-%ED%85%8C%EB%A7%88-%EC%A0%81%EC%9A%A9%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95/#-github-actions">Git Bash에서 깃허브로 Commit & Push 하는 방법 ('4. 포스팅' 내용)</a>
>    - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C%EC%97%90-STS3-%EC%97%B0%EB%8F%99-%EB%B0%8F-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/">STS3에서 깃허브로 Commit & Push 하는 방법</a>

<br>

### 🔔 2. Git 명령문의 종류
### 📌 New Repository
> - 깃허브 레포지토리를 처음 생성해보신 분이라면 당황스러울 것입니다.
> - 아무 내용도 입력할 수 없는 페이지가 호출되기 때문입니다.
> - New Repository의 중앙에는 ```$ git commit``` 등의 명령문이 작성되어 있습니다.
> - 아래 문단부터는 Git 명령문의 뜻과 실질적으로 사용되는 명령문에 대해 알아보겠습니다.
> - 참고로 <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/#-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%A0%84%EC%9A%A9-github-repository-%EC%83%9D%EC%84%B1">깃허브 레포지토리 생성 방법</a>은 링크된 글에 잘 작성되어 있습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/10a15fd2-9126-40d4-ad08-dc85f2728ad2" alt="figure">
    <figcaption>깃허브 레포지토리의 초기 페이지 및 Git 명령어</figcaption>
</figure>

### 📌 Commit & Push
> - Commit은 스테이징 영역에 있는 데이터를 로컬 저장소에 저장하는 것입니다.
> - Push는 로컬 저장소에 저장된 데이터를 원격 저장소에 저장하는 것입니다.
> - 아래 문단부터는 이와 관련된 명령문에 대해 상세하게 설명하였습니다.

### 📌 git init
> - ```git init``` 명령문은 로컬 저장소 데이터를 원격 저장소로 초기화 하는 것입니다.
> - 이 명령문을 실행하면 로컬 저장소에 숨김 상태의 '.git' 폴더가 생성됩니다.
> - '.git' 폴더에는 Git 관련 정보가 저장되고 이를 통해 Git 명령문을 실행시킬 수 있습니다.
> - 참고로 '로컬 저장소'는 '폴더'를 의미하고 '원격 저장소'는 '깃허브 레포지토리'를 의미합니다.
> - ```git init``` 명령문은 로컬-원격 저장소 연동 초반을 제외하면 입력할 필요가 없는 명령문입니다.

### 📌 git add
> - ```git add``` 명령문은 로컬 저장소의 변경사항을 임시 저장소인 스테이징 영역에 추가하는 것입니다.
> - 변경사항에는 추가 또는 수정된 파일이 포함되고 코드 한 단어만 수정해도 변경됐다고 인식합니다.
> - ```git add .```의 '.'은 'all'을 의미하며 모든 변경사항을 스테이징 영역에 추가하는 명령문입니다.
> - ```git add README.md```는 원격 저장소에 README 파일을 추가하는 명령문입니다.

### 📌 git commit
> - ```git commit``` 명령문은 스테이징 영역에 추가된 변경사항을 로컬 저장소에 기록하는 것입니다.
> - Commit은 일반적인 파일 저장과는 달리 로컬 저장소 전체를 저장시키는 기능입니다.
> - 정확히는 Commit 기능을 통해 깃허브 서버에 데이터가 반영구적으로 저장 및 기록됩니다.
> - 단순한 저장이 아니라 Commit 당시의 폴더 및 파일의 단어 하나 단위로 정확히 저장됩니다.
> - 따라서 추후 ```git reflog``` 등을 이용하여 Commit 시점으로의 강력한 복구가 가능합니다.

### 📌 git commit -m "message"
> - Commit 명령어는 커밋 메시지와 함께 입력해야 됩니다.
> - 로컬 저장소에 반영구적으로 저장되는 기록이기 때문에 메시지 작성에도 신중해야 됩니다.
> - 왜냐하면 추후 Commit 시점으로의 복구 시 커밋 메시지가 지표 역할을 하기 때문입니다.
> - ```-m```은 message의 약자이고 쌍따옴표(") 안에는 메시지를 타이핑하시면 됩니다.

### 📌 git branch
> - ```git branch``` 명령문은 연동 대상 원격 저장소의 branch를 선택하는 것입니다.
> - 깃허브 레포지토리는 main branch가 기본적으로 존재하지만 새로운 브랜치로 구분할 수 있습니다.
> - ```git branch``` 명령문은 신규 개발자 분들의 경우 사용하실 일이 거의 없습니다.
> - 명령문 실행창에 ```git branch```라고만 입력하면 현재 저장소의 브랜치 목록이 출력됩니다.

### 📌 git remote add origin
> - ```git remote add origin '.git url'``` 명령어는 원격 저장소의 URL을 Git에 추가하는 것입니다.
> - ```git remote``` 명령문을 입력해야 로컬-원격 저장소가 서로 연결되는 것입니다.
> - 참고로 origin은 원격 저장소인 깃허브 레포지토리의 별칭입니다.
> - ```git remote``` 명령문 이후 ```git push``` 및 ```git pull``` 명령문 사용이 가능합니다.

### 📌 git push -u origin main
> - Push 명령어는 로컬 저장소에 저장된 변경사항을 원격 저장소에 저장시키는 것입니다.
> - 특히 ```git push -u origin main``` 명령문은 main 브랜치에 데이터를 업로드 하는 것입니다.
> - ```git init```과 비슷하게 한 번만 ```git push -u origin main``` 코드를 입력하시면 됩니다.
> - 이후에는 ```git push```만 입력하더라도 ```-u origin main```을 입력한 것과 동일합니다.
> - 참고로 ```-u```는 upstream을 설정하는 옵션이며 origin은 원격 저장소의 별칭입니다.

<br>

### 🔔 3. Git 추가 개념
### 📌 Staging Area
> - 스테이징 영역은 Commit 전 변경사항이 임시로 저장되는 공간입니다.
> - Commit 전 준비 단계이지만 아직 로컬 저장소에 변경이 반영(기록)된 것은 아닙니다.
> - Git 명령어로 스테이징 영역과 관련된 내용을 설명드리겠습니다.
>   1. ```git add .``` : 파일의 모든( . ) 변경사항을 Git 스테이징 영역에 임시저장
>   2. ```git status``` : 스테이징 영역에 임시저장 된 변경사항 출력
>   3. ```git reset``` : 스테이징 영역에 임시저장 된 모든 변경사항 삭제
>   4. ```git commit``` : 스테이징 영역에 임시저장 된 변경사항을 로컬 저장소에 반영구적 기록

### 📌 Version Control System (VCS)
> - <a href="https://kim-src.github.io/categories/development-tool/">Git을 이용한 웹, 앱, 애플리케이션 버전 관리 방법</a>
