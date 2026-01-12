export type EnergyPricesData = typeof import('../data/energy-prices.json');

export interface EnergyPriceSeriesPoint {
  year: number;
  region: string;
  price: number;
}

export interface EnergyPriceRatioPoint {
  year: number;
  ratio: number;
}

export interface EnergyPriceProjectionPoint {
  year: number;
  region: string;
  price: number;
  type: 'historical' | 'projection';
}

const regions = [
  { key: 'europe', label: 'Europe' },
  { key: 'usa', label: 'United States' },
  { key: 'china', label: 'China' },
] as const;

export const energyPriceColors = {
  domain: regions.map(region => region.label),
  range: ['#1a1a1a', '#666666', '#a4a4a4'],
};

export function getLatestEnergyPrices(data: EnergyPricesData) {
  return data.timeSeries[data.timeSeries.length - 1];
}

export function getEnergyPriceSeries(data: EnergyPricesData): EnergyPriceSeriesPoint[] {
  return data.timeSeries.flatMap((point) =>
    regions.map((region) => ({
      year: point.year,
      region: region.label,
      price: point[region.key],
    }))
  );
}

export function getEnergyPriceRatioSeries(data: EnergyPricesData): EnergyPriceRatioPoint[] {
  return data.timeSeries.map((point) => ({
    year: point.year,
    ratio: point.usa ? point.europe / point.usa : 0,
  }));
}

export function getEnergyPriceProjectionSeries(
  data: EnergyPricesData,
  historyYears: number = 3
): EnergyPriceProjectionPoint[] {
  return [
    ...data.timeSeries.slice(-historyYears).flatMap((point) =>
      regions.map((region) => ({
        year: point.year,
        region: region.label,
        price: point[region.key],
        type: 'historical' as const,
      }))
    ),
    ...data.projections.data.flatMap((point) =>
      regions.map((region) => ({
        year: point.year,
        region: region.label,
        price: point[region.key],
        type: 'projection' as const,
      }))
    ),
  ];
}

export function getSortedCountryBreakdown(data: EnergyPricesData) {
  return [...data.countryBreakdown2024].sort((a, b) => b.price - a.price);
}

export function getEnergyPriceStats(data: EnergyPricesData, baseYear: number = 2019) {
  const latest = getLatestEnergyPrices(data);
  const base = data.timeSeries.find((point) => point.year === baseYear) ?? data.timeSeries[0];

  const percentChange = (from: number, to: number) => (from ? ((to - from) / from) * 100 : 0);

  return {
    latest,
    baseYear: base?.year ?? baseYear,
    ratio: latest.usa ? latest.europe / latest.usa : 0,
    premium: latest.europe - latest.usa,
    changes: {
      europe: percentChange(base?.europe ?? 0, latest.europe),
      usa: percentChange(base?.usa ?? 0, latest.usa),
      china: percentChange(base?.china ?? 0, latest.china),
    },
  };
}
