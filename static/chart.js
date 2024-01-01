// function fetchDataAndUpdateGrade() {
//     fetch('/get-datagrade')
//         .then(response => response.json())
//         .then(data => {
//             updateDataGrade(data);
//         })
//         .catch(error => console.error('Error:', error));
// }

// function updateDataGrade(data) {
//     var root = am5.Root.new("gradediv");

//     root.setThemes([
//         am5themes_Animated.new(root)
//     ]);

//     var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
//         layout: root.verticalLayout
//     }));

//     var series = chart.series.push(am5percent.FunnelSeries.new(root, {
//         alignLabels: false,
//         orientation: "vertical",
//         valueField: "value",
//         categoryField: "class"
//     }));

//     series.data.setAll(data);

//     series.appear();

//     var legend = chart.children.push(am5.Legend.new(root, {
//         centerX: am5.p50,
//         x: am5.p50,
//         marginTop: 15,
//         marginBottom: 15
//     }));

//     legend.data.setAll(series.dataItems);


//     chart.appear(1000, 100);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     fetchDataAndUpdateGrade();
// });
