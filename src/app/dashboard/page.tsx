import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { SectionCards } from "@/components/ui/section-cards";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Tambahkan import Inter dari next/font/google
import { Inter } from "next/font/google";

// Load font Inter
const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className={inter.className}>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold font-sans">
                    Dashboard
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">
            {/* <SectionCards /> */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="p-4">
                  <CardHeader className="space-y-2">
                    <CardTitle className="flex items-center gap-2 text-sm font-medium">
                      <span>👥</span> Total Employee
                    </CardTitle>
                    <div className="text-2xl font-bold">1200 Orang</div>
                    <CardDescription>Update: 20 March 2025</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <CardHeader className="space-y-2">
                <CardDescription>
                Employee Statistics

                </CardDescription>
                <CardTitle className="text-lg font-bold">
                Current Number of Employees                </CardTitle>
              </CardHeader>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Chart will be here
              </div>
            </Card>

            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
