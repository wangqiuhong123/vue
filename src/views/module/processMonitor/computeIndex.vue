<template>
  <div>
    <div style="font-size: 15px;color: black;margin-right: 3px;">
      模块功能说明：这是计算平均生产天数功能模块，该模块主要计算每个流程的平均生产天数，在下方点击计算平均生产天数，即可计算所有步骤的平均生产天数。
    </div>
    <div>
      <el-button style="background-color: #409EFF;color: white;line-height: 15px;" size="small" @click="query">计算平均生产天数</el-button>
      <period-bar-chart :period-data="periodData" />
    </div>
    <div>
      <div class="st-table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="num" label="工序步骤" width="180">
            <template slot-scope="scope">
              <input v-show="scope.row.iseditor" v-model="scope.row.num" type="text">
              <span v-show="!scope.row.iseditor">{{ scope.row.num }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="steps" label="生产工序名称" width="180">
            <template slot-scope="scope">
              <input v-show="scope.row.iseditor" v-model="scope.row.steps" type="text">
              <span v-show="!scope.row.iseditor">{{ scope.row.steps }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="近一年平均生产天数" width="180">
            <template slot-scope="scope">
              <input v-show="scope.row.iseditor" v-model="scope.row.date" type="text">
              <span v-show="!scope.row.iseditor">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="newDate" label="最近一次生产耗时（天）" width="180">
            <template slot-scope="scope">
              <input v-show="scope.row.iseditor" v-model="scope.row.newDate" type="text">
              <span v-show="!scope.row.iseditor">{{ scope.row.newDate }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="note" label="备注">
            <template slot-scope="scope">
              <input v-show="scope.row.iseditor" v-model="scope.row.note" type="text">
              <span v-show="!scope.row.iseditor">{{ scope.row.note }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button type="primary" @click="edit(scope.row, scope)">编辑</el-button>
              <el-button type="success" @click="save(scope.row)">保存</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import PeriodBarChart from '@/views/dashboard/PeriodBarChart'
import { getCompute } from '@/api/compute'
import { getNewCompute } from '@/api/compute'
export default {
  name: 'ComputeIndex',
  components: { PeriodBarChart },
  data() {
    return {
      jihuaCreateTime: [],
      periodData: [0, 10, 0, 0, 10, 0, 0, 110, 0, 0, 0, 10, 0, 10, 0, 10, 0],
      // queryParams: {},
      tableData: [
        {
          num: '工序1 ',
          steps: '铸轧生产计划',
          date: '11',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序2 ',
          steps: '熔炼工序',
          date: '22',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序3',
          steps: '保温工序',
          date: '33',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序4',
          steps: '铸轧工序',
          date: '44',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序5 ',
          steps: '出入库记录（铸轧）',
          date: '55',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序6',
          steps: '铸轧卷质检报告',
          date: '66',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序7',
          steps: '冷轧生产计划',
          date: '77',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序8 ',
          steps: '冷轧工序',
          date: '88',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序9 ',
          steps: '退火工序',
          date: '99',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序10',
          steps: '重卷工序',
          date: '88',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序11',
          steps: '出入库记录（冷轧）',
          date: '77',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序12',
          steps: '冷轧工序质量巡检',
          date: '66',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序13',
          steps: '冷轧卷质检报告',
          date: '55',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序14',
          steps: '投诉及处理信息',
          date: '44',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序15 ',
          steps: '工序15',
          date: '33',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序16',
          steps: '工序16',
          date: '22',
          newDate: '001',
          note: '无',
          iseditor: false
        },
        {
          num: '工序17 ',
          steps: '工序17',
          date: '11',
          newDate: '001',
          note: '无',
          iseditor: false
        }
      ]
    }
  },
  created() {

  },
  methods: {
    edit(row, index) {
      row.iseditor = true
    },
    save(row, index) {
      row.iseditor = true
    },
    // 查询参数
    query() {
      getCompute().then(response => {
        console.log('这是整体的数据', response)
        this.periodData = [
          response.data[0].castplan,
          response.data[0].smelthold,
          response.data[0].baowen,
          response.data[0].baowen1,
          response.data[0].baowen2,
          response.data[0].baowen3,
          response.data[0].baowen4,
          response.data[0].baowen5,
          response.data[0].castpro,
          response.data[0].castreel,
          response.data[0].coldplan,
          response.data[0].coldproduce,
          response.data[0].furnace,
          response.data[0].reelreport,
          response.data[0].rereeler,
          response.data[0].store,
          response.data[0].package
        ]
        // 表格数据填充
        let i = 0
        while (i <= 16) {
          this.tableData[i].date = this.periodData[i]
          i++
        }
      })
      getNewCompute().then(response => {
        // console.log('这是新的数据', response)
        // 表格数据填充
        this.tableData[0].newDate = response.data[0].castplanNew
        this.tableData[1].newDate = response.data[0].smeltholdNew
        this.tableData[2].newDate = response.data[0].baowenNew
        this.tableData[3].newDate = response.data[0].baowen1New
        this.tableData[4].newDate = response.data[0].baowen2New
        this.tableData[5].newDate = response.data[0].baowen3New
        this.tableData[6].newDate = response.data[0].baowen4New
        this.tableData[7].newDate = response.data[0].baowen5New
        this.tableData[8].newDate = response.data[0].castproNew
        this.tableData[9].newDate = response.data[0].castreelNew
        this.tableData[10].newDate = response.data[0].coldplanNew
        this.tableData[11].newDate = response.data[0].coldproduceNew
        this.tableData[12].newDate = response.data[0].furnaceNew
        this.tableData[13].newDate = response.data[0].reelreportNew
        this.tableData[14].newDate = response.data[0].rereelerNew
        this.tableData[15].newDate = response.data[0].storeNew
        this.tableData[16].newDate = response.data[0].packageNew
      })
    }
  }
}
</script>
<style>
</style>
