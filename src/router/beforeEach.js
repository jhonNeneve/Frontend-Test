export default async (to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' - MyShop';
  } else {
    document.title = 'MyShop';
  }
  next();
};