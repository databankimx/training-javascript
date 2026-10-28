const learners = [{name:'Ada',tags:['js','sql'],profile:{active:true}},{name:'Grace',tags:['python'],profile:{active:false}}];
const selected = learners.filter(user => user.profile?.active === true && user.tags.includes('js'));
console.log(selected.map(({name}) => ({name})));
