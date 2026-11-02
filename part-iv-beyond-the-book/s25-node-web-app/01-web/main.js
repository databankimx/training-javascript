import {createServer} from 'node:http';
const server=createServer((req,res)=>{
  res.setHeader('Content-Type','application/json');
  if(req.url!=='/health'){
    res.statusCode=404;
    res.end(JSON.stringify({error:'Not found'}));
    return;
  }
  if(req.method!=='GET'){
    res.statusCode=405;
    res.setHeader('Allow','GET');
    res.end('{}');
    return;
  }
  res.end(JSON.stringify({status:'ok'}));
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
try{
  const response=await fetch('http://127.0.0.1:'+server.address().port+'/health');
  console.log(await response.json());
}finally{
  await new Promise(resolve=>server.close(resolve));
}
