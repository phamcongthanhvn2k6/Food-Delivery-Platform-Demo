import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden">
      {/* Background 404 Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h1 className="text-[30vw] font-display font-bold text-surface-low/60 leading-none">404</h1>
      </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <div className="w-48 h-48 bg-primary-container rounded-full mx-auto mb-8 blur-3xl opacity-20"></div>
        <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">Rất tiếc!</h2>
        <p className="font-sans text-on-surface-variant text-lg max-w-md mx-auto mb-8">
          Món ăn này không tồn tại hoặc đã bị gỡ khỏi hệ thống.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-sans font-semibold text-lg hover:shadow-lg transition-shadow"
        >
          Quay lại Trang Chủ
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
