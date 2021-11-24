import { generateId } from "./id-service";

var datas = [
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
  console.log(datas);
  return datas;
}

export const add = ({ task }) => {
  console.log(`.......... add ${task}`);
  datas.push({
    id: generateId(),
    task,
    created: new Date(),
    completed: false
  });
}

export const update = ({ id, task, completed }) => {
  if(id){
    const index = datas.findIndex(obj => obj.id === id);

    if(index !== -1){
      const todo = { ...datas[index], task, completed };

      datas = [
        ...datas.slice(0, index),
        todo,
        ...datas.slice(index + 1),
      ];
    }
  } 
}

export const remove = (id) => {
  if(id){
    const index = datas.findIndex(obj => obj.id === id);

    if(index !== -1){
      datas.splice(index, 1);
    }
  } 
}