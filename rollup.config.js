import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import {terser} from "rollup-plugin-terser";

const WATCH = (process.env.ROLLUP_WATCH === 'true');

export default {
    input: ['src/index.js'] ,
    output: {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true
      },
    plugins: [
        resolve(),
        commonjs(),
        WATCH ? false : terser(),
        copy({
            targets: [
                {src: 'assets/index.html', dest: 'dist'},
            ],
        }),
        WATCH ? serve({contentBase: 'dist', host: '127.0.0.1', port: 8002}) : false
    ]
};
