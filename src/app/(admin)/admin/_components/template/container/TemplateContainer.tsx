import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: ReactNode | string;
}

export default function TemplateContainer({ children, title }: Props) {
  return (
    <div className="mb-[30px] w-fit border border-black/30 p-[20px]">
      {/* header */}
      <div className="border-b-pr-grey-50 mb-[16px] w-fit border-b-4 pb-2 text-[24px] font-bold text-blue-800">
        {title}
      </div>

      {/* content */}
      <div>{children}</div>
    </div>
  );
}
