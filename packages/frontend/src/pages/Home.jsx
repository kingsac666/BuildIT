import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { healthService } from '../services/apiService';
import { Card } from '../components/common';

/**
 * Home page component
 */
const Home = () => {
  const { data: healthStatus, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: () => healthService.checkHealth(),
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to BuildIT
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Monorepo with Express.js + React + Vite + Tailwind CSS
          </p>

          {isLoading ? (
            <Card>
              <p>Loading...</p>
            </Card>
          ) : (
            healthStatus && (
              <Card title="Backend Status">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Status:</span>{' '}
                    <span className="text-green-600">{healthStatus.status}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Message:</span>{' '}
                    {healthStatus.message}
                  </p>
                </div>
              </Card>
            )
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Tech Stack">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ Express.js Backend</li>
                <li>✅ React + Vite</li>
                <li>✅ Tailwind CSS</li>
                <li>✅ React Router</li>
                <li>✅ Redux Toolkit</li>
                <li>✅ TanStack Query</li>
                <li>✅ Axios</li>
              </ul>
            </Card>

            <Card title="Features">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>🚀 Hot Module Replacement</li>
                <li>📦 Monorepo Structure</li>
                <li>🎨 Tailwind Styling</li>
                <li>🔄 State Management</li>
                <li>🌐 API Integration</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

