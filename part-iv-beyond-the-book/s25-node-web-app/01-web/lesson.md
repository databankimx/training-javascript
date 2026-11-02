# S25 · Node HTTP routing (Flask counterpart)

## Learning goal

S25 · Node HTTP routing (Flask counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

An HTTP server has to decide what a request means and say something useful back. Returning the same happy response to every URL is easy, but makes troubleshooting rather philosophical.

An HTTP server receives a method and URL, selects behavior, and returns a status, headers, and a body. Routes should distinguish unknown paths from unsupported methods. This short server closes after its own smoke request so it is suitable for the lesson runner. The Learning Log project develops a persistent browser interface; a real authenticated service needs additional design.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect an object with status ok; the server then closes.

## Example code

```javascript
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
```

## Expected output

```text
ok
```

## Walk through the example

The request handler first distinguishes the path, then the allowed method, then returns its success body. The local client calls the assigned port and parses the JSON. finally closes the server after the demonstration. The extension tests exercise branches the happy-path request never enters.

## Try it yourself

Request a missing route and POST /health. Assert status codes and the Allow header.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
