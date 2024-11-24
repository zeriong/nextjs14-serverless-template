"use client";

import { MAIN_LAYOUT_EXAMPLE_LIST } from "@/constants/layout";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix } from "@material-tailwind/react";

export default function MainAside() {
  return (
    <Card className="shadow-blue-gray-900/5 max-w-aside-width fixed left-0 top-0 flex h-screen w-full p-4 shadow-xl">
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
