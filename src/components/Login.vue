<template>
  <body id="poster">
  <div>
    <p></p>
    <b style="font-size:40px; color:#FFFFFF">
      票据查验系统
    </b>
    <p></p>
    <b style="font-size: 19px; color: #FFFFFF">
      INVOICE     CHECK     SYSTEM
    </b>
  </div>
  <el-form class="login-container" label-position="left" label-width="0px" :model="loginForm" :ref="loginForm" :rules="rules">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username">
      <el-input
        type="text"
        v-model="loginForm.username"
        auto-complete="off"
        placeholder="请输入用户ID"
        prefix-icon="el-icon-user-solid"
        clearable
        autofocus></el-input>
    </el-form-item>
    <el-form-item prop = "password">
      <el-input
        type="password"
        v-model="loginForm.password"
        auto-complete="off"
        prefix-icon="el-icon-key"
        placeholder="请输入密码"
        clearable></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        :icon="butIcon"
        style="width: 100%;background: #808080;border: none"
        v-on:click="onLogin" :disabled="isDisable">登录</el-button>
    </el-form-item>
  </el-form>
  <el-dialog
    title="提示"
    :visible.sync="enterReminder"
    width="30%"
    center>
    <span>请输入正确的用户ID且密码不为空</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="enterReminder = false">取 消</el-button>
      <el-button type="primary" @click="enterReminder = false">确 定</el-button>
    </span>
  </el-dialog>

  <el-dialog
  title="提示"
  :visible.sync="wrongPassword"
  width="30%"
  center>
  <span>帐号或密码错误，请检查您的账号密码</span>
  <span slot="footer" class="dialog-footer">
      <el-button @click="wrongPassword = false">取 消</el-button>
      <el-button type="primary" @click="wrongPassword = false">确 定</el-button>
    </span>
  </el-dialog>

  </body>
</template>


<script>
  import Vue from 'vue'
  import axios from 'axios'
  import md5 from 'js-md5'
  //测试用
  var i = 1;
  function isInteger (val)
  {
    if (isNaN(val) || Math.floor(val) != val)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  export default {
    name: 'Login',
    data() {
      var checkId = (rule, value, callback) =>
      {
        //console.log(isInteger(value))
        if(!value)
        {
          return callback(new Error("请输入您的ID"));
        }
        else if(value.length != 5)
        {
          return callback(new Error("您的ID必须是5位"));
        }
        else if(!isInteger(value))
        {
          return callback(new Error("您的ID必须是数字"));
        }
        else
        {
         return callback();
        }
      };
      var checkPassword = (rule, value, callback) =>
      {
        i++;
        console.log("AAAAAAA " + i);
        if(!value)
        {
          return callback(new Error("密码能不为空，请输入密码"));
        }
        else
        {
          return callback();
        }
      };

      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username:[
              {
                validator: checkId,
                required: true
              }
            ],
          password:[
            {
              validator: checkPassword,
              required: true
            }
          ]
        },
        responseResult: [],
        responseLogin: {
          usersId: '',
          usersName: '',
          isAdmin: false,
          organization: '',
          telephone: '',
          email: '',
          usage_times: '',
          start_flag: true,
          start_date:'',
          end_date: ''
        },
        enterReminder: false,
        wrongPassword: false,
        isDisable: false,
        butIcon: 'el-icon-thumb'
      }
    },
    methods: {
      login() {
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {
          })
      },
      //用户登录，调用spring boot接口，查看用户名或密码是否正确
      onLogin()
      {
        //console.log(md5(this.loginForm.password) + " AAAAA")
        console.log(this.loginForm.username)
        console.log(this.loginForm.password)
        this.checkLogin(this.loginForm)
      },
      checkLogin(loginForm)
      {
        var isQuery = false
        this.$refs[loginForm].validate(valid =>
        {
          if(valid)
          {
            console.log("Success")
            isQuery = true
            this.butIcon = 'el-icon-loading'
            this.isDisable = true
          }
          else{
            console.log("Please enter username and password")
            this.enterReminder = true
            isQuery = false
          }
        })
        if(isQuery)
        {
          //var axios = Vue.prototype.$axios
          let name = this.loginForm.username
          let password =  md5(this.loginForm.password)
          let reqStr = 'http://localhost:8090/login/check' + '?' +
            'userId=' + name + '&' + 'password=' + password
          //reqStr = 'http://localhost:8090/test'
          //console.log(reqStr + " AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
          axios.get(reqStr).then(response =>
          {
            if(response.data.codes == '0')
            {
              this.responseLogin = response.data.myContent
              this.responseLogin.usersId = response.data.myContent.userId
              this.responseLogin.usersName = response.data.myContent.userName
              this.responseLogin.isAdmin = response.data.myContent.is_admin
              this.responseLogin.organization = response.data.myContent.organization
              this.responseLogin.telephone = response.data.myContent.telephone
              this.responseLogin.email = response.data.myContent.email
              this.responseLogin.start_flag = response.data.myContent.start_flag
              this.responseLogin.usage_times = response.data.myContent.free_times_perday
              this.responseLogin.start_date = response.data.myContent.start_date
              this.responseLogin.end_date = response.data.myContent.end_date
              //定义全局变量，以便在别的页面调用
              Vue.prototype.$loginInfo = this.responseLogin;
              this.butIcon = 'el-icon-thumb'
              this.$router.push(
                {
                  path: '/query'
                }
              )
            }
            else
            {
              this.wrongPassword = true
              this.loginForm.password='';
              this.butIcon = 'el-icon-thumb'
            }
            this.isDisable = false
          })
        }
      }
    }
  }
</script>

<style>

  #poster {
    background: url("../assets/43.jpg") no-repeat;

    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    /*background-color: #808080;*/

    position: absolute;
  }

  body{
    margin: 0px;
    padding: 0;
  }

  .login-container
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login_big{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #FFFFFF;
  }

</style>
