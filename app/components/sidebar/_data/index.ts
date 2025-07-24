
import {
    LayoutDashboard,
    Users,
    ListOrdered,
    BookText,
    ClipboardCheck,
    PlusCircle,
    UploadCloud,
    History,
    FileText,
    ClipboardX,
    AlarmClock,
    Eye,
    CalendarCheck2,
    Bug,
    Bell,
    Settings,
    UserPlus,
    ActivitySquare,
    Database,
    CalendarDays,
    BarChart,
    Key,
    FileWarning,
    Repeat,
    FileClock,
    XCircle,
    FileMinus,
    Monitor,
    PieChart,
    FileJson,
    MessageSquare,
    Palette,
    Building2,
    SlidersHorizontal,
    ScrollText,
    FileStack,
    Home,
} from "lucide-react"

export const dataAppSidebar = {
    user: {
        name: "Admin User",
        email: "admin@bni.co.id",
        avatar: "/placeholder.svg?height=32&width=32",
    },
    teams: [
        {
            name: "BNI AUTO DEBIT",
            logo: Building2, // Changed to Building2 for corporate feel
            plan: "PORTAL",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutDashboard,
            isActive: true, // Example active state
        },
        {
            title: "Auto Debit Registration",
            url: "#",
            icon: ClipboardCheck,
            items: [
                {
                    title: "Add New",
                    url: "/admin/onboarding/add",
                    icon: PlusCircle,
                },
                {
                    title: "Bulk Upload",
                    url: "/admin/onboarding/add-bulk",
                    icon: UploadCloud,
                },
                {
                    title: "Registration History",
                    url: "/admin/onboarding/data",
                    icon: History,
                },
            ],
        },
        {
            title: "Customer Management",
            url: "#",
            icon: Users,
            items: [
                {
                    title: "Customer List",
                    url: "/customer/list",
                    icon: ListOrdered,
                },
                {
                    title: "Account List",
                    url: "/customer/accounts",
                    icon: BookText,
                },
            ],
        },
        {
            title: "Transaction Management",
            url: "#",
            icon: FileText,
            items: [
                {
                    title: "Transaction History",
                    url: "/transactions/history",
                    icon: ScrollText,
                },
                {
                    title: "Failed Transactions",
                    url: "/transactions/failed",
                    icon: FileWarning,
                },
                {
                    title: "Retry Monitoring",
                    url: "/transactions/retry",
                    icon: Repeat,
                },
                {
                    title: "Execution Logs",
                    url: "/transactions/logs",
                    icon: FileClock,
                },
            ],
        },
        {
            title: "Cancellation",
            url: "#",
            icon: XCircle,
            items: [
                {
                    title: "Cancel Auto Debit",
                    url: "/cancellation",
                    icon: ClipboardX,
                },
                {
                    title: "Cancellation History",
                    url: "/cancellation/history",
                    icon: FileMinus,
                },
            ],
        },
        {
            title: "Monitoring",
            url: "#",
            icon: Eye,
            items: [
                {
                    title: "Daily Execution Monitor",
                    url: "/monitoring/daily",
                    icon: Monitor,
                },
                {
                    title: "Retry Logs",
                    url: "/monitoring/retry-log",
                    icon: AlarmClock,
                },
                {
                    title: "Schedule Calendar",
                    url: "/monitoring/calendar",
                    icon: CalendarDays,
                },
                {
                    title: "System Health",
                    url: "/monitoring/system-health",
                    icon: Bug,
                },
            ],
        },
        {
            title: "Reports",
            url: "#",
            icon: BarChart,
            items: [
                {
                    title: "Transaction Reports",
                    url: "/reports/transactions",
                    icon: FileText,
                },
                {
                    title: "Retry Summary",
                    url: "/reports/retry",
                    icon: ClipboardCheck,
                },
                {
                    title: "Active vs Inactive Registrations",
                    url: "/reports/active-inactive",
                    icon: PieChart,
                },
                {
                    title: "Export",
                    url: "/reports/export",
                    icon: FileJson,
                },
            ],
        },
        {
            title: "Notifications",
            url: "#",
            icon: Bell,
            items: [
                {
                    title: "Notification Center",
                    url: "/notifications",
                    icon: MessageSquare,
                },
                {
                    title: "Templates",
                    url: "/notifications/templates",
                    icon: Palette,
                },
            ],
        },
        {
            title: "Master Data",
            url: "#",
            icon: Database,
            items: [
                {
                    title: "Biller Management",
                    url: "/master/billers",
                    icon: Settings,
                },
                {
                    title: "Execution Calendar",
                    url: "/master/calendar",
                    icon: CalendarCheck2,
                },
                {
                    title: "Parameter Settings",
                    url: "/master/parameters",
                    icon: SlidersHorizontal,
                },
            ],
        },
        {
            title: "User Administration",
            url: "#",
            icon: Users,
            items: [
                {
                    title: "User List",
                    url: "/admin/users",
                    icon: UserPlus,
                },
                {
                    title: "Roles & Permissions",
                    url: "/admin/roles",
                    icon: Key,
                },
                {
                    title: "User Parameters",
                    url: "/admin/parameters",
                    icon: Settings,
                },
            ],
        },
        {
            title: "Audit Logs",
            url: "#",
            icon: ActivitySquare,
            items: [
                {
                    title: "User Activity Log",
                    url: "/audit/user-activity",
                    icon: ScrollText,
                },
                {
                    title: "Data Change Logs",
                    url: "/audit/data-changes",
                    icon: FileStack,
                },
            ],
        },
    ],
}
