//Majors

function fetchDataUpdateChart() {
    fetch('/get-datachart')
        .then(response => response.json())
        .then(data => {
            UpdateChart(data); // Pass fetched data to the chart update function
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function UpdateChart(data_df) {
    am5.ready(function() {
        var root = am5.Root.new("chartdiv");
        root.setThemes([
            am5themes_Animated.new(root),
        ]);

        var chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalHorizontal
            })
        );

        // Create series
        var series = chart.series.push(
            am5percent.PieSeries.new(root, {
                name: "Series",
                valueField: "value",
                categoryField: "class"
            })
        );
        series.data.setAll(data_df);

        // Add legend
        var legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root.horizontalLayout
        }));

        legend.data.setAll(series.dataItems);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    fetchDataUpdateChart();
});
