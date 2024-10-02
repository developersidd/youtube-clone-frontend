import { Navbar } from "@/components/common/navbar/Navbar";
import UserInitializer from "@/components/User-initializer/UserInitializer";
import { SidebarProvider } from "@/providers/SidebarProvider";
import UserProvider from "@/providers/UserProvider";
import NonAttachedSidebar from "./_components/NonAttachedSidebar";

export default function OnAttachedSidebarLayout({ children }) {
  console.log("With Non Attached Sidebar");
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <SidebarProvider>
            <UserInitializer />
            <Navbar />
            <div className="relative flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
              <NonAttachedSidebar />
              {children}
            </div>
          </SidebarProvider>
        </UserProvider>
      </body>
    </html>
  );
}
