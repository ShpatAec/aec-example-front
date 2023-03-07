const data = {
  all: "Public content",
  user: "User content full",
  mod: "Moderator content",
  admin: "Admin content"
};

export const getPublicContent = () => {
  return Promise.resolve({ data: data.all });
};

export const getUserBoard = () => {
  return Promise.resolve({ data: data.user });
};

export const getModeratorBoard = () => {
  return Promise.resolve({ data: data.mod });
};

export const getAdminBoard = () => {
  return Promise.resolve({ data: data.admin });
};
