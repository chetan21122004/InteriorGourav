import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service } from '@/data/servicesData';

interface ServicesContextType {
  selectedService: Service | null;
  isModalOpen: boolean;
  openServiceModal: (service: Service) => void;
  closeServiceModal: () => void;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};

interface ServicesProviderProps {
  children: ReactNode;
}

export const ServicesProvider: React.FC<ServicesProviderProps> = ({ children }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // Delay to allow modal close animation
  };

  const value: ServicesContextType = {
    selectedService,
    isModalOpen,
    openServiceModal,
    closeServiceModal,
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};
