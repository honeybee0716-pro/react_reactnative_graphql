export const log = (string: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(string);
  }
};
