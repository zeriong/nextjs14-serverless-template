"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Dialog, ThemeProvider } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const theme = {
  dialog: {
    defaultProps: {
      size: "md",
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: "",
    },
    valid: {
      // todo: size category 지정
      sizes: ["xs", "sm", "md", "lg", "xl", "xxl", "main"],
    },
    styles: {
      base: {
        backdrop: {
          display: "grid",
          placeItems: "place-items-center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "w-screen",
          height: "h-screen",
          backgroundColor: "bg-black",
          backgroundOpacity: "bg-opacity-60",

          // ? overlay backdrop 삭제
          backdropFilter: "",
          // backdropFilter: "backdrop-blur-sm",
        },
        container: {
          position: "relative",
          bg: "bg-white",
          m: "m-4",
          borderRadius: "rounded-lg",
          boxShadow: "shadow-2xl",
          color: "text-blue-gray-500",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-base",
          fontWeight: "font-light",
          lineHeight: "leading-relaxed",
        },
      },

      // todo: size category에 따른 스타일 지정 + 모바일사이즈 논의 되면 tailwind config 기준 변수 넣어두기
      sizes: {
        main: {
          width: "w-full",
          minWidth: "min-w-[822px]",
          maxWidth: "max-w-[822px]",
        },
        xs: {
          width: "w-full md:w-3/5 lg:w-2/5 2xl:w-1/4",
          minWidth: "min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]",
          maxWidth: "max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]",
        },
        sm: {
          width: "w-full md:w-2/3 lg:w-2/4 2xl:w-1/3",
          minWidth: "min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]",
          maxWidth: "max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]",
        },
        md: {
          width: "w-full md:w-3/4 lg:w-3/5 2xl:w-2/5",
          minWidth: "min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]",
          maxWidth: "max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]",
        },
        lg: {
          width: "w-full md:w-5/6 lg:w-3/4 2xl:w-3/5",
          minWidth: "min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]",
          maxWidth: "max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]",
        },
        xl: {
          width: "w-full md:w-5/6 2xl:w-3/4",
          minWidth: "min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]",
          maxWidth: "max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]",
        },
        xxl: {
          display: "flex",
          flexDirection: "flex-col",
          width: "w-screen",
          minWidth: "min-w-[100vw]",
          maxWidth: "max-w-[100vw]",
          height: "h-screen",
          minHeight: "min-h-[100vh]",
          maxHeight: "max-h-[100vh]",
          m: "m-0",
          borderRadius: "rounded-none",
        },
      },
    },
  },
};

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
      <ThemeProvider value={theme}>
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
      </ThemeProvider>
    </>
  );
}
