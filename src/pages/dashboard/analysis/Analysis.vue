<template>
  <div class="analysis">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <!-- <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$t('totalSales')" total="￥ 189,345">
          <a-tooltip :title="$t('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" :term="$t('wow')" :percent="12" :is-increase="true" :scale="0" />
            <trend :term="$t('dod')" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">{{$ta('daily|sales', 'p')}}<span> ￥234.56</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$t('visits')" total="￥ 189,345">
          <a-tooltip :title="$t('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-area />
          </div>
          <div slot="footer">{{$ta('daily|visits', 'p')}}<span> 123,4</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$t('payments')" total="￥ 189,345">
          <a-tooltip :title="$t('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-bar />
          </div>
          <div slot="footer">{{$t('conversion')}} <span>60%</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$t('operating')" total="73%">
          <a-tooltip :title="$t('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-progress target="90" percent="78" color="#13C2C2" height="8px"/>
          </div>
          <div slot="footer" style="white-space: nowrap;overflow: hidden">
            <trend style="margin-right: 16px" :term="$t('wow')" :percent="12" :is-increase="true" :scale="0" />
            <trend :term="$t('dod')" :target="100" :value="89" :scale="0" />
          </div>
        </chart-card>
      </a-col> -->
      <a-col>
        <a-card>
          <a-timeline>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="新历元年 灾难" class="fa">
                  <p>相传这一年技术实验灾难，技术核心失传，旧的文明格局分崩离析，南北格局初现眉目。</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="100年 鸣森" class="fa">
                  <p>鸣森地区宗教形成。</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="500年 地区宗教" class="fa">
                  <p>尼可西耶、卢米艾地区宗教形成</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="不可考年份 掠夺者" class="fa">
                  <p>掠夺者出现</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="1300年 浮光" class="fa">
                  <p>浮光地区势力崛起</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="3000年 奇袭浮光 联盟成立" class="fa">
                  <p>云源帝国奇袭攻占浮光，浮光成为浮光大公国。梅西耶合众国成立。</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
            <a-timeline-item>
              <a-collapse accordion class="gra">
                <a-collapse-panel key="1" header="3300年 星月夜事件" class="fa">
                  <p>由于资源，领土多方面冲突，北方星域的云源帝国对南方星域的梅西耶合众国外围一颗工业殖民星球实施毁灭性打击，两个超级集团不宣而战，被称为“星月夜事件”。</p>
                </a-collapse-panel>
              </a-collapse>
            </a-timeline-item>
          </a-timeline>
        </a-card>
      </a-col>
    </a-row>

  </div>
</template>

<script>
import ChartCard from '../../../components/card/ChartCard'
import MiniArea from '../../../components/chart/MiniArea'
import MiniBar from '../../../components/chart/MiniBar'
import MiniProgress from '../../../components/chart/MiniProgress'
import Bar from '../../../components/chart/Bar'
import RankingList from '../../../components/chart/RankingList'
import HotSearch from './HotSearch'
import SalesData from './SalesData'
import Trend from '../../../components/chart/Trend'

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'Analysis',
  i18n: require('./i18n'),
  data () {
    return {
      rankList,
      loading: true
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
  },
  components: {Trend, SalesData, HotSearch, RankingList, Bar, MiniProgress, MiniBar, MiniArea, ChartCard}
}
</script>

<style lang="less" scoped>
  .extra-wrap{
    .extra-item{
      display: inline-block;
      margin-right: 24px;
      a:not(:first-child){
        margin-left: 24px;
      }
    }
  }
  @media screen and (max-width: 992px){
    .extra-wrap .extra-item{
      display: none;
    }
  }
  @media screen and (max-width: 576px){
    .extra-wrap{
      display: none;
    }
  }
  .gra {
    background-color: transparent;
    border: none;
  }
  .fa {
    background-color: transparent;
    border: none;
  }
  .fa /deep/ .ant-collapse-header{
    padding: 0px 0px 0px 30px!important;
    background-color: transparent;
    border: none;
  }

</style>
