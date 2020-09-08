export const getSiteRegExp = (url: string) => {
  const [site, domain] = url.split('.');
  return new RegExp(`^(?:https|http)\:\/\/(?:.+[.])?${site}[.]${domain}$`);
};
