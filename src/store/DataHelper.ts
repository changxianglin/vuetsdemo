class DataHelper {
  dataKey: string
  primaryKey: string

  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }

  readData(): any {}

  saveData(arrData: Array<Object>): void {}

  addData(conStr: string): number {}

  removeData(id: string | number): boolean {}
}

export default DataHelper