import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (e.g., for auth tokens)
axiosInstance.interceptors.request.use(
  (config) => {
    // Optionally add auth token here
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Let the utility function handle the error display
    return Promise.reject(error);
  }
);

// Generic API call function
export async function apiRequest<T = any>(
  config: AxiosRequestConfig,
  showToast: (message: string, type?: 'error' | 'success') => void
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInstance(config);
    return response.data;
  } catch (error) {
    let message = 'Something went wrong. Please try again.';
    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || message;
    }
    showToast(message, 'error');
    throw error;
  }
}
