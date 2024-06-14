const locales = ["en", "bn"];

const pathname = "/en/about";
const pathnameIsMissing = locales.every(
  (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${pathname}`
);
console.log(pathname.startsWith("/en"));
