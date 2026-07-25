import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../api/src/schema.graphql',
  documents: ['**/*.graphql'],
  generates: {
    './lib/graphql/__generated__/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        scalars: { DateTime: 'string' },
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
