import cn from 'classnames';

import { productPlaceholder } from '@/assets';

import { Image } from './image';

interface BreadcrumbButtonProps {
  text: string;
  image?: any;
  onClick: () => void;
}

const BreadcrumbButton: React.FC<BreadcrumbButtonProps> = ({
  text,
  image,
  onClick,
}) => (
  <button
    className={cn(
      'relative h-14 rounded-lg bg-light px-7 text-base font-semibold text-heading shadow-downfall-xs transition-shadow hover:shadow-downfall-sm',
      {
        'pr-[5.5rem]': image,
      }
    )}
    onClick={onClick}
  >
    <span className="whitespace-nowrap">{text}</span>
    {image && (
      <span className="absolute bottom-0 right-0 h-full w-14 overflow-hidden rounded-lg rounded-l-none">
        <Image
          className="h-full w-full"
          src={image ?? productPlaceholder}
          alt={text ?? ''}
          layout="responsive"
          width={60}
          height={60}
        />
      </span>
    )}
  </button>
);

export default BreadcrumbButton;
