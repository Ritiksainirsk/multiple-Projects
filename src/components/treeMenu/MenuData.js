const MenuData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    childern: [
      {
        label: "Details",
        to: "details",
        childern: [
          {
            label: "Locaton",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "Setting",
    to: "/setting",
    childern: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        childern: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];


export default MenuData;