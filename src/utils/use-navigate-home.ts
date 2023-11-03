import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function useNavigateHomes() {
  const navigate = useNavigate();

  return useCallback(() => navigate('/'), []);
}





