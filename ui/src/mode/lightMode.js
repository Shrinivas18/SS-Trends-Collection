export const STARTER_CLOTH =
  "w-[35vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] h-auto pointer-events-none";

export const WELCOME_TO_SS_TRENDS_COLLECTION =
  "2xl:text-8xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-5xl text-4xl font-extrabold lg:mb-6 md:mb-4 sm:mb-2 bg-gradient-to-r " +
  "from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent " +
  "drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]";

export const YOUR_FASHION_YOUR_STYLE =
  "lg:text-4xl md:text-3xl sm:text-3xl text-gray-300 italic tracking-wide " +
  "drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]";

export const TEXT_VARIANT = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export const SUBTITILE_VARIANT = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
  },
};

export const STARTER_IMAGE = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
  },
};

export const DESKTOP_NAVBAR = {
  container: "hidden md:flex space-x-4",
  linkBase:
    "px-3 py-2 rounded-md text-base font-medium transition duration-200",
  linkActive: "bg-blue-100 text-blue-700",
  linkInactive: "text-gray-700 hover:bg-gray-100 hover:text-blue-700",
};

export const MOBILE_NAVBAR = {
  button:
    "inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
  menuContainer: "md:hidden border-t border-gray-200 bg-white shadow-sm",
  linkWrapper: "flex flex-col items-center space-y-2 py-3",
  linkBase:
    "w-full text-center px-4 py-2 rounded-md text-base font-medium transition duration-200",
  linkActive: "bg-blue-100 text-blue-700",
  linkInactive: "text-gray-700 hover:bg-gray-100 hover:text-blue-700",
};

export const NAVBAR = {
  NAV: "bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-50 shadow-sm",
  DIV1: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  DIV2: "flex justify-between h-16 items-center",
  LINK: "h-15 w-25 md:h-20 md:w-30 object-contain",
};
export const LOGO = "h-15 w-25 md:h-20 md:w-30 object-contain";
