export default {
  title: '자료실',
  name: 'docs',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: '이름',
    },
    {
      name: 'type',
      type: 'string',
      title: '분류',
    },
    {
      name: 'file',
      type: 'file',
      title: '파일',
    },
  ],
}
