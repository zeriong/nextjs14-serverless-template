"use client";

import Link from "next/link";
import React, { useState } from "react";
import DndVerticalSortableContext from "@/app/_components/dnd/DndVerticalSortableContext";
import DndVerticalSortableItem from "@/app/_components/dnd/DndVerticalSortableItem";
import Image from "next/image";

export default function Page() {
  const [items, setItems] = useState([{ name: "item" }, { name: "item2" }]);

  return (
    <div className="p-[30px]">
      <p>관리자페이지</p>
      <Link href="/">홈으로</Link>

      <div className={"mt-4 bg-gray-400 p-3"}>
        <DndVerticalSortableContext items={items} setItems={setItems}>
          {items?.map((item) => (
            <DndVerticalSortableItem key={item.name}>
              {({ attributes, listeners }) => (
                <div>
                  <div
                    {...attributes}
                    {...listeners}
                    className=""
                    tabIndex={-1} // 텝인덱스 방지
                  >
                    <Image src={"/assets/svg/drag_handle_icon.svg"} alt="drag_handle_icon" width={14} height={14} />
                  </div>
                </div>
              )}
            </DndVerticalSortableItem>
          ))}
        </DndVerticalSortableContext>
      </div>
    </div>
  );
}
