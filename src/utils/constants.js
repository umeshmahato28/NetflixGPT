export const LOGIN_MOBILE_BG =
  "https://wallpapers.ispazio.net/wp-content/uploads/2023/04/IMG_2633-400x866.jpg";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    'Content-Type': "application/json",
    Authorization: 
    "Bearer " + process.env.REACT_APP_TMDB_KEY
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";