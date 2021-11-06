<template>
  <div>
    <div class="query">
      <el-tabs
        type="card"
        v-model="activeName"
        :stretch="center"
        @tab-click="handleClick">
        <!--手动输入页面相关逻辑-->
        <el-tab-pane key="handPane" label="手动输入" name="first" :disabled="tabsController">
          <el-form key="hand" label-position="right" label-width="100px" :model="invoiceHand" :ref="invoiceHand" :rules="handRules">
            <el-form-item label="发票代码" prop="codes">
              <el-input
                v-if="!firstIn"
                id="codesFirst"
                v-model="invoiceHand.codes"
                v-focus
                v-refocus
                clearable
                maxlength="12"
                minlength="12"
                show-word-limit
                prefix-icon="el-icon-price-tag"
                @blur="cancelFocus"
                placeholder="请输入12位发票代码"></el-input>
              <el-input
                v-if="firstIn"
                id="codesSecond"
                v-model="invoiceHand.codes"
                v-focus
                clearable
                maxlength="12"
                minlength="12"
                show-word-limit
                prefix-icon="el-icon-price-tag"
                placeholder="请输入12位发票代码"></el-input>
            </el-form-item>
            <el-form-item label="发票号码" prop="numbers">
              <el-input
                v-model="invoiceHand.numbers"
                clearable
                prefix-icon="el-icon-postcard"
                maxlength="8"
                minlength="8"
                show-word-limit
                placeholder="请输入8位发票号码"></el-input>
            </el-form-item>
            <el-form-item label="开票日期" prop="dates">
              <el-date-picker
                v-model="invoiceHand.dates"
                type="date"
                placeholder="选择开票日期"
                style="width:100%"
                clearable
                foramt="yyyyMMdd"
                value-format="yyyyMMdd">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="效验码后6位" prop="checkCodes">
              <el-input
                v-model="invoiceHand.checkCodes"
                clearable
                maxlength="6"
                minlength="6"
                show-word-limit
                prefix-icon="el-icon-document-checked"
                placeholder="请输入校验码后6位"></el-input>
            </el-form-item>
          </el-form>
          <el-row>
            <p></p>
            <el-button
              type="primary"
              round
              v-on:click="listener"
              icon="el-icon-view"
              :loading="isLoading1">查验发票</el-button>
            <el-button
              type="success"
              round
              :loading="firstQuery"
              icon="el-icon-view"
              @click="showResult = true">查看结果</el-button>
          </el-row>
        </el-tab-pane>
        <!--扫码枪输入页面相关逻辑-->
        <el-tab-pane key="scannerPane" label="扫码枪" name="second" :disabled="tabsController">

          <el-form key="scanner" label-position="right" label-width="100px" :model="scanner" :ref="scanner" :rules="scannerRules">
            <h5 align="right">
              <el-tooltip class="item" effect="dark" content="查看帮助" placement="top">
                <el-link type="primary" icon="el-icon-question" @click="drawerHelp1=true">请将鼠标焦点移动至”发票代码“输入框, 并转化为英文输入法</el-link>
              </el-tooltip>
            </h5>
            <el-form-item label="发票代码" prop="code">
              <el-input
                v-model="scanner.code"
                placeholder="发票代码"
                clearable
                v-focus
                v-refocus
                prefix-icon="el-icon-price-tag"
                @blur="focusReminder"
                @change="scannerInputting"
                @clear="clearScanner">
              </el-input>
            </el-form-item>
            <el-form-item label="发票号码" prop="number">
              <el-input
                v-model="scanner.number"
                clearable
                placeholder="发票号码"
                prefix-icon="el-icon-postcard"
                @clear="clearScanner"></el-input>
            </el-form-item>
            <el-form-item label="开票日期" prop="dates">
              <el-input
                v-model="scanner.dates"
                placeholder="开票日期yyyyMMdd形式"
                clearable
                prefix-icon="el-icon-date"
                @clear="clearScanner">
              </el-input>
            </el-form-item>
            <el-form-item label="效验码后6位" prop="checkCode">
              <el-input
                v-model="scanner.checkCode"
                placeholder="校验码后6位"
                clearable
                prefix-icon="el-icon-document-checked"
                @clear="clearScanner"></el-input>
            </el-form-item>
          </el-form>
          <el-row>
            <p></p>
            <el-button
              type="primary"
              round
              v-on:click="scannerListener"
              :loading="isLoading2"
              icon="el-icon-search" >查验发票</el-button>
            <el-button
              type="success"
              round
              :loading="secondQuery"
              @click="showResult = true"
              icon="el-icon-view">查看结果</el-button>
          </el-row>
        </el-tab-pane>
        <!--本地图片上传页面相关逻辑-->
        <el-tab-pane label="本地图片上传" name="third" :disabled="tabsController">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="http://localhost:8090/query/picture"
            :data="uploadPara"
            name="userHeaderPicture"
            :file-list="pictures"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccess"
            :on-exceed="handleExceed"
            :on-change="handleChange"
            multiple
            :limit="3"
            list-type="picture"
            :auto-upload="false"
            accept=".png, .jpg">
            <el-button
              slot="trigger"
              size="medium"
              type="primary"
              @click="pictures=[], picNumber=0"
              round
              icon="el-icon-folder-add"
              :loading="isLoading3">选取图片</el-button>
            <el-button
              style="margin-left: 10px;"
              size="medium" type="success"
              @click="submitUpload"
              round
              icon="el-icon-upload"
              :loading="isLoading3">上传到服务器</el-button>
            <el-button
              style="margin-left: 10px;"
              size="medium"
              type="info" @click="pictures=[], picNumber=0"
              round
              icon="el-icon-folder-delete"
              :loading="isLoading3">清空图片列表</el-button>
            <h5 align="center">
              <el-tooltip class="item" effect="dark" content="查看帮助" placement="top">
                <el-link type="primary" icon="el-icon-question" @click="drawerHelp2=true">只能上传jpg/png文件, 且不超过500kb, 最多一次性上传3长图片</el-link>
              </el-tooltip>
            </h5>
            <el-button style="margin-left: 10px;" size="medium" type="primary" round :loading="thirdQuery" @click="showResult = true">查看结果</el-button>
            <el-button style="margin-left: 10px;" size="medium" type="primary" round v-on:click="testing">测试</el-button>
          </el-upload>
        </el-tab-pane>
      </el-tabs>

      <!--扫码枪使用帮助-->
      <el-drawer
        id="helpScanner"
        :visible.sync="drawerHelp1"
        :with-header="false">
        <h3>扫码枪功能使用帮助</h3>
        <h4 align="left">&nbsp&nbsp1. 扫码枪设置</h4>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(1) 将扫码枪USB接口类型设置为USB键盘
        </p>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(2) 扫码枪添加回车
        </p>
        <p></p>
        <h4 align="left">&nbsp&nbsp2. 工作流程</h4>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(1) 首先将鼠标焦点移至此输入框内, 并将输入法设置为英文
        </p>
        <el-image
          :src="require('../assets/help_1.png')"
          lazy
          draggable="false">
        </el-image>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(2) 使用扫码枪扫描发票左上角的二维码
        </p>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(3) 扫描结果自动出现在以下输入框中
        </p>
        <el-image
          :src="require('../assets/help_2.png')"
          lazy
          draggable="false">
        </el-image>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 分别为:
        </p>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 12位发票代码，8位发票号码，开票日期，发票校验码后6位
        </p>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(4) 点击查验按钮进行查验
        </p>
        <p align="left">
          &nbsp&nbsp&nbsp&nbsp&nbsp(5) 查验完毕后，点击‘结果按钮查看结果’
        </p>
      </el-drawer>
      <!--本地图片上传使用帮助-->
      <el-drawer
        id="localImageScanner"
        :visible.sync="drawerHelp2"
        :with-header="false">
        <h3>本地图片上传功能使用帮助</h3>
        <h4 align="left">&nbsp&nbsp1. 点击左侧“本地上传”按钮</h4>
        <p></p>
        <el-image
          :src="require('../assets/help_img_1.png')"
          lazy
          draggable="false">
        </el-image>
        <h4 align="left">&nbsp&nbsp2. 选择要上传的图片，最多三张</h4>
        <el-image
          :src="require('../assets/help_img_2.png')"
          lazy
          draggable="false">
        </el-image>
        <h4 align="left">&nbsp&nbsp3. 点击上传按钮</h4>
        <el-image
          :src="require('../assets/help_img_3.png')"
          lazy
          draggable="false">
        </el-image>
      </el-drawer>
      <!--查看查询结果-->

      <el-dialog
        :visible.sync="showResult"
        center
        fullscreen>
        <h1 v-html="msg_result" align="center"></h1>
        <div class="dialog">
          <el-image
            v-if="showPicture"
            :src="paths"
            lazy
            :preview-src-list="imgLists">
          </el-image>
        </div>
        <div slot="footer" class="dialog-footer">
          <p>
            点击图片查看大图
          </p>
          <el-button type="primary" @click="showResult = false">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="footer">
      ©2020 Jin Cai Technology 金财信息技术科技有限公司
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default
  {
    name: 'Query',
    data() {
      return {
        //本地图片上传列表
        pictures: [],
        center: true,
        //控制tab是否可用
        tabsController: false,
        //手动输入表单字段
        invoiceHand: {
          codes: '',
          numbers: '',
          dates: '',
          checkCodes: ''
        },
        //扫码枪输入表单字段
        scanner: {
          code: '',
          number: '',
          dates: '',
          checkCode: ''
        },
        //手动输入表单非空校验规则
        handRules: {
          codes: [
            {
              required: true,
              message: "请输入发票代码",
              trigger: "blur"
            }
          ],
          numbers: [
            {
              required: true,
              message: "请输入发票号码",
              trigger: "blur"
            }
          ],
          dates: [
            {
              required: true,
              message: "请输入开票日期",
              trigger: "blur"
            }
          ],
          checkCodes: [
            {
              required: true,
              message: "请输入校验码后6位",
              trigger: "blur"
            }
          ]
        },
        //扫码枪输入表单非空校验规则
        scannerRules: {
          code: [
            {
              required: true,
              message: "请输入发票代码",
              trigger: "blur"
            }
          ],
          number: [
            {
              required: true,
              message: "请输入发票号码",
              trigger: "blur"
            }
          ],
          dates: [
            {
              required: true,
              message: "请输入开票日期",
              trigger: "blur"
            }
          ],
          checkCode: [
            {
              required: true,
              message: "请输入校验码后6位",
              trigger: "blur"
            }
          ]
        },
        //此变量控制手动输入界面的焦点
        firstIn: false,
        //以下三个变量控制三个页面的查看结果按钮是否禁用
        firstQuery: true,
        secondQuery: true,
        thirdQuery: true,
        isLoading1: false,
        isLoading2: false,
        isLoading3: false,
        //页面名
        activeName: 'first',
        //分别控制扫码界面和本地图片界面的帮助
        drawerHelp1: false,
        drawerHelp2: false,
        //本地图片界面按钮loading状态
        picIsLoading: true,
        //上传图片的数量
        picNumber: 0,
        picCount: 0,
        user_id: '',
        //本地图片上传时附带的参数（用户id）
        uploadPara: {},
        //查询种类
        queryType: 1,
        //查验结果
        queryResult: {},
        //查看查询结果页面
        showResult: false,
        //结果信息
        msg_result: '',
        //图片
        showPicture: false,
        //图片路径
        paths: '',
        //大图预览列表
        imgLists:[]
      };
    },
    methods: {
      testing()
      {
        console.log(this.picNumber + " Testing...")
      },
      /*
      页面的切换
      三种方式：手动，扫码枪，本地图片上传
      */
      handleClick(tab, event)
      {
        if(!this.isLoading1 && !this.isLoading2 && !this.isLoading3)
        {
          console.log(this.picNumber);
          this.activeName = tab.name;
          this.queryResult = {};
          this.firstQuery = true;
          this.secondQuery = true;
          this.thirdQuery = true;

          if(this.activeName == 'first')
          {
            this.invoiceHand.codes = '';
            this.invoiceHand.numbers = '';
            this.invoiceHand.dates = '';
            this.invoiceHand.checkCodes = '';
          }
          else if(this.activeName == 'second')
          {
            this.scanner.code = '';
            this.scanner.number = '';
            this.scanner.dates = '';
            this.scanner.checkCode = '';
            this.firstIn = false;
          }
          else if(this.activeName == 'third')
          {
            this.pictures = [];
            this.picNumber = 0;
            this.picIsLoading = true;
          }
        }
      },
      /*
      收纳公共录入界面，取消循环定位焦点
      */
      cancelFocus()
      {
        this.firstIn = true;
      },
      /*
      第一种方式：手动提交监听按钮
      处理返回结果
      */
      listener()
      {
        this.queryType = 1;
        this.queryResult = {};
        this.firstQuery = true;
        this.paths = '';
        this.imgLists = [];
        this.msg_result = '';
        let isCodes = false;
        let isNumbers = false;
        let isDates = false;
        let isChecks = false;
        if(this.invoiceHand.codes != '')
          isCodes = true;
        if(this.invoiceHand.numbers != '')
          isNumbers = true;
        if(this.invoiceHand.dates != '')
          isDates = true;
        if(this.invoiceHand.checkCodes != '')
          isChecks = true;
        if(!isCodes)
          this.$message.error('请输入发票代码');
        else if(!isNumbers)
          this.$message.error('请输入发票号码');
        else if(!isDates)
          this.$message.error('请选择开票日期');
        else if(!isChecks)
          this.$message.error('请输入校验码后六位');
        if(isCodes && isNumbers && isChecks && isDates)
        {
          this.isLoading1 = true;
          this.tabsController = true;
          let reqStr = 'http://localhost:8090/query/normal' + '?' + 'userId=' + this.user_id + '&' +
            'invoice_code=' + this.invoiceHand.codes + '&invoice_number=' +
            this.invoiceHand.numbers + '&invoice_date=' + this.invoiceHand.dates +
            '&invoice_check=' + this.invoiceHand.checkCodes;
          axios.get(reqStr).then(response =>
          {
            this.queryResult = response.data
            if(this.queryResult.codes == "0")
            {
              this.$message.success('录入成功，点击按钮查看结果');
              this.msg_result = "查询成功";
              let arrays = this.queryResult.waterMarkPath.toString().split("\\");
              let name = arrays[arrays.length - 1];
              //结果图片链接
              this.paths = "http://localhost:8090/query/images?type=watermark&name=" + name;
              this.imgLists.push(this.paths);
              this.showPicture = true;
            }
            else if(this.queryResult.codes == "1")
            {
              this.$message.warning('重复录入，点击按钮查看结果');
              this.msg_result = "重复查询" + "<br/>" + "结果代码: " + this.queryResult.codes +
                "<br/>" + "原因: " + this.queryResult.comments;
              let arrays = this.queryResult.waterMarkPath.toString().split("\\");
              let name = arrays[arrays.length - 1];
              console.log(name);
              this.paths = "http://localhost:8090/query/images?type=watermark&name=" + name;
              this.imgLists.push(this.paths);
              this.showPicture = true;
            }
            else
            {
              this.$message.error('录入失败，点击按钮查看结果');
              this.msg_result = "录入失败" + "<br/>原因: " + this.queryResult.comments
              + "<br/> 加载结果图片失败";
              this.showPicture = true;
            }
            this.firstQuery = false;
            this.isLoading1 = false;
            this.tabsController = false;
            //console.log(response)
          });
        }
      },
      /*
       扫码枪页面，时区焦点体提醒
       */
      focusReminder()
      {
        if(this.activeName == 'second' && this.scanner.code == '')
        {
          this.$message.error('请将鼠标移至输入框内');
        }
      },
      /*
      扫码枪页面，根据第一个输入框的变量给其他三个输入框赋值
      */
      scannerInputting()
      {
        if(this.scanner.code.split(",").length > 1)
        {
          let splitInput = this.scanner.code.split(",")
          this.scanner.code = splitInput[2];
          this.scanner.number = splitInput[3];
          this.scanner.dates = splitInput[5];
          this.scanner.checkCode = splitInput[6].substring(splitInput[6].length - 6, splitInput[6].length);
        }
      },
      /*
      对于扫码枪页面当清空一个输入框，清空所有
      */
      clearScanner()
      {
        this.scanner.code = '';
        this.scanner.number = '';
        this.scanner.dates = '';
        this.scanner.checkCode = '';
      },
      /*
       扫码枪功能查询按钮监听，即开始查询
       */
      scannerListener()
      {
        console.log("Scanner")
        this.queryType = 2;
        this.queryResult = {};
        this.secondQuery = true;
        this.paths = '';
        this.imgLists = [];
        this.msg_result = '';
        this.tabsController = true;
        this.$refs[this.scanner].validate(value =>
        {
          if(value)
          {
            this.isLoading2 = true;
            let reqStr = 'http://localhost:8090/query/scanner' + '?' + 'userId=' + this.user_id + '&' +
              'invoice_code=' + this.scanner.code + '&invoice_number=' +
              this.scanner.number + '&invoice_date=' + this.scanner.dates +
              '&invoice_check=' + this.scanner.checkCode;
            axios.get(reqStr).then(response =>
            {
              this.queryResult = response.data
              console.log(response);
              if(this.queryResult.codes == "0")
              {
                this.$message.success('录入成功，点击按钮查看结果');
                this.msg_result = "查询成功";
                let arrays = this.queryResult.waterMarkPath.toString().split("\\");
                let name = arrays[arrays.length - 1];
                console.log(name);
                this.paths = "http://localhost:8090/query/images?type=watermark&name=" + name;
                this.imgLists.push(this.paths);
                this.showPicture = true;
              }
              else if(this.queryResult.codes == "1")
              {
                this.$message.warning('重复录入，点击按钮查看结果');
                this.msg_result = "重复查询" + "<br/>" + "结果代码: " + this.queryResult.codes +
                "<br/>" + "原因: " + this.queryResult.comments;
                let arrays = this.queryResult.waterMarkPath.toString().split("\\");
                let name = arrays[arrays.length - 1];
                console.log(name);
                this.paths = "http://localhost:8090/query/images?type=watermark&name=" + name;
                this.imgLists.push(this.paths);
                this.showPicture = true;
              }
              else
              {
                this.$message.error('录入失败，点击按钮查看结果');
                this.msg_result = "录入失败" + "<br/>原因: " + this.queryResult.comments +
                "<br/>无返回图片";
                this.showPicture = true;
              }
              this.secondQuery = false;
              this.isLoading2 = false;
              this.tabsController = false;
            });
          }
        });
      },
      submitUpload()
      {
        this.queryType = 3;
        console.log(this.picNumber + " AAAAA")
        if(!this.isLoading3 && this.picNumber >= 1)
        {
          this.queryResult = {};
          //情况返回图片路径，返回图片列表
          this.paths = '';
          this.imgLists = [];
          this.msg_result = '';
          this.picCount = 0;
          //将三个按钮转换为loading状态
          this.isLoading3 = true;
          this.thirdQuery = true;
          this.$refs.upload.submit();
        }
      },
      /*
      当文件数目超出限制，则提醒用户
      */
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleRemove(file, fileList)
      {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      //当上传图片成功并查验成功，处理返回信息
      handleAvatarSuccess(res, files)
      {
        this.$message.success('成功上传图片');
        this.queryResult = {};
        this.thirdQuery = true;
        this.paths = '';
        this.imageUrl = URL.createObjectURL(files.raw);
        let codeInfo = res.codes;

        if(codeInfo == 0)
        {
          this.$message.success('查验成功');
        }
        else if(codeInfo == 1)
        {
          this.$message.warning('重复查验');
          this.msg_result = "重复查询" + "<br/>" + "结果代码: " + this.queryResult.codes +
            "<br/>" + "原因: " + this.queryResult.comments;
          let arrays = this.queryResult.waterMarkPath.toString().split("\\");
          let name = arrays[arrays.length - 1];
          this.paths = "http://localhost:8090/query/images?type=watermark&name=" + name;
          this.imgLists.push(this.paths);
        }
        else
        {
          this.$message.error('录入失败，点击按钮查看结果');
          this.msg_result = "录入失败" + "<br/>原因: " + this.queryResult.comments;
        }

        console.log(res.codes + " Hello!");
        this.picCount = this.picCount + 1;
        console.log("Successful!" + this.picCount)
        if(this.picNumber == this.picCount)
        {
          console.log("全部完成")
          this.isLoading3 = false;
          this.tabsController = false;
          //可以查看结果
          this.thirdQuery = false;
        }
        //this.ruleForm.userHeaderPicture = res.data;
      },
      //当上传图片数目发生改变时，给图片数目重新赋值
      handleChange(file, fileList)
      {
        this.picNumber = fileList.length;
      },
    },
    directives: {
      focus: {
        inserted: function(el) {
          el.querySelector("input").focus();
        }
      },
      refocus: {
        update: function(el)
        {
          el.querySelector("input").focus();
        }
      }
    },
    created ()
    {
      let id = this.$loginInfo.usersId.toString();
      this.user_id = id;
      this.uploadPara = {"user": id}
    }
  }
</script>

<style scoped>
  .query
  {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 80px auto;
    width: 600px;
    height: 500px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0 0 25px #fff;
  }
  .dialog
  {
    text-align: center;
    border-radius: 15px;
    background-clip: padding-box;
    margin: 0px auto;
    width: 500px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #fff;
  }
  .footer
  {
    position: fixed;
    margin: auto;
    bottom: 10px;
    width: 100%;
  }
</style>
