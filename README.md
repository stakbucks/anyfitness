
링크: https://anyfitness.co.kr

### 개요
- (주)애니휘트니스 홈페이지 리뉴얼
- 회사를 소개하고, 회사에서 제작하는 여러가지 제품, 납품사례 등을 보여주는 홈페이지

### 목표
- 기존에 php, jquery로 개발된 홈페이지의 문제점들을 분석하여 개선 (검색엔진 최적화, SSL 미적용, UI/UX)
- 회사에 상주하는 개발자가 없기 때문에, 회사 직원분들이 콘텐츠들을 쉽게 추가, 수정, 삭제 가능하도록 데이터 관리 방식 구축

### 사용 기술
- Sanity v3, Next.js 13, Tailwind css, Framer motion
 
### 개발 내용
- 비개발자들도 쉽게 콘텐츠를 관리할 수 있도록 Headless CMS인 Sanity를 사용하여 데이터를 관리
- 모든 콘텐츠들(이미지, 제품 설명 등)을 Sanity Studio에 등록하고, 서버에서 Sanity Client를 통해 이를 불러와 보여주는 방식을 사용
- generateStaticParams를 활용하여 dynamic routing되는 모든 페이지들까지 SSG 방식으로 제작
- Sanity Studio를 통해 콘텐츠 업데이트 시, GROQ-powered Webhooks와 Next.js 13의 revalidatePath를 사용하여 on-Demand-Revalidation 방식으로 데이터 업데이트
- Sanity Studio를 통해 콘텐츠 업데이트 시, GROQ-powered Webhooks와 Vercel의 Deploy Hooks를 사용하여 자동 배포
