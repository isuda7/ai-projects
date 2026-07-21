import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils/utils';
import { Button } from './button';

export interface AlertDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancelText?: string;
  actionText?: string;
  onCancel?: () => void;
  onAction?: () => void;
  children?: React.ReactNode; // custom actions
}

export const AlertDialog = ({
  open,
  onOpenChange,
  title,
  description,
  cancelText = "Cancel",
  actionText = "Continue",
  onCancel,
  onAction,
  children
}: AlertDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!open && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
      document.body.style.overflow = '';
    }
  }, [open]);

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  const handleAction = () => {
    onAction?.();
    onOpenChange?.(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg",
        "backdrop:bg-black/80 backdrop:backdrop-blur-sm",
        "open:animate-in open:fade-in-0 open:zoom-in-95 open:slide-in-from-left-1/2 open:slide-in-from-top-[48%]"
      )}
      onClose={() => onOpenChange?.(false)}
    >
      <div className="flex flex-col space-y-2 text-center sm:text-left">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4">
        {children ? children : (
          <>
            <Button variant="outline" onClick={handleCancel} className="mt-2 sm:mt-0">{cancelText}</Button>
            <Button variant="solid" onClick={handleAction}>{actionText}</Button>
          </>
        )}
      </div>
    </dialog>
  );
};
