import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index.js'



export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: '2021-03-25',
  useCdn: false,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
