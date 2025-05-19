import { useMemo, useRef, useState } from "react";
import React from "react";

// warmup: convert to typescript with 1 generic
function arrayMap<T>(arr: T[], mapper: (arg: T) => T) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    mapped[i] = mapper(arr[i]);
  }
  return mapped;
}

const foo: number[] = [1, 2, 3];
const foo2 = arrayMap(foo, (num) => num * 2);

let todoId = 0;

// convert to typescript

type Todo = {
  name: string;
  id: number;
};

type TodoListArgument = {
  initialTodosOrUndefined: Todo[] | undefined;
};

function TodoList({ initialTodosOrUndefined }: TodoListArgument) {
  // function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  const [todos, setTodos] = useState(initialTodosOrUndefined || []);

  function create() {
    setTodos((prev) => [
      ...prev,
      {
        name: "name",
        id: todoId++,
      },
    ]);
  }

  function remove(index: number) {
    setTodos((prev) => {
      prev = [...prev];
      prev.splice(index, 1);
      return prev;
    });
  }

  // function useMemo<T>(factory: () => T, deps: DependencyList): T;
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => b.id - a.id);
  }, []);

  return (
    <div>
      {sortedTodos.map((todo) => (
        <div key={todo.name}>
          name: {todo.name}
          id {todo.id}
        </div>
      ))}
      <input type="number" placeholder="piority" min="0" max="99"></input>
      <button onClick={create}>Create new todo</button>
    </div>
  );
}
