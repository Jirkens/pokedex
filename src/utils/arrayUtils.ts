import { IPokemonStats } from "../types";

export const moveItemInArrayByName = (array: IPokemonStats[], itemName: string, newIndex: number): IPokemonStats[] => {
  const index = array.findIndex(item => item.name === itemName);
  
  if (index === -1) {
    return array;
  }

  const [item] = array.splice(index, 1);
  array.splice(newIndex, 0, item);

  return array;
};
