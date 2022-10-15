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
import AnalyticsIcon from '@mui/icons-material/Analytics';
//================================================

export const dashboardMenuList = [
    {
        href: '/',
        icon: <DashboardIcon />,
        title: 'Dashboard',
        childrens: [
            {
                href: '/financial-dashobard/my-gold-financials',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Financials',
            },
            {
                href: '/retail-dashboard/retail',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Retail',
            },
            {
                href: '/inventory-dashboard/inventory',
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
        href: '/user-management',
        icon: <ManageAccountsIcon />,
        title: 'User Management',
    },
    {
        href: '/tax-settings',
        icon: <AccountBalanceWalletIcon />,
        title: 'Tax Setting',
    },
    {
        href: '/e-commerce',
        icon: <StoreIcon />,
        title: 'E-Commerce',
    },
    {
        href: '/promotional-setting',
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
    // {
    //     href: '',
    //     // icon: <CogIcon />,
    //     title: 'Logout',
    // },
];

export const inventoryMenuList = [
    {
        href: '/',
        icon: <DashboardIcon />,
        title: 'Dashboard',
        childrens: [
            {
                href: '/financial-dashobard/my-gold-financials',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Financials',
            },
            {
                href: '/retail-dashboard/retail',
                icon: <ChartBarIcon fontSize="small" />,
                title: 'Retail',
            },
            {
                href: '/inventory-dashboard/inventory',
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
        href: "/inventory-dashboard/stock-transfer",
        icon: <AnalyticsIcon/>,
        title: "Track Gold",
    },
    {
        href: "/inventory-dashboard/stock-adjustment",
        icon: <AnalyticsIcon/>,
        title: "Track Gold Bars",
    }
];

export const retailMenuList = [
    {
        href: "/inventory-dashboard/inventory",
        icon: <DashboardIcon />,
        title: "Dashboard",
    },
    {
        href: "/inventory-dashboard/inventory",
        icon: <DashboardIcon />,
        title: "Orders",
    },
    {
        href: "/inventory-dashboard/inventory",
        icon: <DashboardIcon />,
        title: "Settlement Requests",
    },
    {
        href: "/inventory-dashboard/inventory",
        icon: <DashboardIcon />,
        title: "Retailers Data",
    },
   
];
