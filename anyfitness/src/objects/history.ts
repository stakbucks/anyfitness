type IHistory = {
  year: number;
  details: { month: number; description: string; highlight: boolean }[];
};

export const companyHistory: IHistory[] = [
  {
    year: 2022,
    details: [
      {
        month: 12,
        description: '광주시 모범기업인 표창',
        highlight: false,
      },
    ],
  },
  {
    year: 2021,
    details: [
      {
        month: 6,
        description: '야외운동기구 KC 인증',
        highlight: false,
      },
    ],
  },
  {
    year: 2020,
    details: [
      {
        month: 8,
        description: '분체 도장 전문시설',
        highlight: false,
      },
      {
        month: 6,
        description: '장애인 전용 휠체어 웨이트기구 출시',
        highlight: true,
      },
      {
        month: 2,
        description: '본사이전 - 경기도 광주시 초월읍 동막골길 197-7',
        highlight: false,
      },
    ],
  },
  {
    year: 2019,
    details: [
      {
        month: 2,
        description: '야외운동기구 특허등록',
        highlight: false,
      },
    ],
  },
  {
    year: 2018,
    details: [
      {
        month: 1,
        description: '대표이사 변경 여성기업 등록',
        highlight: true,
      },
    ],
  },
  {
    year: 2013,
    details: [
      {
        month: 3,
        description: '대표이사 변경 여성기업 등록',
        highlight: false,
      },
      {
        month: 3,
        description: 'K 마크 인증 획득',
        highlight: false,
      },
    ],
  },
  {
    year: 2012,
    details: [
      {
        month: 5,
        description: '조달 우수 발명품 우선구매추천 확인서 획득',
        highlight: false,
      },
    ],
  },
  {
    year: 2007,
    details: [
      {
        month: 3,
        description: '조직접생산증명(중소기업중앙회)',
        highlight: false,
      },
    ],
  },
  {
    year: 2006,
    details: [
      {
        month: 4,
        description: '독일FIBO 2006 전시회 참가',
        highlight: false,
      },
    ],
  },
  {
    year: 2005,
    details: [
      {
        month: 9,
        description: '벤처기업 등록',
        highlight: false,
      },
      {
        month: 4,
        description:
          '헬스기구(런닝머신, 바이크) 의장 등록, 기업부설연구소 등록',
        highlight: false,
      },
    ],
  },
  {
    year: 2004,
    details: [
      {
        month: 9,
        description: 'ISO9001 국제 품질인증획득',
        highlight: false,
      },
      {
        month: 8,
        description: '(주)애니휘트니스 법인설립',
        highlight: false,
      },
    ],
  },
  {
    year: 1997,
    details: [
      {
        month: 5,
        description: '유명스포츠 서울전시장 OPEN',
        highlight: false,
      },
    ],
  },
  {
    year: 1996,
    details: [
      {
        month: 9,
        description: '유명스포츠 설립',
        highlight: false,
      },
    ],
  },
];
