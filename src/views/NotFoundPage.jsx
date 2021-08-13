import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Page not found. Go to
      <Link to="/landing-page"> Home Page </Link>
    </div>
  );
}
