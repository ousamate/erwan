<template lang="html">
    <div class="font">
        <h1>登录</h1>
        <form>
            <InputElement v-model='username.value' >用户名：</InputElement>
            <InputElement v-model='pwd.value' >密码：</InputElement>

            <input type="button" value="登录" @click='login' />
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
            }

        }
    },

    methods:{
        login:function(){

        }
    },
    components:{
        InputElement:InputElement
    }
}
</script>

<style lang="css" scoped>
    .font{
        color:blue
    }
</style>
