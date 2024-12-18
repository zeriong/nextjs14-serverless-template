"use client";

import Link from "next/link";
import React, { useState } from "react";
import DndVerticalSortableContext from "@/app/_components/dnd/DndVerticalSortableContext";
import DndVerticalSortableItem from "@/app/_components/dnd/DndVerticalSortableItem";
import TemplateContainer from "@/app/(admin)/admin/_components/template/container/TemplateContainer";
import DnDTemplate from "@/app/(admin)/admin/_components/template/content/DnDTemplate";

export default function Page() {
  return (
    <div className="p-[30px]">
      <p>관리자페이지</p>
      <Link href="/">홈으로</Link>

      {/* 예시 템플릿 */}
      <div className="flex flex-col gap-[24px]">
        {/* DnD */}
        <TemplateContainer title={"DnD Template"}>
          <DnDTemplate />
        </TemplateContainer>
      </div>
    </div>
  );
}
