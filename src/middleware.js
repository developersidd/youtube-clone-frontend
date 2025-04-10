const PUBLIC_ROUTES = {
  "/login": true,
  "/register": true,
};
export default async function middleware(req) {
  const { nextUrl } = req;
  const { pathname, search } = nextUrl;
  const token = req?.cookies?.get("accessToken")?.value;
  const isPublicRoute =
    PUBLIC_ROUTES[pathname] ||
    nextUrl.pathname === "/" ||
    ["/videos", "/channels", "/playlists", "/result"].some((route) =>
      pathname.startsWith(route)
    );

  //console.log(isAuthenticated, pathname);
  //console.log({ isPublicRoute });

  if (!token && !isPublicRoute) {
    console.log("redirecting to login");
    return Response.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, nextUrl)
    );
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
