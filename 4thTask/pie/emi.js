console.log('file tested');
console.log(document.getElementById('btn'));


document.getElementById('btn').onclick = function(){
    console.log('Button clicked');
    console.log(document);
    console.log(document.getElementById('x1'));
    console.log(document.querySelectorAll('#x1'));


var[var1,var2,var3] =[10,20,30];
console.log(var1);

//Array Destructuring
var[text1,text2,text3]= document.querySelectorAll('#x1');
console.log(text1);
console.log(text1.value , typeof text1.value);
console.log(text2);
console.log(text3);

var P  = Number(text1.value);
var R  = Number(text2.value)/12/100;
var N  = Number(text3.value)*12;

var emi = P * R * (1 + R)**N / ((1+R)**N - 1);
console.log(emi);
emi = Math.round(emi);
console.log(emi);

var totalPayable = emi * N;
console.log(totalPayable);

var Interest =  totalPayable - P;
console.log(Interest);

var allP = document.getElementsByTagName("P");
console.log(allP);
var[p1,p2,p3,p4] = allP;
console.log(p1);

p1.innerHTML = ` EMI : &#8377; ${emi}`;
p2.innerHTML = ` Loan Amount : &#8377; ${P}`;
p3.innerHTML = ` Paid Interest : &#8377; ${Interest}`;
p4.innerHTML = ` Total Payable Amount : &#8377; ${totalPayable}`;

Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Loan Amount',
            y: P,
            sliced: true,
            selected: true,
            color:'cyan',
        }, {
            name: 'Interest',
            y: Interest,
            color:'Blue',
        
        }]
    }]
});

}