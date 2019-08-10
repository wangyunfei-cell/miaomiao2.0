<template>
  <div id="content">
    <div class="cinema_body">
      <Loading v-if="isLoading" />
      <Scroller v-else>
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <div>
            <span>{{topic.nm}}</span>
            <span class="q">
              <span class="price">{{topic.sellPrice}}</span> 元起
            </span>
          </div>
          <div class="address">
            <span>{{topic.addr}}</span>
            <span>{{topic.distance}}</span>
          </div>
          <div class="card">
            <div v-for="(num,key) in topic.tag" v-if="num === 1" :key="key" :class="key | classCard" >
              {{key | formatCard}}
            </div>
          </div>
        </li>
      </ul>
      </Scroller>
    </div>
  </div>
</template>

<script>
export default {
  name: "CiList",
  data() {
    return {
      topics: [],
      isLoading:true,
      prevCityId:-1
    };
  },
  activated() {
    var cityId = this.$store.state.city.id
    if(this.prevCityId===cityId){return;}
    this.axios.get("/api/cinemaList?cityId="+cityId).then((data) => {
      // handle success
      // console.log(data.data.data.cinemas);
      // this.topics = data.data.data.cinemas;
      var msg = data.data.msg;
      if (msg === "ok") {
        this.topics = data.data.data.cinemas;
        this.isLoading  = false;
        this.prevCityId = cityId
      }
    });
  },
  filters: {
    formatCard(key) {
      var card = [
        {
          key: "allowRefund",
          value: "改签"
        },
        {
          key: "endorse",
          value: "退"
        },
        {
          key: "sell",
          value: "折扣卡"
        },
        {
          key: "snack",
          value: "小吃"
        }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) { 
          return card[i].value;
        }
      } 
      return '';
    },
    classCard(key){
      var card = [
        {
          key: "allowRefund",
          value: "bl"
        },
        {
          key: "endorse",
          value: "bl"
        },
        {
          key: "sell",
          value: "or"
        },
        {
          key: "snack",
          value: "or"
        }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return ''
    }  
  }
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(1) {
  width:80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
