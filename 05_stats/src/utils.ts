/**
 *
 * @param dateString // '07/04/2019'
 * @returns
 */
export const dateStringToDate = (dateString: string): Date => {
  // console.log("dateString:", dateString); // 07/04/2019
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
  // console.log("dateParts:", dateParts); // [ 7, 4, 2019 ]

  const newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  // console.log("newDate:", newDate); // 2019-04-06T22:00:00.000Z
  return newDate;
};
