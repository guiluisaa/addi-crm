const sortBy = <T>(array: T[], sortKey: keyof T) =>
  array.sort((a, b) => {
    // sort by id
    if (a[sortKey] > b[sortKey]) return 1;
    if (a[sortKey] < b[sortKey]) return -1;

    return 0;
  });

export default sortBy;
