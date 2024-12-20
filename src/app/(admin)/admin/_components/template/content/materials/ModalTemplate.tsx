"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface Props {
  // isOpen이 있고 해당 props가 true일 때 모달을 띄움
  isOpen?: boolean;

  // 클릭 시 모달을 띄울 수 있는 버튼 insert
  button?: ReactNode;

  // 메인 컨텐츠를 insert
  children: ReactNode;

  // 푸터 영역이 있다면 푸터 영역을 insert
  footer?: ReactNode;

  // 모달 헤더 타이틀로 jsx 요소 또는 header title string insert
  headerTitle?: string | ReactNode;

  // 모달에 적용할 클래스네임
  className?: string;

  /**
   * 모달이 사라지는 transition duration을 기다린 후 실행할 함수 <br>
   * state에 할당된 data(value)를 삭제하여 메모리 해제할 때 활용
   * */
  closeAfterFunction?: () => void;
}

export function CustomModal({
  isOpen,
  button,
  children,
  footer,
  headerTitle,
  className = "",
  closeAfterFunction,
}: Props) {
  const [open, setOpen] = useState(false);

  // props로 받은 className 병합
  const mergedClassName = twMerge("flex flex-col bg-white py-[24px] px-[32px] rounded-[24px]", className);

  // ? isOpen props가 존재할 때 true인 경우 모달 띄움
  useEffect(() => {
    if (isOpen) setOpen(isOpen);
  }, [isOpen]);

  // ? closeAfterFunction 함수가 존재할 때 실행
  useEffect(() => {
    if (closeAfterFunction && !open) {
      // ! 모달이 사라지는 animation 300ms가 default
      setTimeout(() => {
        closeAfterFunction();
      }, 300);
    }
  }, [open]);

  return (
    <>
      {/* 버튼이 있다면 버튼 추가 */}
      {button && (
        <div onClick={() => setOpen(true)} className={"h-fit w-fit"}>
          {button}
        </div>
      )}

      {/* 모달 영역 */}

      <Dialog open={open} handler={() => setOpen(!open)} className={mergedClassName}>
        {/* 모달 헤더 */}
        <div className={"relative flex min-w-full justify-between"}>
          <div className="max-w-full overflow-hidden">{headerTitle}</div>

          {/* close button */}
          <Image
            src={"/assets/svg/common/close_icon.svg"}
            alt={"modal close icon"}
            width={16}
            height={16}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* content (푸터가 있다면 content 영역을 자동으로 채운 후 스크롤 처리) */}
        {footer ? <div className="vertical_custom_scroll grow">{children}</div> : <>{children}</>}

        {/* footer */}
        {footer}
      </Dialog>
    </>
  );
}
