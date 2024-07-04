export const DashNavItem = [
  {
    name: "Home",
    path: "/ditec/dashboard",
  },

  {
    name: "Services",
    path: "/",
    subMenu: [
      { name: "Onboarding Services", path: "/ditec/subaua" },
      { name: "Authentication Services", path: "/ditec/authentication" },
      // { name: "e-kyc", path: "/ditec/e-KYC" },
      { name: "Others Services", path: "/ditec/otherservices" },
    ],
  },
  // {
  //   name: "About Us",
  //   path: "/ditec/about",
  // },
  // {
  //   name: "Our Services",
  //   path: "/ourservices",
  // },
  {
    name: "UIDAI",
    path: "https://uidai.gov.in/",
    target: "_blank",
  },
  {
    name: "Contact",
    path: "/ditec/contact",
  },
];
