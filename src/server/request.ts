import express from 'express';
import { glob } from 'glob';
import Mock from 'mockjs';
import fs from 'fs';
import { resolve, dirname } from 'path';
import { searchGlobal, searchTip } from './templates/search';
import { fileURLToPath } from 'url';

// const __dirname = __dirname
// const Koa = require('koa')
// const Router = require('koa-router')
// const glob = require('glob')
// const fs = require('fs');
// const { resolve } = require('path');
// const Mock = require('mockjs');
// const { searchTip, searchGlobal } = require('./templates/search');

const router = express.Router();

router.get('/v1/search/tip', (req, res, next) => {
  const { qs } = req.query;
  console.log('qs', qs);
  res.send({
    data: Mock.mock(searchTip(qs)),
    state: 200,
    type: 'success'
  });
});

router.get('/v1/search/global', (req, res, next) => {
  const { qs } = req.query;
  console.log('qs', qs);
  res.send({ data: Mock.mock(searchGlobal(qs)), state: 200, type: 'success' });
});

console.log('dirname', __dirname);

glob(resolve(__dirname, '../../mock/api', '**/*.json')).then((files) => {
  console.log('glob', files.length);
  files.forEach((item, i) => {
    let apiJsonPath = item && item.split('/api')[1];
    let apiPath = apiJsonPath.replace('.json', '');
    console.log('------', apiPath);

    router.get(apiPath, (req, res, next) => {
      try {
        let jsonStr = fs.readFileSync(item).toString();
        res.send({
          data: JSON.parse(jsonStr),
          state: 200,
          type: 'success' // 自定义响应体
        });
      } catch (err) {
        res.status(500).send('something is wrong');
      }
    });
  });
});

export default router;
