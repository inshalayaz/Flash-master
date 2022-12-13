export const Data = {
    labels: ["5% Marketing", "1% Liquidity", "1% Burn"],
    datasets: [
        {
            label: "Flash Token",
            data: [3, 4, 3],
            backgroundColor: [ "#4368b1", "#05705C", "#AF5E15"],
            borderColor: [ "#4368b1", "#05705C", "#AF5E15"],
            hoverOffset: 4,
            hoverBackgroundColor:["#5e95ff", "#039d82", "#FB7200" ]
            
        }
    ]
}

export const Options = {
    cutout: 165,
    spacing: 10,
    plugins: {
        legend: {
            display: false
        }
    },
    onHover: (event, chartElement) => {
        console.log(chartElement)

        if(chartElement[0]?.index == 0){
            let marketing = document.getElementById('marketing') 
            marketing.style.color ='#5e95ff'
            marketing.style.transition = "300ms linear all"
        }else if(chartElement[0]?.index == 1){
            let liquidity = document.getElementById('liquidity') 
            liquidity.style.color ='#039d82'
            liquidity.style.transition = "300ms linear all"
        }else if(chartElement[0]?.index == 2){
            let burn = document.getElementById('burn')
            burn.style.color ='#FB7200'
            burn.style.transition = "300ms linear all"
        }else{
            document.getElementById('burn').style.color ='#AF5E15'
            document.getElementById('marketing').style.color ='#4368b1'
            document.getElementById('liquidity').style.color ='#05705C'
        }
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
    }
}

export const chartLabel = {
    id: "center-label",
    beforeDraw: function(chart) {

     let width = chart.width
     let height = chart.height
     let ctx = chart.ctx
     
     ctx.restore()
     var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
      var text = "10%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.5;
          ctx.fillStyle = "rgba(255,255,255,0.7)"
      ctx.fillText(text, textX, textY);
      ctx.save();

      var fontSize = (height / 400).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
      var text = "TRANSACTION FEES",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height/1.8;
          ctx.fillStyle = "rgba(255,255,255,0.5)f"
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
}
