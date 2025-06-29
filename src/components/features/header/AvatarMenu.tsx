import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import { FiGlobe, FiMoon, FiSun, FiSettings, FiLogOut } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useState } from "react";

interface AvatarMenu {
  user: User
}

export function AvatarMenu({ user }: AvatarMenu) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.image} alt={user?.name || "User"} />
            <AvatarFallback>
              {user?.name?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FiGlobe className="mr-2" /> Language
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? (
            <>
              <FiSun className="mr-2" /> Light Mode
            </>
          ) : (
            <>
              <FiMoon className="mr-2" /> Dark Mode
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FiSettings className="mr-2" /> Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FaRegQuestionCircle  className="mr-2" /> Help
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FiLogOut className="mr-2" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}