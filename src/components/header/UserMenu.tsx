
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
<<<<<<< HEAD
import { FileText, LogOut, Settings, BarChart3, PlusCircle } from "lucide-react";
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570

const UserMenu = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
<<<<<<< HEAD
        className: "glass-effect",
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
      });
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        title: "Logout failed",
        description: "There was a problem logging you out. Please try again.",
        variant: "destructive",
<<<<<<< HEAD
        className: "glass-effect",
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!user) {
    return (
      <div className="flex gap-2">
<<<<<<< HEAD
        <Button variant="outline" asChild className="rounded-full">
          <Link to="/">Log in</Link>
        </Button>
        <Button asChild className="hidden sm:inline-flex rounded-full">
=======
        <Button variant="outline" asChild>
          <Link to="/">Log in</Link>
        </Button>
        <Button asChild className="hidden sm:inline-flex">
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
          <Link to="/">Sign up</Link>
        </Button>
      </div>
    );
  }

  // Get initials for the avatar
  const getInitials = () => {
<<<<<<< HEAD
    if (user.user_metadata?.name) {
      const nameParts = user.user_metadata.name.split(' ');
      if (nameParts.length >= 2) {
        return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
      }
      return user.user_metadata.name.substring(0, 2).toUpperCase();
    }
    
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
    const email = user.email || "";
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button 
          variant="ghost" 
          className="relative h-10 w-10 rounded-full p-0 border-2 border-transparent hover:border-primary/20 transition-all"
        >
          <Avatar className="h-9 w-9 transition-transform">
            <AvatarFallback 
              className="bg-primary/10 text-primary font-medium"
            >
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 glass-effect">
        <div className="px-4 py-3 text-sm">
          <p className="font-medium">{user.user_metadata?.name || "User"}</p>
          <p className="text-muted-foreground truncate">{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/profile" className="flex w-full">
            <Settings className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/my-issues" className="flex w-full">
            <FileText className="mr-2 h-4 w-4" />
            <span>My Issues</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/report" className="flex w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Report Issue</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/analytics" className="flex w-full">
            <BarChart3 className="mr-2 h-4 w-4" />
            <span>Analytics</span>
          </Link>
=======
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="px-2 py-1.5 text-sm font-medium text-center">
          {user.email}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/my-issues">My Issues</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/report">Report Issue</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/analytics">Analytics</Link>
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleLogout}
          disabled={isLoggingOut}
<<<<<<< HEAD
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
=======
        >
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
          {isLoggingOut ? "Logging out..." : "Log out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
