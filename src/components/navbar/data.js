import icon1 from '../../assets/Outline/bell.png';
import icon2 from '../../assets/Outline/chart-square-bar.png';
import icon3 from '../../assets/Outline/chart-bar.png';
import icon4 from '../../assets/Outline/cog.png';
import icon5 from '../../assets/Outline/cursor-click.png';
import icon6 from '../../assets/Outline/home.png';
import icon7 from '../../assets/Outline/request_page.png';

export const data = [
  {
    id: 1,
    name: "Dashboard",
    icon: icon6,
    link: "/",
  },
  {
    id: 2,
    name: "Manage Human Resource",
    icon: icon3,
    link: "/manage-hr",
    dropdown: [
      { name: "Employees", link: "/subpage5" },
      { name: "Approvers", link: "/gifts-vouchers/gift-card" },
      { name: "Manage department & roles", link: "/gifts-vouchers/brand-voucher" },
    ],
  },
  {
    id: 3,
    name: "OptiFii Expense",
    icon: icon7,
    link: "/expense",
  },
  {
    id: 4,
    name: "OptiFii Tax Benefit",
    icon: icon5,
    link: "/tax-benefit",
  },
  {
    id: 5,
    name: "OptiFii Gifs & Vouchers",
    icon: icon5,
    link: "/gifts-vouchers",
    dropdown: [
      { name: "Dashboard", link: "/gifts-vouchers/subpage1" },
      { name: "Gift Card", link: "/gifts-vouchers/gift-card" },
      { name: "Brand Voucher", link: "/gifts-vouchers/brand-voucher" },
    ],
  },
  {
    id: 6,
    name: "Reports",
    icon: icon2,
    link: "/reports",
  },
  {
    id: 7,
    name: "Support & Ticket",
    icon: icon1,
    link: "/support",
  },
  {
    id: 8,
    name: "Settings",
    icon: icon4,
    link: "/settings",
  },
];
