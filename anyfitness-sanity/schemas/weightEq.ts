import targetBodyParts from './targetBodyParts'

export default {
  title: '웨이트',
  name: 'weightEq',
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
        {name: 'size', type: 'string', title: 'SIZE'},
        {name: 'block_deviceWeight', type: 'string', title: '블럭무게/기기중량'},
        {name: 'frame', type: 'string', title: '프레임'},
        {name: 'targetMuscles', type: 'string', title: '단련근육'},
        {
          name: 'targetBodyParts',
          type: 'reference',
          to: [{type: 'targetBodyParts'}],
          title: '단련부위',
        },
        {name: 'features', type: 'array', of: [{type: 'string'}], title: '특징'},
      ],
    },
  ],
}
