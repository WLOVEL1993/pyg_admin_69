<template>
    <div class="login_container">
        <div class="box">
            <img src="../assets/images/logo.png" alt="">
            <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item prop="username">
                    <el-input  v-model="form.username"  prefix-icon="iconfont icon-account"></el-input>
                </el-form-item>
                <el-form-item prop='password'>
                    <el-input v-model="form.password" prefix-icon="iconfont icon-eye-slash"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit('ruleForm')">登录</el-button>
                     <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ]
          }
        }
    },
    methods:{
        submit(ruleForm){
            this.$refs[ruleForm].validate(async valid=>{
              if(valid){
                const {data:{data,meta}} = await this.$http.post('login',this.form);
                if(meta.status!= 200) return this.$message.error(meta.message||'登录失败,请稍后重试')
                // 登录成功
                sessionStorage.setItem('token',data.token);
                this.$router.push("/home")
              }
              
            })
        }
    }    
}
</script>
<style>
.login_container{
  width: 100%;
  height:100%;
  background:linear-gradient(45deg,#ccc,#105763)
}
.login_container .box{
    width: 400px;
    height: 250px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    border-radius: 4px;
    background: linear-gradient(45deg,#D2ECF1,#efefef);
    padding: 0 15px;
    box-sizing: border-box;

}
.login_container .box img{
    width: 200px;
    display: block;
    margin: 15px auto;
}
</style>


