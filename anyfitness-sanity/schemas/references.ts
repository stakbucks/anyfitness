export default {
  title: '납품사례',
  name: 'references',
  type: 'document',
  fields: [
    {
      title: '이름',
      name: 'name',
      type: 'string',
    },
    {
      title: '분류',
      name: 'type',
      type: 'string',
    },
    {
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: '사진',
    },
  ],
}
