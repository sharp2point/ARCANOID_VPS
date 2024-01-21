import path from 'node:path';
import { fileURLToPath } from 'node:url';
import "dotenv/config"
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import zlib from "node:zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log("PATH: ",path.join(__dirname, 'public'))
const fastify = Fastify({
  logger: true
});

//-------------------------------------------
const port = process.env.PORT;
const host = process.env.HOST;
//-------------------------------------------
await fastify.register(
  import('@fastify/compress'),
  { global: true, encodings: ['deflate', 'gzip']  }
)
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', 
  redirect: true,
  wildcard: false,
  //index: "index.html",
  list: { //------------------  http://localhost:3000/public ------------------------>
    format: 'json',
    jsonFormat: 'extended',
    render: (dirs, files) => {
       const dir = dirs[0];
      dir.fileCount // number of files in this folder
      dir.totalFileCount // number of files in this folder (recursive)
      dir.folderCount // number of folders in this folder
      dir.totalFolderCount // number of folders in this folder (recursive)
    },
  }
});
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public/models'),
  prefix: '/public/',
  redirect: true,
  wildcard: false,
  decorateReply: false,
});

//------------------  http://localhost:3000 ------------------------>
fastify.get('/', {
  compress: {
    inflateIfDeflated: false,
    threshold: 128,
    // zlibOptions: {
    //   level: 4, // default is typically 6, max is 9, min is 0
    // },
    brotliOptions: {
      params: {
        [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT, // useful for APIs that primarily return text
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11, // default is 11, max is 11, min is 0
      },
    },
  }
}, (request, reply) => {
  reply.sendFile('index.html');
});


const start = async () => {
    fastify.listen({ port: port, host: host }, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`server listening on ${address}`)
    });
}
start();