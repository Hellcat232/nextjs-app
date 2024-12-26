'use client';

import Button from '@/app/components/button';

export interface ErrorPropsComponent {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorPropsComponent) => {
  return (
    <div>
      <p>{`Something went wrong ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
