import { useMemo, useRef, useState } from "react";

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
function TodoList({ initialTodosOrUndefined }) {
  // function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  const [todos, setTodos] = useState(initialTodos);
  // function useRef<T>(initialValue: T): RefObject<T>;
  const priorityRef = useRef();

  function create() {
    setTodos((prev) => [
      ...prev,
      {
        name: "name",
        priority: priorityRef.current.value,
        id: todoId++,
      },
    ]);
  }

  function remove(index) {
    setTodos((prev) => {
      prev = [...prev];
      prev.splice(index, 1);
      return prev;
    });
  }

  // function useMemo<T>(factory: () => T, deps: DependencyList): T;
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => b.priority - a.priority);
  }, []);

  return (
    <div>
      {sortedTodos.map((todo) => (
        <div key={todo.name}>
          name: {todo.name}
          priority {todo.priority}
        </div>
      ))}
      <input
        type="number"
        placeholder="piority"
        min="0"
        max="99"
        ref={priorityRef}
      ></input>
      <button onClick={create}>Create new todo</button>
    </div>
  );
}
