import { HTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';

interface ChipProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ChipVariants> {
  children: ReactNode;
}

const ChipVariants = cva('flex items-center px-2 py-1', {
  variants: {
    size: {
      small: 'text-sm, rounded-md',
      medium: 'text-base rounded-md',
      large: 'text-lg rounded-lg',
    },
    type: {
      fill: 'text-white bg-indigo-500',
      line: 'bg-white border border-indigo-500',
    },
  },
  defaultVariants: {
    size: 'medium',
    type: 'line',
  },
});

export default function Chip({
  id,
  children,
  size,
  type,
  className,
}: ChipProps) {
  return (
    <div id={id} className={cn(ChipVariants({ size, type }), className)}>
      {children}
    </div>
  );
}
