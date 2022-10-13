import {Note} from "easymidi";

/**
 * create major chord
 * @param note
 */
const major = (note: Note) => {
  return [4, 7].map((append) => {
    return {
      ...note,
      note: note.note + append,
    };
  });
};

export  {
  major
}
