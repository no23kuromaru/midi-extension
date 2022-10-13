import {Note} from "easymidi";

function mapFunc(append: number) {
  return {
    ...this,
    note: this.note + append,
  };
}

/**
 * C
 * @param rootNote
 */
const major = (rootNote: Note): Note[] => {
  return [4, 7].map(mapFunc, rootNote);
};

/**
 * Cm
 * @param rootNote
 */
const minor = (rootNote: Note): Note[] => {
  return [3, 7].map(mapFunc, rootNote);
};

/**
 * C7
 * @param rootNote
 */
const seven = (rootNote: Note): Note[] => {
  const notes = major(rootNote);
  notes.push({...rootNote, note: rootNote.note + 10})

  return notes;
};

/**
 * Cm7
 * @param rootNote
 */
const minorSeven = (rootNote: Note): Note[] => {
  const notes = minor(rootNote);
  notes.push({...rootNote, note: rootNote.note + 10})

  return notes;
};

/**
 * CM7
 * @param rootNote
 */
const majorSeven = (rootNote: Note): Note[] => {
  const notes = major(rootNote);
  notes.push({...rootNote, note: rootNote.note + 11})

  return notes;
};

/**
 * CmM7
 * @param rootNote
 */
const minorMajorSeven = (rootNote: Note): Note[] => {
  const notes = minor(rootNote);
  notes.push({...rootNote, note: rootNote.note + 11})

  return notes;
};

/**
 * sus4
 * @param rootNote
 */
const sus4 = (rootNote: Note): Note[] => {
  return [5, 7].map(mapFunc, rootNote);
};

/**
 * C7sus4
 * @param rootNote
 */
const sevenSus4 = (rootNote: Note): Note[] => {
  return [5, 7, 10].map(mapFunc, rootNote);
};

/**
 * Cdim
 * @param rootNote
 */
const diminish = (rootNote: Note): Note[] => {
  return [3, 6, 9].map(mapFunc, rootNote);
};

/**
 * Cm7-5
 * @param rootNote
 */
const minorSevenFlat5 = (rootNote: Note): Note[] => {
  return [3, 6, 10].map(mapFunc, rootNote);
};

/**
 * Caug
 * @param rootNote
 */
const augment = (rootNote: Note): Note[] => {
  return [4, 8].map(mapFunc, rootNote);
};

/**
 * Cadd9
 * @param rootNote
 */
const add9th = (rootNote: Note): Note[] => {
  return [2, 7].map(mapFunc, rootNote);
};

/**
 * C6
 * @param rootNote
 */
const six = (rootNote: Note): Note[] => {
  return [4, 7, 9].map(mapFunc, rootNote);
};

const minorSix = (rootNote: Note): Note[] => {
  return [3, 7, 9].map(mapFunc, rootNote);
};

export {
  major,
  minor,
  seven,
  minorSeven,
  majorSeven,
  minorMajorSeven,
  sus4,
  sevenSus4,
  diminish,
  minorSevenFlat5,
  augment,
  add9th,
  six,
  minorSix,
}
