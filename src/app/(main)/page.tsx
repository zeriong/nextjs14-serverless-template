"use client";

import Link from "next/link";
import { useUserStore } from "@/store/auth/useUserStore";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { EXAMPLE_LIST } from "@/constants/common";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const { users, setUser } = useUserStore();

  const [characters, updateCharacters] = useState(EXAMPLE_LIST);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  useEffect(() => {
    setUser([]);
  }, []);

  return (
    <div className="">
      <p>메인페이지입니다.</p>
      <div>
        <ul>
          {users.map((user: any) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </ul>
      </div>

      <Link href="/admin" type="button">
        어드민으로
      </Link>

      {/* react beautiful- dnd example section */}
      <section className="mt-[20px] flex flex-col items-center justify-center text-[20px]">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({ userId, username, avatar }, index) => {
                  console.log("zz", username);
                  return (
                    <Draggable key={userId} draggableId={userId} index={index}>
                      {(provided) => (
                        <li
                          className="mb-1 flex items-center rounded-md border-2 border-gray-500"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="h-[150px] w-[300px] shrink-0 overflow-hidden bg-gray-400">
                            <Image src={avatar} alt={`${username} Thumb`} className="block h-auto w-full" />
                          </div>
                          <p>{username}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </div>
  );
}
