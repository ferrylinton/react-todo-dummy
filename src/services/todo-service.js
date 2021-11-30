import { generateId } from "./id-service";

var datas = [
  {
    id: generateId(),
    task: "Todo NEW",
    status: "PENDING",
    email:"ferrylinton@gmail.com",
    createdAt: new Date(),
    updatedAt: null
  },
  {
    id: generateId(),
    task: "Todo PENDING",
    status: "PENDING",
    email:"ferrylinton@gmail.com",
    createdAt: new Date(),
    updatedAt: null
  },
  {
    id: generateId(),
    task: "Todo DONE",
    status: "DONE",
    email:"ferrylinton@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: generateId(),
    task: "Todo DELETED",
    status: "DELETED",
    email:"ferrylinton@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const get = () => {
  return datas;
}

export const search = (keyword) => {
  return datas.filter(todo => todo.task.toLowerCase().includes(keyword.toLowerCase()));
}

export const add = ({ task, email }) => {
  datas.push({
    id: generateId(),
    task,
    status: "PENDING",
    email,
    createdAt: new Date(),
    updatedAt: null
  });
}

export const update = ({ id, task, status, email }) => {
  if(id){
    const index = datas.findIndex(obj => obj.id === id);

    if(index !== -1){
      const updatedAt = new Date();
      const todo = { ...datas[index], task, status, email, updatedAt };

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
      datas[index].status = "DELETED";
      datas[index].updatedAt = new Date();
    }
  } 
}