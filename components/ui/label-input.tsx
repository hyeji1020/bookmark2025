import { cn } from '@/lib/utils';
import { Input } from './input';
import { RefObject, useId } from 'react';

type Props = {
  label: string;
  type?: string;
  name?: string;
  ref?: RefObject<HTMLInputElement | null>
  placeholder?: string;
  className?: string;
};

export default function LabelInput({
  label,
  type,
  name,
  ref,
  placeholder,
  className,
}: Props) {
  const uniqName = useId(); 

  return (
    <label className='text-sm font-semibold capitalize'>
      {label}
      <Input
        type={type || 'text'}
        name={name || uniqName}
        ref={ref}
        placeholder={placeholder}
        className={cn('bg-gray-50 focus:bg-white font-normal', className)}
      />
    </label>
  );
}