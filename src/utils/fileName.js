export const fileName = (name) => {
  const regex = /^([^.]+)(\.\w+)?$/;
  const match = regex.exec(name);
  return match[1];
};
