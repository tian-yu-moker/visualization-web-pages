<template>
  <div>
    <el-form class="container" label-position="left" label-width="70px" :model="curInfo" :ref="curInfo" :rules="rules">
      <h3 style="font-size: 25px" class="title">修改账户信息</h3>
      <el-form-item label="账号ID">
        <el-input :disabled="true" v-model="curInfo.id">
        </el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="curInfo.name" clearable>
          <el-button id="b1" slot="append" icon="el-icon-edit" :loading="isLoading.loading1" @click="submitName">修改</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="curInfo.password" placeholder="请输入新的密码" clearable>
          <el-button id="b2" slot="append" icon="el-icon-edit" :loading="isLoading.loading2" @click="submitPassword">修改</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="公司" prop="organization">
        <el-input v-model="curInfo.organization" clearable>
          <el-button id="b3" slot="append" icon="el-icon-edit" :loading="isLoading.loading3" @click="submitOrganization">修改</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="电话" prop="telephone">
        <el-input v-model="curInfo.telephone" clearable>
          <el-button id="b4" slot="append" icon="el-icon-edit" :loading="isLoading.loading4" @click="submitTelephone">修改</el-button>
        </el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="curInfo.email" clearable>
          <el-button id="b5" slot="append" icon="el-icon-edit" :loading="isLoading.loading5" @click="submitEmail">修改</el-button>
        </el-input>
      </el-form-item>

      <el-dialog
        title="提示"
        :visible.sync="showDialog1"
        width="30%"
        center>
        <span>修改成功</span>
        <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog1 = false">取 消</el-button>
      <el-button type="primary" @click="showDialog1 = false">确 定</el-button>
    </span>
      </el-dialog>

      <el-dialog
        title="提示"
        :visible.sync="showDialog2"
        width="30%"
        center>
        <span>修改出错，请重新尝试</span>
        <span slot="footer" class="dialog-footer">
      <el-button @click="showDialog2 = false">取 消</el-button>
      <el-button type="primary" @click="showDialog2 = false">确 定</el-button>
    </span>
      </el-dialog>
    </el-form>
    <div class="footer">
      ©2020 Jin Cai Technology 金财信息技术科技有限公司
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import axios from 'axios'
  import md5 from 'js-md5'

  export default {
    name: 'Manage',
    data() {
      return {
        curInfo: {
          id: this.$loginInfo.usersId,
          name: this.$loginInfo.usersName,
          password: '',
          organization: this.$loginInfo.organization,
          telephone: this.$loginInfo.telephone,
          email: this.$loginInfo.email
        },
        rules: {
          name: [
            {
              required: true,
              message: "请输入您要修改的姓名",
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
              message: "请输入新的公司或组织",
              trigger: "blur"
            }
          ],
          telephone: [
            {
              required: true,
              message: "请输入电话",
              trigger: "blur"
            }
          ],
          email: [
            {
              required: true,
              message: "请输入邮箱",
              trigger: "blur"
            }
          ]
        },
        isLoading: {
          loading1: false,
          loading2: false,
          loading3: false,
          loading4: false,
          loading5: false
        },
        showDialog1: false,
        showDialog2: false

      }
    },
    methods : {
      submitName()
      {
        //console.log(this.curInfo.name);
        const names = this.$refs[this.curInfo];
        var isEnter = false;
        var newName = '';
        names.validateField('name', valid=>
        {
          if(!valid)
          {
            isEnter = true;
            newName = this.curInfo.name;
            this.isLoading.loading1 = true;
          }
          else
          {
            isEnter = false;
          }
        });
        if(isEnter)
        {
          var key = 'user_name';
          var value = newName;
          var id = this.curInfo.id;
          var reqStr = 'http://localhost:8090/modifyInfo' + '?' +
            'id=' + id + "&" + 'key=' + key + '&' + 'value=' + value;
          console.log(reqStr);
          axios.get(reqStr).then(response =>
          {
            if(response.data.codes == '0')
            {
              this.showDialog1 = true;
              this.isLoading.loading1 = false;
              this.$loginInfo.usersName = newName;
              console.log(this.$loginInfo.usersName + " AAAAAAAAAA")
            }
            else
            {
              this.showDialog2 = true;
              this.isLoading.loading1 = false;
            }
          });
        }
      },
      submitPassword()
      {
        const link = this.$refs[this.curInfo];
        var isEnter = false;
        var newPassword = '';
        link.validateField('password', valid=>
        {
          if(!valid)
          {
            isEnter = true;
            newPassword = md5(this.curInfo.password);
            console.log(this.curInfo.name)
            this.isLoading.loading2 = true;
          }
          else
          {
            isEnter = false;
          }
        });
        if(isEnter)
        {
          var key = 'password';
          var value = newPassword;
          var id = this.curInfo.id;
          var reqStr = 'http://localhost:8090/modifyInfo' + '?' +
            'id=' + id + "&" + 'key=' + key + '&' + 'value=' + value;
          console.log(reqStr);
          axios.get(reqStr).then(response =>
          {
            if(response.data.codes == '0')
            {
              this.showDialog1 = true;
              this.isLoading.loading2 = false;
            }
            else
            {
              this.showDialog2 = true;
              this.isLoading.loading1 = false;
            }
          });
        }
      },
      submitOrganization()
      {
        const link = this.$refs[this.curInfo];
        var isEnter = false;
        var newOrganization = '';
        link.validateField('organization', valid=>
        {
          if(!valid)
          {
            isEnter = true;
            newOrganization = this.curInfo.organization;
            this.isLoading.loading3 = true;
          }
          else
          {
            isEnter = false;
          }
        });
        if(isEnter)
        {
          var key = 'organization';
          var value = newOrganization;
          var id = this.curInfo.id;
          var reqStr = 'http://localhost:8090/modifyInfo' + '?' +
            'id=' + id + "&" + 'key=' + key + '&' + 'value=' + value;
          console.log(reqStr);
          axios.get(reqStr).then(response =>
          {
            if(response.data.codes == '0')
            {
              this.showDialog1 = true;
              this.isLoading.loading3 = false;
              this.$loginInfo.organization = newOrganization;
            }
            else
            {
              this.showDialog2 = true;
              this.isLoading.loading3 = false;
            }
          });
        }
      },
      submitTelephone()
      {
        const link = this.$refs[this.curInfo];
        var isEnter = false;
        var newTele = '';
        link.validateField('telephone', valid=>
        {
          if(!valid)
          {
            isEnter = true;
            newTele = this.curInfo.telephone;
            this.isLoading.loading4 = true;
          }
          else
          {
            isEnter = false;
          }
        });
        if(isEnter)
        {
          var key = 'telephone_number';
          var value = newTele;
          var id = this.curInfo.id;
          var reqStr = 'http://localhost:8090/modifyInfo' + '?' +
            'id=' + id + "&" + 'key=' + key + '&' + 'value=' + value;
          console.log(reqStr);
          axios.get(reqStr).then(response =>
          {
            if(response.data.codes == '0')
            {
              this.showDialog1 = true;
              this.isLoading.loading4 = false;
              this.$loginInfo.telephone = newTele;
            }
            else
            {
              this.showDialog2 = true;
              this.isLoading.loading4 = false;
            }
          });
        }
      },
      submitEmail()
      {
        const link = this.$refs[this.curInfo];
        var isEnter = false;
        var newEmail = '';
        link.validateField('email', valid=>
        {
          if(!valid)
          {
            isEnter = true;
            newEmail = this.curInfo.email;
            this.isLoading.loading5 = true;
          }
          else
          {
            isEnter = false;
          }
        });
        if(isEnter)
        {
          var key = 'email';
          var value = newEmail;
          var id = this.curInfo.id;
          var reqStr = 'http://localhost:8090/modifyInfo' + '?' +
            'id=' + id + "&" + 'key=' + key + '&' + 'value=' + value;
          console.log(reqStr);
          axios.get(reqStr).then(response =>
          {
            if(response.data.codes == '0')
            {
              this.showDialog1 = true;
              this.isLoading.loading5 = false;
              this.$loginInfo.email = newEmail;
            }
            else
            {
              this.showDialog2 = true;
              this.isLoading.loading5 = false;
            }
          });
        }
      }
    },
    created ()
    {
      console.log(this.$loginInfo.usersId + " Manage Page")
    }
  }
</script>

<style scoped>
  .container
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 80px auto;
    width: 350px;
    height: 500px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0 0 25px #fff;
  }
  .title
  {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .footer
  {
    position: fixed;
    margin: auto;
    bottom: 10px;
    width: 100%;
  }
</style>
