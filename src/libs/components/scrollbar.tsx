import cn from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

type ScrollbarProps = {
  options?: any;
  style?: React.CSSProperties;
  className?: string;
  children: any;
};

const Scrollbar: React.FC<ScrollbarProps> = ({
  options,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn('os-theme-thin-dark', className),
        scrollbars: {
          autoHide: 'scroll',
        },
        ...(options || {}),
      }}
      style={style}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
