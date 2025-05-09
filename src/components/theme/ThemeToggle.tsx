
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full transition-all hover:bg-primary/10 active:scale-90 relative overflow-hidden group"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 group-hover:rotate-12 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 group-hover:rotate-12 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
          <span className="absolute inset-0 rounded-full group-hover:bg-primary/5 transition-all duration-300"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-effect animate-scale-in">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer transition-colors hover:bg-primary/5 focus:bg-primary/5">
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer transition-colors hover:bg-primary/5 focus:bg-primary/5">
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer transition-colors hover:bg-primary/5 focus:bg-primary/5">
          <span className="mr-2">💻</span>
          <span>System</span>
=======
        <Button variant="ghost" size="icon" aria-label="Toggle theme" className="text-foreground">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="rounded-lg cursor-pointer"
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="rounded-lg cursor-pointer"
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="rounded-lg cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
          System
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
