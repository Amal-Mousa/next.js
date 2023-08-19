"use client"

type TodoItemProps ={
  id: string,
  string: string, 
  complete: boolean,
  toggle: (id: string, complete: boolean) => void,
}

export function TodoItem({id, string, complete, toggle}: TodoItemProps){
  return <li className="flex gap-1 items-center">
    <input id={id} 
      type="checkbox" 
      className="cursor-pointer peer"
      defaultChecked={complete}
      onChange={(e)=>toggle(id, e.target.checked)}/>
    <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{string}</label>
  </li>
}