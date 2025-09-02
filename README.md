# 프로젝트 개요

CRA 기반으로 개발된 리액트 웹 애플리케이션 "몬까사"

가구 전문 이커머스 서비스 개발을 목표로 
브랜드 제작 단계부터 광고 기획까지 아우르는 
풀 프로세스를 반영해 설계되었으며,
컴포넌트 단위의 모듈화와 CSS Module을 통한 스타일 캡슐화로 
유지보수를 용이하게 했습니다.

관심사 분리를 통한 높은 재사용성과 확장성을 보장하여, 
안정적이면서도 유연한 서비스 개발 구조를 구현했습니다.


# "몬까사, 포근함을 완성하다"
Bootstrap 기반 반응형 광고 이벤트 페이지를 통해, 고객에게 친환경(ESG) 가치를 선보입니다.
2050세대의 라이프스타일을 공략하는 맞춤형 가구/인테리어 경험을 제공하는 글로벌향 프로젝트입니다.

# 🌿 늘(Neul)
> **항상 자연처럼 존재하는, 부드러운 울림** 

## 💫 팀 소개
| position | name |
|------------------|----------------|
| 기획 / 서브디자인 | 지영 |
| 메인디자인 | 예슬 |
| 개발팀장 / 서브디자인 | 소희 |
| 개발 / 서브디자인 | 아현 |
| 개발 / 백엔드 | 성현 |


# package.json

"dependencies": {<br>
    "@testing-library/dom": "^10.4.1",<br>
    "@testing-library/jest-dom": "^6.8.0",<br>
    "@testing-library/react": "^16.3.0",<br>
    "@testing-library/user-event": "^13.5.0",<br>
    "bootstrap": "^5.3.8",<br>
    "react": "^19.1.1",<br>
    "react-dom": "^19.1.1",<br>
    "react-router-dom": "^6.30.1",<br>
    "react-scripts": "5.0.1",<br>
    "web-vitals": "^2.1.4"<br>
  },

## 폴더와 파일구조

<img src="https://github.com/sohee622/moncasa_signature_webapp_cra/blob/main/public/img/Frame%202.png?raw=true">
<a href='https://www.figma.com/board/ZX9l0rSE3u4Pupyi7yU6Qx/%EB%AA%AC%EA%B9%8C%EC%82%AC%EB%A6%AC%EC%95%A1%ED%8A%B8_%EB%A6%AC%EB%93%9C%EB%AF%B8?node-id=0-1&t=vb7L6M3lQ2CZuR5y-1'>자세히 보기</a>

- 랜더링관련 정보추가 예정


## 🏷️ 말머리

| 말머리 | 설명 |
|--------|------|
| `lib` | 라이브러리 설치 |
| `marge` | 코드병합 |
| `feat` | 새로운 기능 또는 컨텐츠 추가 |
| `perf` | 성능 개선 |
| `refactor` | 기능 변경 없이 코드 구조 개선 |
| `style` | 코드 포맷팅, 세미콜론 누락 등 스타일 관련 수정 (기능 변화 없음) |
| `test` | 테스트 코드 추가 또는 수정 |
| `docs` | 문서 수정 |
| `fix` | 버그 수정 |
| `chore` | 빌드 업무, 패키지 매니저 설정 등 기타 작업 |
| `MD` | README 수정 |

## 📌 버전 관리 기준

| 유형 | 설명 | 예시 |
|------|------|------|
| `MAJOR` | 호환되지 않는 대규모 변경이 있을 때, 라이브러리 설치될때, DB연동 | `1.5.2 → 2.0.0` |
| `MINOR` | 호환되면서 새로운 기능이 추가될 때 | `1.5.2 → 1.6.0` |
| `PATCH` | 호환되며 버그 수정 또는 사소한 변경이 있을 때 | `1.5.2 → 1.5.3` |

