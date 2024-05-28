import { ComponentProps } from 'react';

interface IButtonProps extends ComponentProps<'button'> {}

export function Button({ ...props }: IButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 px-6 h-12 rounded-2xl text-white font-medium transition-all"
    />
  );
}
