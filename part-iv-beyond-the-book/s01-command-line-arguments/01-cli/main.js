const args = process.argv.slice(2);
const name = args[0] ?? 'learner';
console.log('Hello, ' + name);
console.log('Arguments:', args.length);
