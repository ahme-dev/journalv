import * as Electron from 'electron';
import { Entry } from '../store/data';

// should match main/preload.ts for typescript support in renderer

export default interface Preload {
  writeJournal: (journalObject: Entry[]) => void;
  readJournal: () => Entry[];
}

// put in window object

declare global {
  interface Window {
    backend: Preload,
  }
}