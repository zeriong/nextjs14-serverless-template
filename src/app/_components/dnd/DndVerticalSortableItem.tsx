import React from "react";
import { useSortable } from "@dnd-kit/sortable";

export default function DndVerticalSortableItem({ id, children, isScaleTransition }: any) {
  const sortable = useSortable({
    id,
  });

  return (
    <div
      ref={sortable?.setNodeRef}
      style={{
        transform: sortable?.transform
          ? `translate3d(${sortable?.transform.x - (isScaleTransition ? 10 : 0)}px, ${
              sortable?.transform.y + (isScaleTransition ? 5 : 0)
            }px, 0)`
          : "",
        transition: `${sortable?.transition || "scale ease-in-out .2s"}`,
        scale: isScaleTransition && sortable.isDragging ? "1.05" : "1",
      }}
    >
      {
        typeof children === "function"
          ? children({ ...sortable }) // children이 함수일 경우 호출
          : children // children이 JSX일 경우 그대로 렌더링
      }
    </div>
  );
}
