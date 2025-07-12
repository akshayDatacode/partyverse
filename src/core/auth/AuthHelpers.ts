import { AxiosInstance } from 'axios';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';

export const AUTH_TOKEN_KEY = 'auth_token'; // Key for storing the token in localStorage

/**
 * Get the authentication token from localStorage.
 * @returns {string | null} The authentication token or null if not found.
 */
export const getAuth = () => {
  if (!localStorage) return null;

  const lsValue = localStorage.getItem(AUTH_TOKEN_KEY);
  if (!lsValue) {
    return null
  }
  try {
    const auth = JSON.parse(lsValue);
    if (auth) {
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error);
    return null;
  }
};


/**
 * Set the authentication token in localStorage.
 * @param {string} token - The authentication token to store.
 */
export const setAuth = (token: string): void => {
  try {
    const lsValue = JSON.stringify(token);
    localStorage.setItem(AUTH_TOKEN_KEY, lsValue);
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error);
  }
};

/**
 * Remove the authentication token from localStorage.
 */
export const removeAuth = (): void => {
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error);
  }
};


/**
 * Debounced error handler to show toast notifications.
 */
const debouncedError = debounce((message: string) => {
  debugger
  toast.error(message)
}, 100); // Debounce delay of 1 second

/**
 * Setup Axios with interceptors for handling authentication headers and responses.
 * @param {AxiosInstance} axiosInstance - The Axios instance to configure.
 */
export const setupAxios = (axiosInstance: AxiosInstance): void => {
  // Set default headers for Axios
  axiosInstance.defaults.headers.common['Accept'] = 'application/json';

  // Request interceptor to add the Authorization header
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAuth();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle errors globally
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      debugger
      if (error.response) {
        debugger

        // Handle specific HTTP status codes
        if (error.response.status === 401) {
          console.warn('Unauthorized! Removing auth token.');
          removeAuth();
          // Optionally, redirect to login page
          //   window.location.href = '/login';
        } else if (error.response.status === 403) {
          console.warn('Forbidden! You do not have access.');
        }
      } else {
        console.error('Network or server error:', error.message);
      }
      debouncedError('Request error occurred. Please try again.');
      return Promise.reject(error);
    }
  );
};
