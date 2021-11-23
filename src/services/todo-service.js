import { generateId } from "./id-service";

const datas = [
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: true
  },
  {
    id: generateId(),
    task: "This is a sampe todo",
    created: new Date(),
    completed: false
  }
];

export const get = () => {
  return datas;
}

export const add = (task) => {
  console.log(`.......... add ${task}`);
  datas.push({
    id: generateId(),
    task,
    created: new Date(),
    completed: false
  });
}