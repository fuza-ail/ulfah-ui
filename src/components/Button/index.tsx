import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export default function Button({ ...props }: ButtonProps) {
  return (
    <button className="bg-amber-300" {...props}>
      Button
    </button>
  );
}
