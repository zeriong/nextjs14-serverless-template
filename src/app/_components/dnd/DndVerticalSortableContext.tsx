import React from "react";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { reconstruction } from "@/utils/common";

/**@desc 세로로 구성된 리스트 dnd context provider 컴포넌트 (드래그가 가능한 영역) */
export default function DndVerticalSortableContext({ children, items, setItems, setReduxItems }: any) {
  // DnD 함수
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    console.log("event: ", event);

    // 이동된 id가 둘 중 하나라도 없다면 캔슬
    if (!active?.id || !over?.id) return;

    // 이동되어 active, over 아이디가 다르다면 재배치
    if (active.id !== over.id) {
      // react useState인 경우
      if (setItems && !setReduxItems) {
        setItems((items: any) => {
          const oldIndex = items.findIndex((item: any) => item.id === active.id);
          const newIndex = items.findIndex((item: any) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        // store state dispatch로 세팅하는 경우 JSON 카피를 활용하여 새롭게 할당
      } else if (setReduxItems && !setItems) {
        const copyArray = reconstruction(items);
        const oldIndex = copyArray.findIndex((item: any) => item.id === active.id);
        const newIndex = copyArray.findIndex((item: any) => item.id === over.id);
        const convertArray = arrayMove(copyArray, oldIndex, newIndex);
        setReduxItems(convertArray);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {/* 반드시 DndVerticalSortableItem 컴포넌트 리스트로 구성되어야 함 */}
        {children}
      </SortableContext>
    </DndContext>
  );
}
