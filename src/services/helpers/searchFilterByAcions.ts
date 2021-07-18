import { ISearchMainInfoCarItem } from "../../types/searchMain";

export const searchFilterByTarrifs = (
  items: ISearchMainInfoCarItem[],
  sortByValue: string
) => {
  return items.filter((item) =>
    Object.keys(item.tariffs).includes(sortByValue)
  );
};

export const searchFilterByAllOptions = (
  items: ISearchMainInfoCarItem[],
  sortByValue: string
) => {
  return items.filter(
    (item) =>
      item.mark.toLocaleLowerCase().includes(sortByValue.toLocaleLowerCase()) ||
      item.model.toLocaleLowerCase().includes(sortByValue) ||
      Object.keys(item.tariffs).includes(sortByValue) ||
      checkYearField(item, sortByValue)
  );
};

function checkYearField(item: ISearchMainInfoCarItem, sortByValue: string) {
  const newArray = Object.values(item.tariffs).map((item) => {
    if (
      String(item.year)
        .toLocaleLowerCase()
        .includes(sortByValue.toLocaleLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (newArray.includes(true)) {
    return true;
  } else {
    return false;
  }
}
