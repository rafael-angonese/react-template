import { defineConfig } from 'orval'

export default defineConfig({
  petstore: {
    input: {
      target: './petstore.yaml',
    },
    output: {
      target: './src/api/endpoints.ts',
      mock: true, // msw
      prettier: true,
      client: 'react-query',
      mode: 'split',
      override: {
        mutator: {
          path: './src/api/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
  petstoreZod: {
    input: {
      target: './petstore.yaml',
    },
    output: {
      mode: 'split',
      client: 'zod',
      target: 'src/api',
      // fileExtension: '.zod.ts',
    },
  },
})
