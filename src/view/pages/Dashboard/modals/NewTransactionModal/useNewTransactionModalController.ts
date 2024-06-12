import { useDashboard } from '../../components/DashboardContext/useDashboard';

export function useNewTransactionController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  return {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  };
}
