/**@desc JSON stringify, parse 후 반환 (재구성을 통해 다차원배열 복사 등에 활용 가능) */
export const reconstruction = (target: any) => {
  return JSON.parse(JSON.stringify(target));
};
