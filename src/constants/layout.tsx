import {
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Chip } from "@material-tailwind/react";

export const MAIN_LAYOUT_EXAMPLE_LIST = [
  {
    id: "ex_layout_aside_1",
    title: "Dashboard",
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
    optionIcon: null,
  },
  {
    id: "ex_layout_aside_2",
    title: "E-Commerce",
    icon: <ShoppingBagIcon className="h-5 w-5" />,
    optionIcon: null,
  },
  {
    id: "ex_layout_aside_3",
    title: "Inbox",
    icon: <InboxIcon className="h-5 w-5" />,
    optionIcon: <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />,
  },
  {
    id: "ex_layout_aside_4",
    title: "Profile",
    icon: <UserCircleIcon className="h-5 w-5" />,
    optionIcon: null,
  },
  {
    id: "ex_layout_aside_5",
    title: "Settings",
    icon: <Cog6ToothIcon className="h-5 w-5" />,
    optionIcon: null,
  },
  {
    id: "ex_layout_aside_6",
    title: "Log Out",
    icon: <PowerIcon className="h-5 w-5" />,
    optionIcon: null,
  },
];
