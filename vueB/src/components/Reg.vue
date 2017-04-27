<template lang="html">
    <div class="font">
        <h1>注册</h1>
        <form>
            <InputElement v-model='username.value' :info='username.info'>用户名：</InputElement>
            <InputElement v-model='pwd.value' :info='pwd.info'>密码：</InputElement>
            <InputElement v-model='confirmPwd.value' :info='confirmPwd.info'>确认密码：</InputElement>
            <InputElement >email：</InputElement>
            <input type="button" value="注册" @click='reg' />
        </form>
    </div>
</template>

<script>
import InputElement from "./InputElement";
import {ajax} from "@/js/tools";
export default {
    data:function(){
        return {
            username:{
                value:'',
                info:'',
                isValid:false
            },
            pwd:{
                value:'',
                info:'',
                isValid:false
            },
            confirmPwd:{
                value:'',
                info:'',
                isValid:false
            }
        }
    },
    watch:{
        "username.value":function(value){
            if(/^\w{6,20}$/.test(value)){

                ajax({
                    type:"get",
                    url:"/users/find",
                    data:{
                        username:value
                    },
                    success:function(data){
                        if(data.length > 0){
                            this.username.info = "重名";
                            this.username.isValid = false;
                        }else{
                            this.username.info = "√";
                            this.username.isValid = true;
                        }
                    }.bind(this)
                });
            }else{
                this.username.info = "格式不正确";
                this.username.isValid = false;
            }
        },
        "pwd.value":function(value){
            if(/^.{6,20}$/.test(value)){
                this.pwd.info = "√";
                this.pwd.isValid = true;
            }else{
                this.pwd.info = "格式不正确";
                this.pwd.isValid = false;
            }
        },
        "confirmPwd.value":function(value){
            if(value == this.pwd.value){
                this.confirmPwd.info = "√";
                this.confirmPwd.isValid = true;
            }else{
                this.confirmPwd.info = "两次密码不一致";
                this.confirmPwd.isValid = false;
            }
        }
    },
    methods:{
        reg:function(){
            if(this.username.isValid
                && this.pwd.isValid
                && this.confirmPwd.isValid){
                ajax({
                    type:"post",
                    url:"/users/add",
                    data:{
                        username:this.username.value,
                        pwd:this.pwd.value
                    },
                    success:function(){
                        alert("suc");
                    }
                });
            }
        }
    },
    components:{
        InputElement:InputElement
    }
}
</script>

<style lang="css" scoped>
    .font{
        color:red
    }
</style>
