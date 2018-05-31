import {VueCharts, Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  mixins: [VueCharts.mixins.reactiveProp],
  props: ['chartData', 'options'],
  watch: {
    // whenever question changes, this function will run
    chartData: function (news, olds) {
      this.renderChart(news, this.options)
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
