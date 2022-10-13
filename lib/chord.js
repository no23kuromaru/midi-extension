const major = (note) => {
  return [4, 7].map((append) => {
    return {
      ...note,
      note: note.note + append,
    };
  });
};

module.exports = {
  major
}
