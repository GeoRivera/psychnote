import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/sandbox.js',
  plugins: [
    resolve(),
    // commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  output: {
    // sourcemap: true,
    file: 'dist/sandbox.js',
    name: 'sandbox',
    format: 'iife',
    indent: false
  }
};
