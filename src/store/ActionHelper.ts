import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'

class ActionHelper{
  // 数据处理
  dataHelper: DataHelper = new DataHelper('memoData', 'id')
  memoList!: Array<ItemData>;

  // 业务处理
  constructor() {
    // 读取本地数据
    this.memoList = this.readData()
  }

  readData(): Array<ItemData> {
    // 读取 本地 object 
    let arrObj = this.dataHelper.readData()

    // object 转化 ItemData
    let arrItem = arrObj.map((ele: any) => {
      let item: ItemData = new ItemData()
      item.id = ele.id
      item.categoryId = ele.categoryId
      item.title = ele.title
      item.content = ele.content
      item.createTime = ele.createTime
      return item
    })

    return arrItem
  }
}

export default ActionHelper