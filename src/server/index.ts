import express from 'express';
import webpack from 'webpack';
import webpackDevMid from 'webpack-dev-middleware';
import webpackHotMid from 'webpack-hot-middleware';
import webpackHotServerMid from 'webpack-hot-server-middleware';
import webpackConfig from '../../config/webpack.config.cjs';
import router from './request';
// import * as serverRender from '../client/views/app/Server';
// const { render } = serverRender;

const env = process.env.NODE_ENV;

const compiler = webpack(webpackConfig as any[]);
const clientCompiler = compiler.compilers.find((compiler) => compiler.name === 'client');
const clientConfig = webpackConfig.find((config: any) => config.name === 'client');

const app = express();
app.use('/api', router);

if (env === 'dev') {
  app.use(webpackDevMid(compiler, { publicPath: clientConfig?.output?.publicPath, serverSideRender: true, index: false }));

  app.use(
    webpackHotMid(clientCompiler as any, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  );
  app.use(webpackHotServerMid(compiler as any));
}
// else {
//   app.use(express.static('/public'));
//   app.use((req, res) => render(req, res));
// }

app.listen(5001, () => {
  console.log('server start on 5001');
});
