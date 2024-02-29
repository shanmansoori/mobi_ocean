import { history } from "./history";

export function authHeader(pathname) {
  let currentPath;
  if (localStorage.getItem("token")) {
    currentPath = JSON.parse(localStorage.getItem("pathname"));
    if (currentPath !== pathname) {
      localStorage.setItem("pathname", JSON.stringify(pathname));
      if (pathname === "/login" || pathname === "/signup") {
        history.push(currentPath);
      }
    }
  } else {
    localStorage.setItem("pathname", JSON.stringify(pathname));
  }
}
