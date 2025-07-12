// 'use client';

// import { ReactNode } from 'react';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { Provider as ReduxProvider } from 'react-redux';
// import store from '@/core/store/store';

// const queryClient = new QueryClient();

// export default function Providers({ children }: { children: ReactNode }) {
//   return (
//     <ReduxProvider store={store}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </ReduxProvider>
//   );
// }