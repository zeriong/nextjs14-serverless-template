"use client";

import React from "react";
import { Card, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from "@material-tailwind/react";
import { MAIN_LAYOUT_EXAMPLE_LIST } from "@/constants/layout";

export default function AdminAside() {
  return (
    <Card className="fixed left-0 top-0 flex h-screen w-full max-w-aside-width p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        {MAIN_LAYOUT_EXAMPLE_LIST.map((item) => (
          <ListItem key={item.id}>
            {/* 아이콘이 있을 경우 렌더링 */}
            {item.icon && <ListItemPrefix>{item.icon}</ListItemPrefix>}

            {/* 메뉴 타이틀 */}
            {item.title}

            {/* 옵션 아이콘이 있다면 렌더링 */}
            {item.optionIcon && <ListItemSuffix>{item.optionIcon}</ListItemSuffix>}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
