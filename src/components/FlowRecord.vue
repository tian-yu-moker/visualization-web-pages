<template>
  <div>
    <div class="tables">
      <el-table
        :data="onePage"
        height="530"
        stripe
        border
        v-loading="isLoading"
        highlight-current-row>
        <el-table-column
          prop="id"
          label="流水号"
          width="170"
          :resizable="resize"
          align="center" fixed>
        </el-table-column>
        <el-table-column
          prop="user_id"
          label="用户ID"
          width="130"
          :resizable="resize"
          align="center">
        </el-table-column>
        <el-table-column
          prop="input_type"
          label="录入类型"
          width="200"
          :resizable="resize"
          align="center">
        </el-table-column>

        <el-table-column
          prop="input_date"
          label="录入时间"
          width="190"
          :resizable="resize"
          align="center">
        </el-table-column>

        <el-table-column
          prop="result_image_path"
          label="输出图片路径"
          width="230"
          :resizable="resize"
          align="center">
        </el-table-column>

        <el-table-column
          prop="result_information"
          label="结果信息"
          width="200"
          :resizable="resize"
          align="center">
        </el-table-column>

        <el-table-column
          prop="result_code"
          label="结果代码"
          width="100"
          :resizable="resize"
          align="center">
        </el-table-column>

        <el-table-column
          prop="state"
          label="流水状态"
          width="100"
          :resizable="resize"
          align="center"
          fixed="right">
        </el-table-column>
      </el-table>
      <p></p>
      <el-button
        type="success"
        round
        icon="el-icon-refresh"
        size="medium"
        v-on:click="onRefresh"
        :loading="buttonLoad">刷新表单</el-button>
      </div>
      <div class="pages">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[30, 50, 80, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listLength">
        </el-pagination>
      </div>
      <div class="footer">
        ©2020 Jin Cai Technology 金财信息技术科技有限公司
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'FlowRecord',
    methods: {
      handleSizeChange(val)
      {
        this.pageSize = val;
        this.updatePagesContents();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val)
      {
        this.currentPage = val;
        this.updatePagesContents();
        console.log(`当前页: ${val}`);
      },
      onRefresh()
      {
        //刷新表单相关操作
        console.log(this.currentPage + " curPage Refresh");
        console.log(this.pageSize + " page size");
        this.buttonLoad = true;
        this.onePage = [];
        this.allFlowRecords = [];
        var reqStr = 'http://localhost:8090/flow/getAllFlowRecord';
        axios.get(reqStr).then(response =>
        {
          if(response.status == 200)
          {
            this.allFlowRecords = response.data;
            this.listLength = response.data.length;
            for(let i = (this.currentPage - 1) * this.pageSize; i < this.listLength; i++)
            {
              if(i == this.pageSize + (this.currentPage - 1) * this.pageSize)
              {
                break;
              }
              this.onePage.push(
              {
                  id: this.allFlowRecords[i].id,
                  user_id: this.allFlowRecords[i].user_id,
                  input_type: this.allFlowRecords[i].input_type,
                  input_date: this.allFlowRecords[i].input_date,
                  result_image_path: this.allFlowRecords[i].result_image_path,
                  result_information: this.allFlowRecords[i].result_information,
                  result_code: this.allFlowRecords[i].result_code,
                  state: this.allFlowRecords[i].state
              });
            }
            this.$notify({
              title: '成功',
              message: '刷新流水信息成功',
              type: 'success'
            });
          }
          else
          {
            this.$notify.error({
              title: '错误',
              message: '刷新流水信息失败'
            });
            this.buttonLoad = false;
          }
        });
        this.buttonLoad = false;
      },
      updatePagesContents()
      {
        this.isLoading = true;
        this.onePage = [];
        for(let i = (this.currentPage - 1) * this.pageSize; i < this.listLength; i++)
        {
          if(i == this.pageSize + (this.currentPage - 1) * this.pageSize)
          {
            break;
          }
          this.onePage.push(
            {
              id: this.allFlowRecords[i].id,
              user_id: this.allFlowRecords[i].user_id,
              input_type: this.allFlowRecords[i].input_type,
              input_date: this.allFlowRecords[i].input_date,
              result_image_path: this.allFlowRecords[i].result_image_path,
              result_information: this.allFlowRecords[i].result_information,
              result_code: this.allFlowRecords[i].result_code,
              state: this.allFlowRecords[i].state
            });
        }
        this.isLoading = false;
      }
    },
    data() {
      return {
        isLoading: false,
        currentPage: 1,
        pageSize: 30,
        allFlowRecords: [],
        onePage: [],
        listLength: 0,
        resize: false,
        buttonLoad: false,
        //screenWidth:document.documentElement.clientWidth
      };
    },
    mounted ()
    {
      /*const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }*/
    },
    watch: {
      /*screenWidth (val)
      {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer)
        {
          console.log();
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // 打印screenWidth变化的值
            console.log(that.screenWidth + " Resize")
            that.timer = false
          }, 400)
        }
      }*/
    },
    created ()
    {
      var reqStr = 'http://localhost:8090/flow/getAllFlowRecord';
      axios.get(reqStr).then(response =>
      {
        //请求接口成功
        if(response.status == 200)
        {
          this.allFlowRecords = response.data;
          this.listLength = response.data.length;
          for(let i = (this.currentPage - 1) * this.pageSize; i < this.listLength; i++)
          {
            if(i == this.pageSize + (this.currentPage - 1) * this.pageSize)
            {
              break;
            }
            this.onePage.push(
            {
              id: this.allFlowRecords[i].id,
              user_id: this.allFlowRecords[i].user_id,
              input_type: this.allFlowRecords[i].input_type,
              input_date: this.allFlowRecords[i].input_date,
              result_image_path: this.allFlowRecords[i].result_image_path,
              result_information: this.allFlowRecords[i].result_information,
              result_code: this.allFlowRecords[i].result_code,
              state: this.allFlowRecords[i].state
            });
          }
        }
      });
    }
  }
</script>

<style scoped>
  .tables
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 20px auto;
    width: 1200px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .pages
  {
    position: fixed;
    margin: auto;
    bottom: 40px;
    width: 100%;
  }
  .footer
  {
    position: fixed;
    margin: auto;
    bottom: 10px;
    width: 100%;
  }
</style>
