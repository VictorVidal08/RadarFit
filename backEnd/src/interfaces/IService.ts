interface IService<T> {
    read():Promise<T[]>,
  }
    
  export default IService;
  