import * as s from '../schema';
import { precacheTypes } from './resources';

export const createPrecacheBlock = () =>
  s
    .obj('Precache')
    .fields(Object.entries(precacheTypes).map(([n, pattern]) => [n, s.str().pattern(pattern)]));
