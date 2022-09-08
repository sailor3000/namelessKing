<template>
  <div class="analysis">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :span="24">
        <a-input v-model="qq" placeholder="输入你的qq号码" allow-clear />
        <a-button type="primary" @click="goSearch">查询</a-button>
        <div>总字数为：{{ num }}</div>
      </a-col>
    </a-row>

  </div>
</template>

<script>
import txt1 from './2022-4.txt';

export default {
  name: 'words',
  data () {
    return {
      loading: true,
      qq: null,
      record1: null,
      num: null,
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
  },
  methods: {
    goSearch () {
      this.getWords(txt1)
    },
    getWords (text) {
      let qq = this.qq
      let itemsJson = this.getItem(text)
      let newSum = []
      itemsJson.forEach((li,index) => {
          if(li.qqNumber == qq){
              newSum.push(li)
          }
      })
      var reg = new RegExp("<br/>", 'g');
      let strLens = 0
      newSum.forEach((li)=>{
          li.clear = li.play.replace(reg, '')
          strLens = strLens + this.lens(li.clear)
      })
      this.num = strLens/2
        // debugger
        // $(".result").empty()
        // $(".result").append('<div>总字数为：'+ strLens/2 +'(包含标点符号，标点符号算半个字)</div>')
        // console.log('newSum', strLens)
    },
    getItem(text){
        let itemsJson = [] 
        var val = text
        var data = []
        for(var k = 0; k < val.length; k++) {
            var nane2020 = val.indexOf("2020-",k); // 从0开始搜索
            var nane = val.indexOf("2021-",k); // 从0开始搜索
            var nane2022 = val.indexOf("2022-",k); // 从0开始搜索
            if(nane === -1 && nane2022 === -1 && nane2020){ // 没有找到，退出循环
                // debugger
            break;
            } else {
                // debugger
                const txt = nane === -1 ? (nane2020 === -1 ? nane2022 : nane2020) : nane
                data.push(txt);
                k+=1;
            }
        }
        data = this.unique(data)
        for(var j = 0; j < data.length; j++) {
            let t
            if (j === data.length - 1){
                t = val.slice(data[j])
            } else {
                t = val.slice(data[j], data[j+1]-1)
            }
            // items.push(t)
            var tinfo = t.slice(0, t.indexOf("\n", 0))
            var time = tinfo.slice(0, tinfo.indexOf(" ", tinfo.indexOf(" ")+1))
            var person = tinfo.indexOf("(") !== -1 ? tinfo.slice(tinfo.indexOf(" ", tinfo.indexOf(" ")+1)+1, tinfo.indexOf("(")) : tinfo.slice(tinfo.indexOf(" ", tinfo.indexOf(" ")+1)+1, tinfo.indexOf("<"))
            var qqNumber = tinfo.indexOf("(") === -1 ? tinfo.slice(tinfo.indexOf("<") + 1, tinfo.indexOf(">")) : tinfo.slice(tinfo.indexOf("(") + 1, tinfo.indexOf(")"))
            var play = t.slice(t.indexOf("\n")+1)
            play = play.replace(/\n/g,'<br/>')
            itemsJson.push({
                time: time,
                person: person,
                qqNumber: qqNumber,
                play: play,
                color: '#000',
            })
            // people.push({
            //     person: person,
            //     color: '#000',
            // })
            return itemsJson
        }
    },
    // 数组去重
    unique (arr) {
        return Array.from(new Set(arr))
    },
    lens(str) {
        if (str == null) return 0;
        if (typeof str != "string"){
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g,"ab").length;
    }
  },
}
</script>

<style lang="less" scoped>

</style>
