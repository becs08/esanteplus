export default {
  color: '#ed5564',
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: 'Rendez-Vous'
  },
  grid: {
    left: 30,
    right: 0,
    top: 50,
    bottom: 50
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#ed5564'
      }
    },
    axisPointer: {
      label: {
        formatter: function(params) {
          return (
            'Rendez-Vous' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
          );
        }
      }
    },
    data: [
      '2022-11',
      '2022-12',
      '2023-1',
      '2023-2',
      '2023-3',
      '2023-4',
      '2023-5',
      '2023-6',
      '2023-7',
      '2023-8',
      '2023-9',
      '2023-10'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: {
    name: 'Rendez-Vous',
    type: 'line',
    xAxisIndex: 0, // Utilisez 0 car l'axe x est le premier (0-indexed)
    smooth: true,
    data: [0, 0, 0, 0, 0, 50, 75, 157, 280, 358, 455, 549]
  }
};
