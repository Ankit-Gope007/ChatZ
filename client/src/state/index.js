import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(persist(
  (set) => ({
    isAuthenticated: false,
    userDetails: null, // Initial state for user details

    login: (user) => set({
      isAuthenticated: true,
      userDetails: user // Store user details upon login
    }),

    logout: () => set({
      isAuthenticated: false,
      userDetails: null // Clear user details upon logout
    }),
  }),
  {
    name: 'auth-storage', // Name of the storage
    getStorage: () => localStorage, // Use localStorage to persist
  }
));

export default useAuthStore;