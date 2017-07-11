export const is =
  <type>(func: (unknown: any) => boolean = (x) => !!x) =>
    (unknown: any): unknown is type =>
      func(unknown);

export default is;
