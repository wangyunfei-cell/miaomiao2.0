<template>
    <div class="messagebox">
        <h2>{{ title}}</h2>
        <p>{{content}}</p>
        <div>
            <span @touchstart="handleCancel" >{{cancel}}</span>
            <span @touchstart="handleOk">{{ok}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'MessageBox',

}
</script>

<style scoped>
.messagebox {
    width: 200px;
    height: 120px;
    background: white;
    color: black;
    border: 1px #ccc solid;
    border-radius: 4px;
    /* box-shadow: 3px  3px 3px 3px #ccc; */
    position: absolute;
    left: 25%;
    top:28%;
}
.messagebox h2 {
    text-align: center;
    font-size: 18px;
    line-height: 40px;
}
.messagebox p {
    text-align: center;
    line-height: 40px;
}
.messagebox   div {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #ccc;
}
.messagebox  div span { 
    flex: 1;
    text-align: center;
    line-height: 38px;
    display: block;
    border-right: 1px solid #ccc;
}
.messagebox  div span:last-child{
    border: none;
}
</style>
