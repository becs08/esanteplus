import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import DashSecretairePage from '../pages/dashSecretaire/dashboard/Dashboard';

export function useNavigateSecretaire() {
    const navigate = useNavigate();
  
    return useCallback(() => navigate('/secretaire'), [DashSecretairePage]);
  }