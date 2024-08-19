import Link from "next/link"
import {
    Bell,
    CircleUser,
    Menu,
    Package2,
    Search,
    Users,
    Settings,
    HeartHandshake,
    CircleCheckBig,
    Grid2x2Check,
    Waypoints,
    Table,
    Route,
    ChartBarIncreasing,
    Send,
    ChevronRightIcon
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ToggleMode } from "@/app-component/ToggleMode"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" />
                        </Link>
                    </div>
                    <div className="flex-1 relative">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Search className="h-4 w-4" />
                                Search
                            </Link>
                            <Link
                                href="/workspace"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Settings className="h-4 w-4" />
                                Workspace Setting
                            </Link>
                            <Link
                                href="/starter"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <HeartHandshake className="h-4 w-4" />
                                Getting Started
                            </Link>
                            <Link
                                href="/reporting"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <CircleCheckBig className="h-4 w-4" />
                                Reporting
                            </Link>
                            <Link
                                href="/campaign"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Grid2x2Check className="h-4 w-4" />
                                Campaign
                            </Link>
                            <Link
                                href="call-flows"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Waypoints className="h-4 w-4" />
                                Call Flows
                            </Link>
                            <Collapsible>
                                <CollapsibleTrigger>
                                    <div className="flex items-center gap-[40px] rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                        <div className="flex gap-2 items-center">
                                            <Table className="h-4 w-4" />
                                            Phone Numbers
                                        </div>
                                        <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-9 pt-3">
                                    <Link href="tracking-numbers">
                                        Tracking Numbers
                                    </Link>
                                </CollapsibleContent>
                                <CollapsibleContent className="px-9 py-3">
                                    <Link href="number-pools">
                                        Number Pools
                                    </Link></CollapsibleContent>
                            </Collapsible>
                            <Collapsible>
                                <CollapsibleTrigger>
                                    <div className="flex items-center gap-[64px] rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                        <div className="flex gap-2 items-center">
                                            <Route className="h-4 w-4" />
                                            Destinations
                                        </div>
                                        <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-9 pt-3">
                                    <Link href="/manage-destinations">
                                        Manage Destinations
                                    </Link>
                                </CollapsibleContent>
                                <CollapsibleContent className="px-9 py-3">
                                    <Link href="/manage-groups">
                                        Manage Groups
                                    </Link></CollapsibleContent>
                            </Collapsible>
                            <Link
                                href="/buyers"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Users className="h-4 w-4" />
                                Buyers
                            </Link>
                            <Link
                                href="/vendors"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <ChartBarIncreasing className="h-4 w-4" />
                                Vendors
                            </Link>
                            <Link
                                href="/traffic-source"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Send className="h-4 w-4" />
                                Traffic Source
                            </Link>
                            <Collapsible>
                                <CollapsibleTrigger>
                                    <div className="flex items-center gap-[64px] rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                        <div className="flex gap-2 items-center">
                                            <Route className="h-4 w-4" />
                                            Suppression List
                                        </div>
                                        <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-9 pt-3">
                                    <Link href="/voip-sheild">
                                        VoIP Sheild
                                    </Link>
                                </CollapsibleContent>
                                <CollapsibleContent className="px-9 py-3">
                                    <Link href="/blocked-numbers">
                                        Blocked Numbers
                                    </Link></CollapsibleContent>
                            </Collapsible>
                            <div className="felx absolute bottom-[50px]">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="secondary" size="icon" className="rounded-full">
                                            <CircleUser className="h-5 w-5" />
                                            <span className="sr-only">Toggle user menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                        <DropdownMenuItem>Support</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Logout</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Search className="h-4 w-4" />
                                    Search
                                </Link>
                                <Link
                                    href="/workspace"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Settings className="h-4 w-4" />
                                    Workspace Setting
                                </Link>
                                <Link
                                    href="/starter"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <HeartHandshake className="h-4 w-4" />
                                    Getting Started
                                </Link>
                                <Link
                                    href="/reporting"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <CircleCheckBig className="h-4 w-4" />
                                    Reporting
                                </Link>
                                <Link
                                    href="/campaign"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Grid2x2Check className="h-4 w-4" />
                                    Campaign
                                </Link>
                                <Link
                                    href="call-flows"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Waypoints className="h-4 w-4" />
                                    Call Flows
                                </Link>
                                <Collapsible>
                                    <CollapsibleTrigger>
                                        <div className="flex items-center gap-[40px] rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                            <div className="flex gap-2 items-center">
                                                <Table className="h-4 w-4" />
                                                Phone Numbers
                                            </div>
                                            <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-9 pt-3">
                                        <Link href="tracking-numbers">
                                            Tracking Numbers
                                        </Link>
                                    </CollapsibleContent>
                                    <CollapsibleContent className="px-9 py-3">
                                        <Link href="number-pools">
                                            Number Pools
                                        </Link></CollapsibleContent>
                                </Collapsible>
                                <Collapsible>
                                    <CollapsibleTrigger>
                                        <div className="flex items-center gap-[64px] rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                            <div className="flex gap-2 items-center">
                                                <Route className="h-4 w-4" />
                                                Destinations
                                            </div>
                                            <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-9 pt-3">
                                        <Link href="/manage-destinations">
                                            Manage Destinations
                                        </Link>
                                    </CollapsibleContent>
                                    <CollapsibleContent className="px-9 py-3">
                                        <Link href="/manage-groups">
                                            Manage Groups
                                        </Link></CollapsibleContent>
                                </Collapsible>
                                <Link
                                    href="/buyers"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Users className="h-4 w-4" />
                                    Buyers
                                </Link>
                                <Link
                                    href="/vendors"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <ChartBarIncreasing className="h-4 w-4" />
                                    Vendors
                                </Link>
                                <Link
                                    href="/traffic-source"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Send className="h-4 w-4" />
                                    Traffic Source
                                </Link>
                                <Collapsible>
                                    <CollapsibleTrigger>
                                        <div className="flex items-center gap-[64px] rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                            <div className="flex gap-2 items-center">
                                                <Route className="h-4 w-4" />
                                                Suppression List
                                            </div>
                                            <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-9 pt-3">
                                        <Link href="/voip-sheild">
                                            VoIP Sheild
                                        </Link>
                                    </CollapsibleContent>
                                    <CollapsibleContent className="px-9 py-3">
                                        <Link href="/blocked-numbers">
                                            Blocked Numbers
                                        </Link></CollapsibleContent>
                                </Collapsible>
                                <div className="felx absolute bottom-[50px]">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="secondary" size="icon" className="rounded-full">
                                                <CircleUser className="h-5 w-5" />
                                                <span className="sr-only">Toggle user menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Settings</DropdownMenuItem>
                                            <DropdownMenuItem>Support</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Logout</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Button variant="outline" size="icon" className="ml-auto">
                        <Bell className="h-[1rem] w-[1rem] scale-100" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <ToggleMode />
                </header>
                {children}
            </div>
        </div>
    );
}
