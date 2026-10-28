import http from 'node:http';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { within, discover } from '../lesson-runner/catalog.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const id=(process.argv[2] || '').replaceAll('\\','/');
const lesson=(await discover(root)).find(item=>item.id===id&&item.runtime==='browser');
if(!lesson)throw new Error('Pass the relative folder of a browser lesson containing lesson.json');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'};
const server=http.createServer(async(req,res)=>{
  try{
    if(req.method!=='GET'){
      res.writeHead(405);
      res.end();
      return;
    }
    if(req.headers.host!==`127.0.0.1:${server.address().port}`){
      res.writeHead(403);
      res.end();
      return;
    }
    const url=new URL(req.url,'http://127.0.0.1');
    const name=decodeURIComponent(url.pathname)==='/'?'index.html':decodeURIComponent(url.pathname).slice(1);
    const full=await within(lesson.folder,name);
    const ext=path.extname(full);
    if(!types[ext])throw new Error('Unsupported file');
    res.writeHead(200,{'Content-Type':types[ext],'X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});
    res.end(await readFile(full));
  }catch{
    res.writeHead(404);
    res.end('Not found');
  }
});
server.listen(0,'127.0.0.1',()=>console.log(`Open http://127.0.0.1:${server.address().port}/\nCtrl+C to stop.`));
