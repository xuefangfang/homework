// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementsByClassName('.tubiao'));

// 指定图表的配置项和数据
var option = {
title: {
    text: '业务指标', //标题文本内容
},
toolbox: { //可视化的工具箱
    show: true,
    feature: {
        restore: { //重置
            show: true
        },
        saveAsImage: {//保存图片
            show: true
        }
    }
},
tooltip: { //弹窗组件
    formatter: "{a} <br/>{b} : {c}%"
},
series: [{
    name: '业务指标',
    type: 'gauge',
    detail: {formatter:'{value}%'},
    data: [{value: 0, name: '完成率'}]
}]

};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

