export interface IModel<T> {
  read():Promise<T[]>,
}
