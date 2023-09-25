export default {
  title: '야외 운동기구',
  name: 'outdoor',
  type: 'document',
  fields: [
    {
      title: '제품이름',
      name: 'name',
      type: 'string',
    },
    {
      title: '분류',
      name: 'Category',
      type: 'string',
    },
    {
      title: '이미지',
      name: 'image',
      type: 'image',
    },
    {
      title: '상세이미지',
      name: 'detailImgs',
      type: 'image',
    },
    {
      title: '스펙',
      name: 'specification',
      type: 'object',
      fields: [
        {name: 'size', type: 'string', title: 'SIZE(mm)'},
        {name: 'age', type: 'string', title: '사용연령'},
        {name: 'method', type: 'array', of: [{type: 'string'}], title: '사용방법'},
        {name: 'targetMuscles', type: 'string', title: '단련근육'},
        {
          name: 'targetBodyParts',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'targetBodyParts'}]}],
          title: '단련부위',
        },
        {name: 'effects', type: 'array', of: [{type: 'string'}], title: '운동효과'},
      ],
    },
  ],
}
