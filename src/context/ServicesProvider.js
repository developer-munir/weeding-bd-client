import React, { createContext, useState } from "react";

export const ServiceContext = createContext();
const ServicesProvider = ({ children }) => {
    const [serviceId, setServiceId] = useState(null);
    const detailsService = (service) => {
        // console.log(id);
        setServiceId(service);
  };
    const shareData = { detailsService, serviceId };
  return <ServiceContext.Provider value={shareData}>{children}</ServiceContext.Provider>;
};

export default ServicesProvider;
