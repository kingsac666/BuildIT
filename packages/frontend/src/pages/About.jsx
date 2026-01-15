import { Card } from '../components/common';

/**
 * About page component
 */
const About = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About BuildIT
          </h1>
          <Card className="mt-8">
            <p className="text-gray-700 dark:text-gray-300">
              This is a modern monorepo application built with the latest
              technologies and best practices.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;

