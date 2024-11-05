// const getStoredJobApplication = () => {
//     const storedJobApplication = localStorage.getItem('job-applications');
//     if (storedJobApplication) {
//         return JSON.parse(storedJobApplication);
//     }
//     return [];
// }

// const saveJobApplication = id => {
//     const storedJobApplications = getStoredJobApplication();
//     const exists = storedJobApplications.find(jobId => jobId === id);
//     if (!exists) {
//         storedJobApplications.push(id);
//         localStorage.setItem('job-applications', JSON.stringify(storedJobApplications)); // Corrected setItem and key name
//     }
// }

// // export default saveJobApplication;
// export { getStoredJobApplication, saveJobApplication };



// corrrection test

// src/Utility/localstorage.js
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    return storedJobApplication ? JSON.parse(storedJobApplication) : [];
};

const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobApplication();
    if (!storedJobApplications.includes(id)) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
};

export { getStoredJobApplication, saveJobApplication };
