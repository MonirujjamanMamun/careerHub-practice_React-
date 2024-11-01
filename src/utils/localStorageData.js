export const getDataLocalStorage = () => {
  const localData = localStorage.getItem('job-apply');
  if (localData) {
    return JSON.parse(localData);
  }
  return [];
};

export const setDataLocalStorage = (id) => {
  const localData = getDataLocalStorage();
  const existData = localData.find((jobId) => jobId === id);
  if (!existData) {
    localData.push(id);
    localStorage.setItem('job-apply', JSON.stringify(localData));
  }
};

// export default { getDataLocalStorage, setDataLocalStorage };
