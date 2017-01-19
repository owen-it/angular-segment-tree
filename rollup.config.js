import path from 'path';
import babel from 'rollup-plugin-babel';
import template from 'rollup-plugin-template';

export default {
  entry: 'index.js',
  format: 'cjs',
  //dest: path.resolve(__dirname, 'dist/angular-segment-tree.js'),
  dest: 'C:/Projetos/PCF/PCF/PCF/Scripts/AngularJs/angular-segment-tree.js',
  plugins: [ 
      template({include: 'src/templates/*.html'}),
      babel() 
  ],
  sourceMap: true
};