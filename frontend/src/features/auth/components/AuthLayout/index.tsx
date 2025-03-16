import React from "react";
import { Outlet } from "react-router-dom";
import { Card } from "../../../../components/ui/card";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E222D] p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Card className="w-full bg-[#2A2E39] border-[#363A45] shadow-lg">
          <div className="p-6">
            <Outlet />
          </div>
        </Card>
      </div>
    </div>
  );
}
