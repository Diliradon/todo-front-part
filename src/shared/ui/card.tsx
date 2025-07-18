import { FC } from 'react';

import { cn } from '@/lib/utils';

type CardProps = React.ComponentProps<'div'>;

const Card: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-transparent/30 text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm',
        className
      )}
      {...props}
    />
  );
};

const CardHeader: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  );
};

const CardTitle: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  );
};

const CardDescription: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

const CardAction: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  );
};

const CardContent: FC<CardProps> = ({ className, ...props }) => {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />;
};

const CardFooter: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  );
};

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
