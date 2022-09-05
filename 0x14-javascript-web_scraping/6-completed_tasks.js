#!/usr/bin/node
const axios = require('axios').default;
const url = process.argv[2];
axios.get(url)
  .then((response) => {
    const completedTasks = {};
    const tasks = response.data;
    tasks.forEach((task) => {
      if (task.completed) {
        if (task.userId in completedTasks) {
          completedTasks[task.userId]++;
        } else {
          completedTasks[task.userId] = 1;
        }
      }
    });
    console.log(completedTasks);
  })
  .catch((error) => {
    console.log(error);
  });
