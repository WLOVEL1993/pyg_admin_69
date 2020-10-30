<template>
    <el-container class="home_container">
        <el-header class="home_header">
             <el-button @click="collapseMenu()" icon="iconfont icon-menu" size="mini" circle></el-button>
             <span class='title' >品优购后台管理系统</span>
              <el-button class='logout' type="danger" round>退出</el-button>
        </el-header>
        <el-container>
            <el-aside :width="collapse?'65px':'180px'" class="home_aside">
                <el-menu
                    router
                    :collapse="collapse"
                    :collapse-transition="false"
                    :unique-opened="true"
                    style="border:none"
                    background-color="#333744"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu :index="item.id.toString()" v-for="(item,i) in menus" :key="item.id">
                        <template slot="title">
                        <i :class="['iconfont',iconArr[i]]"></i>
                        <span>{{item.authName}}</span>
                        </template>
                        <el-menu-item :index="lastItem.path" v-for="lastItem in item.children" :key="lastItem.id">
                            <i class="el-icon-menu"></i>
                            <span>{{lastItem.authName}}</span>
                            </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    name:'Home',
    data(){
        return{
            collapse:false,
            menus:[],
            iconArr: ['icon-user-fill', 'icon-cog', 'icon-shoppingcart', 'icon-file', 'icon-chart-area']
        }
    },
    mounted(){
        //获取菜单数据
        this.getData();
    },
    methods:{
        collapseMenu(){
            this.collapse = !this.collapse
        },
        async getData(){
            const {data:{data,meta}} = await this.$http.get('menus');
            if(meta.status!=200) return this.$message.error("获取菜单失败");
            this.menus=data;
  
        }
    }
}
</script>
<style>
.home_container{
    height: 100%;
}
.home_header{
    background: #373D41;
    line-height: 60px;
}
.home_aside{
    background: #333744;
}
.title{
    color: #ccc;
    font-size: 18px;
    padding-left: 5px;
}
.logout{
    float: right;
   margin-top: 15px;
}
</style>
