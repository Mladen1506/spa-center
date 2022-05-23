export const imagesFolderUrl = (path) => {
  // const url = '/static/img/' + path;
  const url = '/wp-content/uploads/react-static/img/' + path; // solution for wordpress
  return url;
};