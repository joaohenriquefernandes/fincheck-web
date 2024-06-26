import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../../components/icons/BankAccountTypeIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

interface IAccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
}

export function AccountCard({ balance, color, name, type }: IAccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="h-[200px] p-4 bg-white rounded-2xl flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 tracking-[-0.5px] font-medium block mt-4">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            'text-gray-800 tracking-[-0.5px] font-medium block',
            !areValuesVisible && 'blur-sm',
          )}
        >
          {formatCurrency(balance)}
        </span>

        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
