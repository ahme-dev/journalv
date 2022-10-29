import * as Electron from 'electron';
import { AppData } from '../store/data';

// should match main/preload.ts for typescript support in renderer

export default interface Preload {
  writeData: (appObject: AppData) => void;
  readData: () => AppData;
}

// put in window object

declare global {
  interface Window {
    backend: Preload,
  }
}