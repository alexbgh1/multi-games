const resolvePath = (path: string): string => {
  // resolvePath will return the base url (check vite.config.ts) plus the current path.
  // path must initizalize using "/".
  const basePath: string = import.meta.env.VITE_API_BASE_PATH;
  if (!path.startsWith("/")) return `${basePath}`;
  return `${basePath}${path}`;
};

export { resolvePath };
