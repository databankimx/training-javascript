const loadUser = () => Promise.resolve("Ada");
const loadTasks = name => Promise.resolve(`tasks for ${name}`);

async function load() {
  const user = await loadUser();
  const tasks = await loadTasks(user);
  console.log(`user: ${user}`);
  console.log(tasks);
}

load();
