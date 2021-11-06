<template>
<body>
  <div>
    <div v-if="isAdmin">
      <div class="table">
        <!--表格信息，统计所有用户信息-->
        <el-table
          :data="onePage"
          height="500px"
          border
          stripe
          highlight-current-row
          fit>
          <el-table-column
            label="用户ID"
            prop="user_id"
            width="180"
            align="center"
            :resizable="resize">
          </el-table-column>
          <el-table-column
            label="用户名"
            width="180"
            prop="user_name"
            align="center"
            :resizable="resize">
          </el-table-column>
          <el-table-column
            label="公司"
            width="180"
            prop="organization"
            align="center"
            :resizable="resize">
          </el-table-column>

          <el-table-column
            label="每日免费次数"
            width="180"
            prop="free_times_perday"
            align="center"
            :resizable="resize">
          </el-table-column>

          <el-table-column
            label="是否激活"
            width="80"
            align="center"
            :resizable="resize" fit>
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium" v-if="!scope.row.start_flag" type="danger">
                 否
                </el-tag>
                <el-tag size="medium" v-if="scope.row.start_flag" type="success">
                  是
                </el-tag>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            label="开始时间"
            width="180"
            prop="start_date"
            align="center"
            :resizable="resize">
          </el-table-column>

          <el-table-column
            label="结束时间"
            width="180"
            prop="end_date"
            align="center"
            :resizable="resize">
          </el-table-column>

          <el-table-column
            label="是否管理员"
            width="100"
            align="center"
            :resizable="resize">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>电话: {{ scope.row.telephone_number}}</p>
                <p>邮箱: {{ scope.row.email}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium" v-if="scope.row.is_admin" type="success">是</el-tag>
                  <el-tag size="medium" v-if="!scope.row.is_admin" type="danger">否</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            :resizable="resize">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <p></p>
        <el-row>
          <el-button
            type="success"
            round
            icon="el-icon-refresh"
            size="medium"
            v-on:click="onRefresh">
            刷新表单</el-button>
          <el-button
            type="success"
            round icon="el-icon-circle-plus"
            size="medium"
            v-on:click="addAccounts">
            添加用户
          </el-button>
        </el-row>
      </div>
      <div class="pages">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listLength">
        </el-pagination>
      </div>
    </div>
    <div v-if="!isAdmin">
      <el-alert
        title="权限错误"
        type="error"
        :closable="false"
        center
        description="很抱歉，本功能只面向管理员开放，您还不是管理员"
        effect="dark">
      </el-alert>
      <div class="picture">
        <el-image
          :src="require('../assets/404.png')"
          lazy
          draggable="false">
        </el-image>
      </div>
    </div>
  </div>
  <!--添加新用户子页面-->
  <el-dialog
    :visible.sync="dialogFormVisible"
    center
    fullscreen>
    <div slot="title" class="dialog-title">
      <i class="el-icon-circle-plus"></i>
      <span>添加新用户</span>
    </div>
    <div class="dialog">
      <el-form :model="newAccountForm" :ref="newAccountForm" :rules="rules">
        <el-form-item label="用户名" label-width="70px" prop="name">
          <el-input placeholder="请输入用户名" clearable v-model="newAccountForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="70px" prop="password">
          <el-input show-password clearable placeholder="请输入密码" v-model="newAccountForm.password">
          </el-input>
        </el-form-item>
        <el-form-item label="管理员" label-width="70px">
          <el-switch
            v-model="newAccountForm.isAdmin"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item label="公司" label-width="70px" prop="organization">
          <el-input clearable placeholder="请输入公司名" v-model="newAccountForm.organization">
          </el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="70px" prop="telephone">
          <el-input placeholder="请输入电话号码" clearable v-model="newAccountForm.telephone">
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="70px" prop="email">
          <el-input placeholder="请输入邮箱" clearable v-model="newAccountForm.email">
          </el-input>
        </el-form-item>
        <el-form-item label="开始使用" label-width="80px">
          <el-switch
            v-model="newAccountForm.start_flag"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>

        <el-form-item label="起止日期" label-width="70px">
          <el-col :span="11">
            <el-form-item prop="start_date">
              <el-date-picker type="date" placeholder="开始日期" style="width: 110%;" v-model="newAccountForm.start_date" value-format="yyyyMMdd"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">&nbsp&nbsp&nbsp—</el-col>
          <el-col :span="11">
            <el-form-item prop="end_date">
              <el-date-picker type="date" placeholder="结束日期" style="width: 110%;" v-model="newAccountForm.end_date" value-format="yyyyMMdd"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="info" v-on:click="submitNewAccounts">创建</el-button>
    </div>
  </el-dialog>
  <!--修改用户信息子页面-->
  <el-dialog
    :visible.sync="modifyInfo"
    center
    fullscreen>
    <div slot="title" class="dialog-title">
      <i class="el-icon-edit-outline"></i>
      <span>修改用户信息</span>
    </div>
    <div class="dialog_modify">
      <el-form :model="modify" :ref="modify" :rules="modifyRules">
        <!--id，不可修改-->
        <el-form-item label="用户ID" label-width="70px">
          <el-input :placeholder="modify.id" disabled v-model="modify.id">
        </el-input>
        </el-form-item>
        <!--用户名，可修改-->
        <el-form-item label="用户名" label-width="70px" prop="name">
          <el-input clearable v-model="modify.name">
            <el-button id="b1" slot="append" icon="el-icon-edit" v-on:click="modifyName">修改</el-button>
          </el-input>
        </el-form-item>
        <!--是否为管理员，可修改-->
        <el-form-item label="管理员" label-width="70px">
          <el-switch
            v-model="modify.admin"
            active-color="#13ce66"
            inactive-color="#ff4949" @change="modifyAdmin($event)">
          </el-switch>
        </el-form-item>
        <!--公司名称，可修改-->
        <el-form-item label="公司" label-width="70px" prop="organization">
          <el-input clearable placeholder="请输入公司名" v-model="modify.organization">
            <el-button id="b2" slot="append" icon="el-icon-edit" v-on:click="modifyOrganization">修改</el-button>
          </el-input>
        </el-form-item>
        <!--电话号码，可修改-->
        <el-form-item label="电话" label-width="70px" prop="telephone">
          <el-input placeholder="请输入电话号码" clearable v-model="modify.telephone">
            <el-button id="b3" slot="append" icon="el-icon-edit" v-on:click="modifyTelephone">修改</el-button>
          </el-input>
        </el-form-item>
        <!--电子邮箱，可修改-->
        <el-form-item label="邮箱" label-width="70px" prop="email">
          <el-input placeholder="请输入邮箱" clearable v-model="modify.email">
            <el-button id="b4" slot="append" icon="el-icon-edit" v-on:click="modifyEmail">修改</el-button>
          </el-input>
        </el-form-item>
        <!--开始使用，可修改-->
        <el-form-item label="开始使用" label-width="80px" prop="isStart">
          <el-switch
            v-model="modify.startFlag"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="modifyStartFlag($event)">
          </el-switch>
        </el-form-item>
        <!--开始日期，可修改-->
        <el-form-item label="起止日期" label-width="80px" prop="dateRange">
          <el-date-picker
          v-model="modify.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width: 100%"
          value-format="yyyyMMdd"
          @change="modifyTwoDates">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="modifyInfo = false">取 消</el-button>
      <el-button type="info" v-on:click="modifyAccounts">确定</el-button>
    </div>
  </el-dialog>
  <div class="footer">
    ©2020 Jin Cai Technology 金财信息技术科技有限公司
  </div>
</body>
</template>

<script>
  import axios from 'axios'
  import md5 from 'js-md5'

  export default {
    name: 'Administer',
    data()
    {
      return {
        myId: 0,
        isAdmin: false,
        accounts: [],
        onePage: [],
        resize: false,
        listLength: 0,
        currentPage: 1,
        pageSize: 10,
        dialogFormVisible: false,
        dialogWidth: '',
        newAccountForm: {
          name: '',
          password: '',
          isAdmin: false,
          organization: '',
          telephone: '',
          email: '',
          start_flag: false,
          start_date: '',
          end_date: ''
        },
        modifyInfo: false,
        modify: {
          id: '',
          name: '',
          organization: '',
          admin: false,
          telephone: '',
          email: '',
          startFlag: '',
          dateRange: ''
        },
        rules: {
          name: [
            {
              required: true,
              message: "请输入您姓名",
              trigger: "blur"
            }
          ],
          password: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ],
          organization: [
            {
              required: true,
              message: "请输入公司，若无公司则输入 ‘无’",
              trigger: "blur"
            }
          ],
          telephone: [
            {
              required: true,
              message: "请输入电话号码",
              trigger: "blur"
            }
          ],
          email: [
            {
              required: true,
              message: "请输入邮箱",
              trigger: "blur"
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          isStart: [
            {
              required: true,
              message: "请选择",
              trigger: "blur"
            }
          ],
          isAdmin: [
            {
              required: true,
              message: "请选择",
              trigger: "blur"
            }
          ],
          start_date: [
            {
              required: true,
              message: "请输入开始日期",
              trigger: "blur"
            }
          ],
          end_date: [
            {
              required: true,
              message: "请输入结束日期",
              trigger: "blur"
            }
          ]
        },
        modifyRules: {
          name: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            }
          ],
          organization: [
            {
              required: true,
              message: "请输入公司",
              trigger: "blur"
            }
          ],
          telephone: [
            {
              required: true,
              message: "请输入电话号码",
              trigger: "blur"
            }
          ],
          email: [
            {
              required: true,
              message: "请输入邮箱",
              trigger: "blur"
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          dateRange: [
            {
              required: true,
              message: "请输入开始日期",
              trigger: "blur"
            }
          ]
        }
      }
    },
    created ()
    {
      this.isAdmin = this.$loginInfo.isAdmin;
      this.myId = this.$loginInfo.usersId;
      if(this.isAdmin)
      {
        let reqStr = 'http://localhost:8090/admin/getAccounts';
        axios.get(reqStr).then(response =>
        {
          if(response.status == 200)
          {
            this.accounts = response.data;
            this.listLength = this.accounts.length;
            for(let i = (this.currentPage - 1) * this.pageSize; i < this.listLength; i++)
            {
              if(i == this.pageSize + (this.currentPage - 1) * this.pageSize)
              {
                break;
              }
              this.onePage.push(
                {
                  user_id: this.accounts[i].user_id,
                  user_name: this.accounts[i].user_name,
                  organization: this.accounts[i].organization,
                  free_times_perday: this.accounts[i].free_times_perday,
                  start_flag: this.accounts[i].start_flag,
                  start_date: this.accounts[i].start_date,
                  end_date: this.accounts[i].end_date,
                  is_admin: this.accounts[i].is_admin,
                  telephone_number: this.accounts[i].telephone_number,
                  email: this.accounts[i].email
                });
            }
          }
          else
          {
            this.$message({
              type: 'error',
              message: '请求失败'
            });
          }
        });
      }
    },
    mounted() {

    },
    methods: {
      handleEdit(index, row)
      {
        this.modifyInfo = true;
        this.modify.id = row.user_id;
        this.modify.name = row.user_name;
        this.modify.admin = row.is_admin;
        this.modify.organization = row.organization;
        this.modify.telephone = row.telephone_number;
        this.modify.email = row.email;
        this.modify.startFlag = row.start_flag;
        this.modify.dateRange = [new Date(row.start_date), new Date(row.end_date)];
        this.modify.startDate = row.start_date;
        this.modify.endDate = row.end_date;
        console.log(index, row);
      },
      handleDelete(index, row)
      {
        let targetId = row.user_id;
        let isThis = false
        if(targetId == this.myId)
        {
          isThis = true;
        }
        if(!isThis)
        {
          this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() =>
          {
            let reqStr = 'http://localhost:8090/admin/deleteAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + targetId;
            console.log(reqStr);
            axios.get(reqStr).then(response =>
            {
              if(response.status == 200 && response.data.codes == '0')
              {
                this.$message(
                  {
                    type: 'success',
                    message: '删除成功!'
                  });
              }
              else
              {
                this.$message(
                  {
                    type: 'error',
                    message: '删除失败!'
                  });
              }
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
        else
        {
          this.$alert('这是您自己的账户，无法删除', '无法删除', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'error',
                message: '删除失败'
              });
            }
          });
        }
      },
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
      updatePagesContents()
      {
        this.onePage = [];
        this.isAdmin = this.$loginInfo.isAdmin;
        this.myId = this.$loginInfo.usersId;
        if(this.isAdmin)
        {
          let reqStr = 'http://localhost:8090/admin/getAccounts';
          axios.get(reqStr).then(response =>
          {
            if(response.status == 200)
            {
              this.accounts = response.data;
              this.listLength = this.accounts.length;
              for(let i = (this.currentPage - 1) * this.pageSize; i < this.listLength; i++)
              {
                if(i == this.pageSize + (this.currentPage - 1) * this.pageSize)
                {
                  break;
                }
                this.onePage.push(
                  {
                    user_id: this.accounts[i].user_id,
                    user_name: this.accounts[i].user_name,
                    organization: this.accounts[i].organization,
                    free_times_perday: this.accounts[i].free_times_perday,
                    start_flag: this.accounts[i].start_flag,
                    start_date: this.accounts[i].start_date,
                    end_date: this.accounts[i].end_date,
                    is_admin: this.accounts[i].is_admin,
                    telephone_number: this.accounts[i].telephone_number,
                    email: this.accounts[i].email
                  });
              }
            }
          });
        }
      },
      onRefresh()
      {
        this.onePage = [];
        this.accounts = [];
        this.isAdmin = this.$loginInfo.isAdmin;
        this.myId = this.$loginInfo.usersId;
        if(this.isAdmin)
        {
          let reqStr = 'http://localhost:8090/admin/getAccounts';
          axios.get(reqStr).then(response =>
          {
            if(response.status == 200)
            {
              this.accounts = response.data;
              this.listLength = this.accounts.length;
              for(let i = (this.currentPage - 1) * this.pageSize; i < this.listLength; i++)
              {
                if(i == this.pageSize + (this.currentPage - 1) * this.pageSize)
                {
                  break;
                }
                this.onePage.push(
                  {
                    user_id: this.accounts[i].user_id,
                    user_name: this.accounts[i].user_name,
                    organization: this.accounts[i].organization,
                    free_times_perday: this.accounts[i].free_times_perday,
                    start_flag: this.accounts[i].start_flag,
                    start_date: this.accounts[i].start_date,
                    end_date: this.accounts[i].end_date,
                    is_admin: this.accounts[i].is_admin,
                    telephone_number: this.accounts[i].telephone_number,
                    email: this.accounts[i].email
                  });
              }
            }
            else
            {
              this.$message(
                {
                  type: 'error',
                  message: '刷新失败'
                });
            }
          });
        }
        this.$message(
          {
            type: 'success',
            message: '刷新成功'
          });
      },
      addAccounts()
      {
        this.dialogFormVisible = true
      },
      submitNewAccounts()
      {
        const link = this.$refs[this.newAccountForm];
        link.validate(value =>
        {
          if(value)
          {
            let newPassword = md5(this.newAccountForm.password);
            let reqStr = 'http://localhost:8090/admin/addAccount' + '?' + 'userName=' + this.newAccountForm.name
            + '&isAdmin=' + this.newAccountForm.isAdmin + '&password=' + newPassword
            + '&organization=' + this.newAccountForm.organization + '&telephone=' + this.newAccountForm.telephone
            + '&email=' + this.newAccountForm.email + '&startFlag=' + this.newAccountForm.start_flag
            + '&startDate=' + this.newAccountForm.start_date + '&endDate=' + this.newAccountForm.end_date;
            axios.get(reqStr).then(response =>
            {
              if(response.status == 200 && response.data.codes == '0')
              {
                let id = response.data.comments.split(":")[1];
                this.$message(
                  {
                    type: 'success',
                    message: '添加id为' + id + '的新用户成功'
                  });
              }
            });
            this.dialogFormVisible = false;
          }
        });
      },
      modifyAccounts()
      {
        this.modifyInfo = false;
      },
      modifyName()
      {
        const link = this.$refs[this.modify];
        link.validateField('name', valid =>
        {
          if(!valid)
          {
            let newName = this.modify.name;
            let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
              '&field=user_name' + '&value=' + newName;
            axios.get(reqStr).then(response =>
            {
              if(response.status == 200 && response.data.codes == '0')
              {
                this.$message(
                  {
                    type: 'success',
                    message: '成功将id为' + this.modify.id + '的用户名修改为' + newName
                  });
              }
              else
              {
                this.$message(
                  {
                    type: 'error',
                    message: '出错了，修改失败'
                  });
              }
            });
          }
        });
      },
      modifyAdmin(value)
      {
        let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
          'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
          '&field=is_admin' + '&value=' + value;
        axios.get(reqStr).then(response =>
        {
          if(response.status == 200 && response.data.codes == '0')
          {
            this.$message(
              {
                type: 'success',
                message: '成功修改管理员权限'
              });
          }
          else
          {
            this.$message(
              {
                type: 'error',
                message: '出错了，修改失败'
              });
          }
        });
      },
      modifyOrganization()
      {
        const link = this.$refs[this.modify];
        link.validateField('organization', valid =>
        {
          if(!valid)
          {
            let newOrganization = this.modify.organization
            let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
              '&field=organization' + '&value=' + newOrganization;
            axios.get(reqStr).then(response =>
            {
              if (response.status == 200 && response.data.codes == '0')
              {
                this.$message(
                  {
                    type: 'success',
                    message: '成功将id为' + this.modify.id + '的所属公司修改为' + newOrganization
                  });
              } else {
                this.$message(
                  {
                    type: 'error',
                    message: '出错了，修改失败'
                  });
              }
            });
          }
        });
      },
      modifyTelephone()
      {
        const link = this.$refs[this.modify];
        link.validateField('telephone', valid =>
        {
          if(!valid)
          {
            let newTelephone = this.modify.telephone
            let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
              '&field=telephone_number' + '&value=' + newTelephone;
            axios.get(reqStr).then(response =>
            {
              if (response.status == 200 && response.data.codes == '0')
              {
                this.$message(
                  {
                    type: 'success',
                    message: '成功将id为' + this.modify.id + '的电话号码修改为' + newTelephone
                  });
              } else {
                this.$message(
                  {
                    type: 'error',
                    message: '出错了，修改失败'
                  });
              }
            });
          }
        });
      },
      modifyEmail()
      {
        const link = this.$refs[this.modify];
        link.validateField('email', valid =>
        {
          if(!valid)
          {
            let newEmail = this.modify.email
            let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
              '&field=email' + '&value=' + newEmail;
            axios.get(reqStr).then(response =>
            {
              if (response.status == 200 && response.data.codes == '0')
              {
                this.$message(
                  {
                    type: 'success',
                    message: '成功将id为' + this.modify.id + '的电子邮箱修改为' + newEmail
                  });
              } else {
                this.$message(
                  {
                    type: 'error',
                    message: '出错了，修改失败'
                  });
              }
            });
          }
        });
      },
      modifyStartFlag(value)
      {
        let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
          'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
          '&field=start_flag' + '&value=' + value;
        axios.get(reqStr).then(response =>
        {
          if(response.status == 200 && response.data.codes == '0')
          {
            this.$message(
              {
                type: 'success',
                message: '成功开始标记'
              });
          }
          else
          {
            this.$message(
              {
                type: 'error',
                message: '出错了，修改失败'
              });
          }
        });
      },
      modifyTwoDates()
      {
        const link = this.$refs[this.modify];
        console.log("日期")
        link.validateField('dateRange', valid =>
        {
          if(!valid)
          {
            let start_date =  this.modify.dateRange[0];
            console.log(start_date)
            let reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
              '&field=start_date' + '&value=' + start_date;
            axios.get(reqStr).then(response =>
            {
              if(response.status == 200 && response.data.codes == '0')
              {
                this.$message.success('开始日期更新成功');
              }
              else
              {
                this.$message.error('开始日期更新失败');
              }
            });
            let end_date = this.modify.dateRange[1];
            reqStr = 'http://localhost:8090/admin/updateAccount' + '?' +
              'isAdmin=' + this.isAdmin + '&userId=' + this.myId +
              '&field=end_date' + '&value=' + end_date;
            axios.get(reqStr).then(response =>
            {
              if(response.status == 200 && response.data.codes == '0')
              {
                this.$message.success('结束日期更新成功');
              }
              else
              {
                this.$message.error('结束日期更新失败');
              }
            });
          }
        });
      }
    }
  }
</script>

<style scoped>
  .picture
  {
    position: fixed;
    margin: auto;
    top: 200px;
    width: 100%;
  }
  .table
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 20px auto;
    width: 1500px;
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
  .dialog
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 0px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
  }
  .dialog_modify
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 0px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
  }
  .dialog-title
  {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    overflow: hidden;
  }
  .footer
  {
    position: fixed;
    margin: auto;
    bottom: 10px;
    width: 100%;
  }
</style>
