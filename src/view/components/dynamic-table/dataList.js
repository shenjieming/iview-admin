let dataList = [
  { 'beSelected': 1, 'brandName': 'Chinstudio', 'channelSource': 1, 'color': '冬装', 'createDate': '2020-02-28 16:29:42', 'createName': '何润平', 'fileState': 1, 'mainMap': '5e58cf590ca39bcdc1580b19.jpg', 'printState': 0, 'proofingFactory': '宸帆版房', 'proofingNumber': 1, 'reviewState': 3, 'sampleDressFileCode': 'YY20020350', 'sampleDressFileId': 1085, 'sampleDressFileName': '测试衣服', 'sourceType': 1, 'styleSourceId': '3', 'styleSourceName': '成成' }, { 'channelSource': 1, 'color': '绿色', 'createDate': '2020-02-28 16:29:42', 'createName': '何润平', 'fileState': 1, 'mainMap': '5e58cf570ca39bcdc1580b16.jpg', 'printState': 1, 'proofingFactory': '成成-00009', 'proofingNumber': 1, 'reviewState': 3, 'sampleDressFileCode': 'YY20020340', 'sampleDressFileId': 1084, 'sourceType': 1, 'styleSourceId': '3', 'styleSourceName': '成成' }, { 'channelSource': 1, 'color': '绿色', 'createDate': '2020-02-28 16:29:40', 'createName': '何润平', 'fileState': 1, 'mainMap': '5e58cf560ca39bcdc1580b13.jpg', 'printState': 1, 'reviewState': 2, 'sampleDressFileCode': 'YY20020330', 'sampleDressFileId': 1083, 'sourceType': 1, 'styleSourceId': '3', 'styleSourceName': '成成' }, { 'channelSource': 1, 'color': '黑色', 'createDate': '2020-02-28 16:24:03', 'createName': '样衣app', 'fileState': 1, 'mainMap': '5e58ce100ca39bcdc1580b10.jpg', 'printState': 0, 'reviewState': 2, 'sampleDressFileCode': 'YY20020320', 'sampleDressFileId': 1082, 'sourceType': 1, 'styleSourceId': '623', 'styleSourceName': '测流程1' }
]
let sourceTypeList = ['供款', '采购', '自主', '自研']
let columns = [
  {
    title: '样衣款号',
    key: 'sampleDressFileCode',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '图片',
    key: 'mainMap',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '样衣名称',
    key: 'sampleDressFileName',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '品牌',
    key: 'brandName',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '颜色',
    key: 'color',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '来源类型',
    key: 'sourceType',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '款式来源',
    key: 'styleSourceName',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '档案状态',
    key: 'statusName',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '审核状态',
    key: 'reviewState',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '打印状态',
    key: 'printState',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '登记人',
    key: 'createName',
    align: 'center',
    resizable: true,
    width: 180
  },
  {
    title: '登记时间',
    key: 'createDate',
    align: 'center',
    resizable: true,
    width: 180
  }
]

export { dataList, columns, sourceTypeList }
