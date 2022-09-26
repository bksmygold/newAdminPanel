import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StoreIcon from "@mui/icons-material/Store";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SummarizeIcon from "@mui/icons-material/Summarize";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Image from "next/image";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";

//================================================

export const dashboardMenuList = [
    {
        href: '/',
        icon: <DashboardIcon />,
        title: 'Dashboard',
        childrens: [
            {
                href: '/financialDashobard/myGoldFinancials',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Financials',
            },
            {
                href: '/retailDashboard/retail',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Retail',
            },
            {
                href: '/inventoryDashboard/inventory',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Inventory',
            },
            {
                href: '/dashboard/goldbank-dashboard',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'CRM',
            },
        ],
    },
    {
        href: '/userManagement',
        icon: <ManageAccountsIcon />,
        title: 'User Management',
    },
    {
        href: '/taxSettings',
        icon: <AccountBalanceWalletIcon />,
        title: 'Tax Setting',
    },
    {
        href: '/eCommerce',
        icon: <StoreIcon />,
        title: 'E-Commerce',
    },
    {
        href: '/promotionalSetting',
        icon: <ConnectWithoutContactIcon />,
        title: 'Promotional Setting',
    },
    {
        href: '/reports',
        icon: <SummarizeIcon />,
        title: 'Reports',
    },

    {
        href: '/settings',
        icon: <CogIcon />,
        title: 'Settings',
    },
    {
        href: '',
        // icon: <CogIcon />,
        title: 'Logout',
    },
];

export const inventoryMenuList = [
    {
        href: "/inventoryDashboard/inventory",
        icon: <ManageAccountsIcon />,
        title: "Dashboard",
    },
    {
        href: "/",
        icon: <ReceiptIcon />,
        title: "Custody Given",
        childrens: [
            {
                href: "/inventoryDashboard/customer",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Customer",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Merchant",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Business",
            },
        ],
    },
    {
        href: "/",
        icon: <ReceiptIcon />,
        title: "Custody Released",
        childrens: [
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Customer",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Merchant",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Business",
            },
        ],
    },
    {
        href: "/",
        icon: <ReceiptIcon />,
        title: "Custody Hold",
        childrens: [
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Customer",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Merchant",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Business",
            },
        ],
    },
    {
        href: "/",
        icon: <ReceiptIcon />,
        title: "Custody In-Transit",
        childrens: [
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Customer",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Merchant",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Business",
            },
        ],
    },
    {
        href: "/",
        icon: <ReceiptIcon />,
        title: "Custody In-Checking",
        childrens: [
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Customer",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Merchant",
            },
            {
                href: "/dashboard/retail-dashboard",
                icon: <ReceiptIcon fontSize="small" />,
                title: "Business",
            },
        ],
    },
    {
        href: "/inventoryDashboard/stockTransfer",
        icon: <ManageAccountsIcon />,
        title: "Stock Transfer",
    },
    {
        href: "/inventoryDashboard/stockAdjustment",
        icon: <ManageAccountsIcon />,
        title: "Stock Adjustment",
    }
];

export const retailMenuList = [
    {
        href: "/inventoryDashboard/inventory",
        icon: <DashboardIcon />,
        title: "Dashboard",
    },
    {
        href: "/inventoryDashboard/inventory",
        icon: <DashboardIcon />,
        title: "Orders",
    },
    {
        href: "/inventoryDashboard/inventory",
        icon: <DashboardIcon />,
        title: "Settlement Requests",
    },
    {
        href: "/inventoryDashboard/inventory",
        icon: <DashboardIcon />,
        title: "Retailers Data",
    },
   
];
