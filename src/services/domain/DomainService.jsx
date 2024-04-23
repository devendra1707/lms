import { privateAxios } from "../helper";

// Add Domain
export const addDomains = (domain) => {
  return privateAxios.post(`domain/create`, domain).then((response) => {
    return response.data;
  });
};

// Update Domain
export const updateDomains = (domain, domainId) => {
  return privateAxios.put(`domain/update/${domainId}`, domain).then((response) => {
    return response.data;
  });
};

// Get All Domain
export const getAllDomains = () => {
  return privateAxios.get(`domain/all`).then((response) => {
    return response.data;
  });
};

// Get Domain By Id
export const getDomainById = (domainId) => {
  return privateAxios.get(`domain/get/${domainId}`).then((response) => {
    return response.data;
  });
};

// Get Delete By Id
export const deleteDomainById = (domainId) => {
  return privateAxios.delete(`domain/delete/${domainId}`).then((response) => {
    return response.data;
  });
};
