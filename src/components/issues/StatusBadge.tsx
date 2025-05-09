
import React from "react";
import { IssueStatus } from "@/types";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570

export interface StatusBadgeProps {
  status: IssueStatus;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  size = "md",
  className = ""
}) => {
  const getStatusClasses = () => {
<<<<<<< HEAD
    const baseClasses = "status-badge rounded-full inline-flex items-center justify-center font-medium transition-all shadow-sm";
    
    const sizeClasses = {
      sm: "text-xs px-2 py-0.5",
      md: "text-xs px-3 py-1",
      lg: "text-sm px-4 py-1.5"
    };
    
    return cn(
      baseClasses,
      status === "pending" && "status-badge pending animate-pulse-slow",
      status === "in-progress" && "status-badge in-progress",
      status === "resolved" && "status-badge resolved",
      sizeClasses[size],
      className
    );
=======
    const baseClasses = "status-badge rounded-full inline-flex items-center justify-center font-medium";
    
    const sizeClasses = {
      sm: "text-xs px-1.5 py-0.5",
      md: "text-xs px-2.5 py-1",
      lg: "text-sm px-3 py-1.5"
    };
    
    const statusClasses = {
      "pending": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500",
      "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500",
      "resolved": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500"
    };
    
    return `${baseClasses} ${statusClasses[status]} ${sizeClasses[size]} ${className}`;
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
  };
  
  const getStatusLabel = () => {
    const labels = {
      "pending": "Pending",
      "in-progress": "In Progress",
      "resolved": "Resolved"
    };
    
    return labels[status];
  };
  
  return (
    <span className={getStatusClasses()}>
<<<<<<< HEAD
      {status === "pending" && (
        <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-civic-amber dark:bg-civic-amber-dark animate-ping" style={{animationDuration: '2s'}}></span>
      )}
      {status === "in-progress" && (
        <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-civic-blue dark:bg-civic-blue-dark animate-pulse" style={{animationDuration: '1.5s'}}></span>
      )}
      {status === "resolved" && (
        <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-civic-green dark:bg-civic-green-dark"></span>
      )}
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
      {getStatusLabel()}
    </span>
  );
};

export default StatusBadge;
