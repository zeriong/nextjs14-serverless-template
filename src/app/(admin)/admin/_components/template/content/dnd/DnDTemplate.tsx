import React, { useState } from "react";
import DndVerticalSortableContext from "@/app/_components/dnd/DndVerticalSortableContext";
import DndVerticalSortableItem from "@/app/_components/dnd/DndVerticalSortableItem";

export default function DnDTemplate() {
  const [items, setItems] = useState([
    { id: "0", name: "item", className: "p-3 bg-red-300" },
    { id: "1", name: "item 1", className: "p-3 bg-blue-300" },
    { id: "2", name: "item 2", className: "p-3 bg-yellow-300" },
    { id: "3", name: "item 3", className: "p-3 bg-orange-300" },
    { id: "4", name: "item 4", className: "p-3 bg-black text-white" },
    { id: "5", name: "item 5", className: "p-3 bg-red-300" },
  ]);

  return (
    <div className={"bg-gray-400 p-3"}>
      <DndVerticalSortableContext items={items} setItems={setItems}>
        <ul className={"flex h-fit w-[600px] flex-col gap-4 bg-white/90 p-10"}>
          {items?.map((item) => (
            <DndVerticalSortableItem key={item.name} id={item.id}>
              {({ attributes, listeners }) => (
                <li {...attributes} {...listeners} className={item.className}>
                  {item.name}
                </li>
              )}
            </DndVerticalSortableItem>
          ))}
        </ul>
      </DndVerticalSortableContext>
    </div>
  );
}
