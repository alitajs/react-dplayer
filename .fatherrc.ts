import { resolve } from 'path';

export default {
  cjs: 'babel',
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  doc: {
    modifyBundlerConfig: (config) => {
      config['resolve'].alias = Object.assign({}, config['resolve'].alias, {
        '@': resolve(__dirname, 'src'),
        '@examples': resolve(__dirname, 'examples'),
      });
      return config;
    }
  }
};
