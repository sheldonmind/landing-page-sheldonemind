import { useEffect, useRef } from 'react';

/**
 * For compositions laid out in fixed px that can't reflow — panels positioned against each
 * other, icons carrying px width/height attributes. Rather than let them reflow and lose their
 * shape, the element is pinned to the width it was composed for and scaled down to fit
 * whatever room it has. The form survives intact; the text just gets too small to read.
 *
 * Put `wrapRef` on a plain wrapper (it supplies the available width and carries the scaled
 * height) and `mockRef` on the composition itself. At or above `designWidth` both are left
 * untouched, so the original layout renders exactly as authored.
 */
export default function useScaleToFit(designWidth: number) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const mock = mockRef.current;
    if (!wrap || !mock) return;

    const apply = () => {
      const avail = wrap.clientWidth;
      if (avail >= designWidth) {
        mock.style.width = '';
        mock.style.transform = '';
        wrap.style.height = '';
        return;
      }
      const scale = avail / designWidth;
      mock.style.width = `${designWidth}px`;
      mock.style.transformOrigin = 'top left';
      mock.style.transform = `scale(${scale})`;
      // transform doesn't affect layout, so the wrapper has to carry the scaled height itself.
      wrap.style.height = `${mock.offsetHeight * scale}px`;
    };

    apply();

    // Only the wrapper's width is an input; ignoring its height keeps the one we write above
    // from re-triggering this. The mock is watched separately because its height still moves
    // under us as images and fonts land.
    let lastWidth = wrap.clientWidth;
    const roWrap = new ResizeObserver(() => {
      if (wrap.clientWidth === lastWidth) return;
      lastWidth = wrap.clientWidth;
      apply();
    });
    const roMock = new ResizeObserver(apply);
    roWrap.observe(wrap);
    roMock.observe(mock);
    return () => {
      roWrap.disconnect();
      roMock.disconnect();
    };
  }, [designWidth]);

  return { wrapRef, mockRef };
}
