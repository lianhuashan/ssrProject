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
  children
}: MaskProps) => {
  const [customStyle, setCustomStyle] = useState<CSSProperties>({
    backgroundColor: color,
    opacity: opacity,
    display: visible ? 'block' : 'none'
  });

  const [innerVisible, setInnerVisible] = useState(visible);

  useEffect(() => {
    setCustomStyle({ ...customStyle, backgroundColor: color, opacity: opacity, display: visible ? 'block' : 'none', ...style });
  }, [color, opacity, visible, style]);

  useEffect(() => {
    if (disableBodyScroll && innerVisible) {
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

  return createPortal(
    <div
      className={`${styles.mask} ${disableBodyScroll ? styles['mask-disable-body-scroll'] : ''}`}
      style={customStyle}
      onClick={(e) => handleClick(e)}>
      {children}
    </div>,
    container || document.body
  );
};

export default Mask;
