export type ChartRenderer = (width: number) => HTMLElement | SVGElement | null;

interface ResponsiveChart {
  render: () => void;
  disconnect: () => void;
}

export function createResponsiveChart(
  container: HTMLElement,
  renderChart: ChartRenderer
): ResponsiveChart {
  let frameId = 0;
  let lastWidth = 0;

  const draw = (force: boolean) => {
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(() => {
      const width = container.clientWidth;
      if (!width) return;
      if (!force && width === lastWidth) return;

      lastWidth = width;
      const chart = renderChart(width);
      if (!chart) return;

      container.innerHTML = '';
      container.appendChild(chart);
    });
  };

  const observer = new ResizeObserver(() => draw(false));
  observer.observe(container);

  draw(true);

  return {
    render: () => draw(true),
    disconnect: () => observer.disconnect(),
  };
}
