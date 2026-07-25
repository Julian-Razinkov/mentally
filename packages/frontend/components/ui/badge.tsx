import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-3 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary:
          'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
        destructive:
          'bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20',
        outline:
          'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
        ghost:
          'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
        link: 'text-primary underline-offset-4 hover:underline',
        success:
          'bg-success text-green-foreground border border-success-foreground [a]:hover:bg-green-500/80',
      },
      size: {
        small: 'h-5 w-fit px-2 py-1 text-xs font-medium',
        medium: 'h-6 w-fit px-2 py-1 text-sm font-medium',
        large: 'h-10 w-fit px-3 py-1 text-md font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

function Badge({
  className,
  variant = 'default',
  size,
  asChild = false,
  iconStart,
  iconEnd,
  children,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {iconStart && <span data-icon="inline-start">{iconStart}</span>}
      {children}
      {iconEnd && <span data-icon="inline-end">{iconEnd}</span>}
    </Comp>
  );
}

export { Badge, badgeVariants };
