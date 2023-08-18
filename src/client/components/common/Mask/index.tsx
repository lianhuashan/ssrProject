import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import styles from './mask.scss';
import { createPortal } from 'react-dom';
import { container } from 'webpack';
interface MaskProps {
  color?: string;
  opacity?: string;
  destroyOnClose?: boolean;
  disableBodyScroll?: boolean;
  onMaskClick?: () => void;
  visible?: boolean;
  stopPropgation?: string[];
  children?: ReactNode;
  style?: CSSProperties;
  container?: HTMLElement;
  transparent?: boolean;
}
const Mask = ({
  container,
  color,
  opacity,
  style,
  destroyOnClose,
  disableBodyScroll,
  onMaskClick,
  visible,
  stopPropgation,
  transparent,
  children
}: MaskProps) => {
  const [customStyle, setCustomStyle] = useState<CSSProperties>({
    display: visible ? 'block' : 'none',
    ...(color
      ? {
          backgroundColor: color
        }
      : null),
    ...(opacity
      ? {
          opacity: opacity
        }
      : null),
    ...(typeof transparent !== 'undefined' ? { backdropFilter: !transparent ? "blur('60px')" : 'none' } : null),
    ...style
  });

  const [innerVisible, setInnerVisible] = useState(visible);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    console.log('mask useEffect');
    setIsClient(true);
  }, []);

  useEffect(() => {
    setCustomStyle({
      ...customStyle,
      display: visible ? 'block' : 'none',
      ...(color
        ? {
            backgroundColor: color
          }
        : null),
      ...(opacity
        ? {
            opacity: opacity
          }
        : null),
      ...(typeof transparent !== 'undefined' ? { backdropFilter: !transparent ? 'blur(60px)' : 'none' } : null),
      ...style
    });
  }, [color, opacity, visible, style, transparent]);

  useEffect(() => {
    if (disableBodyScroll && innerVisible) {
      console.log('1111');
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }, [disableBodyScroll, innerVisible]);

  useEffect(() => {
    setInnerVisible(visible);
  }, [visible]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onMaskClick?.();
    e.stopPropagation();
  };

  return isClient ? (
    createPortal(
      <div
        className={`${styles.mask} ${disableBodyScroll ? styles['mask-disable-body-scroll'] : ''}`}
        style={customStyle}
        onClick={(e) => handleClick(e)}>
        {children}
      </div>,
      container || document.body
    )
  ) : (
    <></>
  );
};

export default Mask;
