"use client";

import Link from "next/link";
import React, { useState } from "react";
import DndVerticalSortableContext from "@/app/_components/dnd/DndVerticalSortableContext";
import DndVerticalSortableItem from "@/app/_components/dnd/DndVerticalSortableItem";

export default function Page() {
  const [items, setItems] = useState([
    { id: "1", name: "item" },
    { id: "2", name: "item2" },
  ]);

  return (
    <div className="p-[30px]">
      <p>관리자페이지</p>
      <Link href="/">홈으로</Link>

      <div className={"mt-4 bg-gray-400 p-3"}>
        <DndVerticalSortableContext items={items} setItems={setItems}>
          <ul className={"flex h-[2000px] flex-col gap-4 bg-red-400 p-10"}>
            {items?.map((item) => (
              <DndVerticalSortableItem key={item.name} id={item.id}>
                {({ attributes, listeners }) => (
                  <li {...attributes} {...listeners} className="bg-blue-400 p-3">
                    {item.name}
                  </li>
                )}
              </DndVerticalSortableItem>
            ))}
          </ul>
        </DndVerticalSortableContext>
      </div>
    </div>
  );
}
