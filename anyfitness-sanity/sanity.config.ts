import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'anyfitness-sanity',

  projectId: '8owd48ws',
  dataset: 'production',
  useCdn: false,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
