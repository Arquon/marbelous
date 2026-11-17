interface FluidClampParams {
   minRes: number;
   minValue: number;
   maxRes: number;
   maxValue: number;
   rootFontSize: number;
}

export function fluidClamp({ maxRes, maxValue, minRes, minValue, rootFontSize = 16 }: FluidClampParams) {
   const slope = (maxValue - minValue) / (maxRes - minRes);

   const yAxisIntersection = -minRes * slope + minValue;

   const minRem = Number((minValue / rootFontSize).toFixed(4));
   const maxRem = Number((maxValue / rootFontSize).toFixed(4));
   const intersectionRem = Number((yAxisIntersection / rootFontSize).toFixed(4));
   const slopeVw = Number((slope * 100).toFixed(4));

   return `clamp(${minRem}rem, ${intersectionRem}rem + ${slopeVw}vw, ${maxRem}rem)`;
}

export function delay(ms: number): Promise<void> {
   return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
