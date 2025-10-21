export const MAIN_CLASS = "pt-20 px-4 bg-gray-50";

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
    "px-3 py-2 rounded-md text-base font-medium transition duration-200 ",
  DESKTOP_LINK_ACTIVE: "text-gray-700 bg-blue-100 text-blue-700",
  DESKTOP_LINK_INACTIVE: "text-gray-700 hover:bg-gray-100 hover:text-blue-700",
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

export const LIGHT_MODE_NAVBAR = {
  NAV: " border-b border-gray-200 fixed w-full top-0 left-0 z-50 shadow-sm bg-white",
  DIV1: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-white",
  DIV2: "flex justify-between h-16 items-center",
  LINK: "h-15 w-25 md:h-20 md:w-30 object-contain",
};

export const LOGO = "h-15 w-25 md:h-20 md:w-30 object-contain";

export const HOME_SECTION = {
  SECTION: "py-10 px-4 md:px-10 lg:px-20 w-full bg-gray-50",
  HEADER: "text-3xl font-semibold text-center mb-10 text-gray-800",
  IMAGE_GRID:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
  IMAGE_DIV:
    "overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white",
  IMAGE:
    "w-full h-48 sm:h-60 md:h-64 object-cover transform hover:scale-105 transition-transform duration-300",
};

export const HOME_MD_VIDEO_DIV =
  "absolute top-0 left-0 w-full h-full bg-violet-900 sm:block hidden";

export const HOME_MD_VIDEO_DIV_TEXT =
  "relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4";

// toggle button light mode
export const LIGHT_MODE = {
  ICON: "M12 4V2m0 20v-2m10-8h2M2 12H0m18.364-6.364l1.414-1.414M4.222 19.778l1.414-1.414M18.364 18.364l1.414 1.414M4.222 4.222l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z",
  ANIMATE:
    "bg-yellow-400 shadow-[0_0_20px_8px_rgba(255,255,0,0.6)] animate-[torch-glow_2s_ease-in-out_infinite]",
  POSITION:
    "relative mr-2 mt-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer",
  tooltip:
    "absolute -top-8 mr-45 translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
};

export const ADD_ITEM = {
  FORM_CONTAINER:
    "max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg transition-all ease-in-out duration-300",
  INPUT:
    "mt-1 block w-full p-4 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all ease-in-out duration-200",
  SELECT:
    "mt-1 block w-full p-4 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all ease-in-out duration-200",
  BUTTON:
    "w-full bg-indigo-600 text-white p-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all ease-in-out duration-200",
  LABEL: "block text-sm font-semibold text-gray-700 mb-2",
  HEADER: "text-3xl font-bold text-center text-gray-800 mb-6",
  SUBTEXT: "text-sm text-gray-500 text-center mb-4",
};
