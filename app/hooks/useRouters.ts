import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { useMemo } from "react";

export function useRouters() {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routers = useMemo(() => [
    {
      label: "Chat",
      href: "/conversations",
      icon: HiChat,
      active: pathname === "/conversations" || !!conversationId,
    },
    {
      label: "Users",
      href: "/users",
      icon: HiUsers,
      active: pathname === "/users",
    },
    {
      label: "Logout",
      href: "#",
      onClick: () => signOut(),
      icon: HiArrowLeftOnRectangle,
      active: pathname === "/logout",
    }
  ], [conversationId, pathname]);

  return routers;
}