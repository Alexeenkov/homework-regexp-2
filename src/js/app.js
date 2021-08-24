export default function orderByProps(object, rulesSort) {
  const arr = [];
  // Отсортированный массив из свойств объекта по алфавиту:
  const sortKeysObject = Object.keys(object).sort();

  // Функция добавляет отсортированные объекты в массив согласно задания:
  const pushObjectsToArr = () => {
    for (const elem of sortKeysObject) {
      arr.push({ key: elem, value: object[elem] });
    }
  };

  // ? Если правило сортировки не передано,
  // то возвращаем массив объектов, отсортированных по алфавиту:
  if (!rulesSort) {
    pushObjectsToArr();
    return arr;
  }

  // ? Если правило сортировки передано, но хотя бы одно из свойств отсутствует в объекте:
  if (rulesSort.some((elem) => !Object.prototype.hasOwnProperty.call(object, elem))) {
    throw new Error('Check the sorting parameters. One of the specified properties is missing in the object');
  }

  // ? Если правило сортировки передано корректно:
  for (const key in object) {
    if (rulesSort.includes(key)) {
      // Добавляем объекты в массив согласно переданному правилу:
      arr[rulesSort.indexOf(key)] = { key, value: object[key] };
      // Удаляем из отсортированного массива уже добавленные свойства:
      sortKeysObject.splice(sortKeysObject.indexOf(key), 1);
    }
  }
  // Добавляем оставшиеся элементы отсортированного массива:
  pushObjectsToArr();
  return arr;
}