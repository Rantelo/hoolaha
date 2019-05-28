import { IRatio, EOrientation } from '../interfaces/ReaderInterface';

export function calculateRatio(
  src_width: number,
  src_height: number,
  dest_width: number,
  dest_height: number
): IRatio {
  const scale = Math.min(dest_width/src_width, dest_height/src_height);
  const width = src_width * scale;
  const height = src_height * scale;
  const orientation = (height >= width) ? EOrientation.Portrait : EOrientation.Landscape;

  return { width, height, orientation, scale };
}
