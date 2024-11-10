
const getStoredJobApplication = (key) => {
    const storedJobApplication = localStorage.getItem(key);
    return storedJobApplication ? JSON.parse(storedJobApplication) : [];
};

const saveJobApplication = (id, key) => {
    const storedJobApplications = getStoredJobApplication(key);
    if (!storedJobApplications.includes(id)) {
        storedJobApplications.push(id);
        localStorage.setItem(key, JSON.stringify(storedJobApplications));
    }
};

export { getStoredJobApplication, saveJobApplication };
