function plot1()
{
    fetch('authorized_company_cap1.json')
    .then(response => response.json())
    .then(data => {
        range_values = Object.keys(data)
        count_auth_cap = Object.values(data)
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Authorized Company Capital'
            },
            xAxis: {
                title: {
                    text: 'Capital'
                },
                categories: range_values
            },
            yAxis: {
                title: {
                    text: 'No of Companies'
                }
            },
            series: [{
                name: 'Capital Count',
                data: count_auth_cap
            }]
        });
    });
}

function plot2()
{
    fetch('count_of_registration.json')
    .then(response => response.json())
    .then(data => {
        year = Object.keys(data)
        count = Object.values(data)
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Barplot Of Registrations Per Year'
            },
            xAxis: {
                title: {
                    text: 'Year'
                },
                categories: year
            },
            yAxis: {
                title: {
                    text: 'Registration Counts'
                }
            },
            series: [{
                name: 'no of counts',
                data: count
            }]
        });
    });
}

function plot3()
{
    fetch('principal_top_ten_count.json')
    .then(response => response.json())
    .then(data => {
        year = Object.keys(data)
        count = Object.values(data)
        year = year.reverse().slice(0,10)
        count = count.reverse().slice(0,10)
        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Bar Plot Of Top Principal Company 2015'
            },
            xAxis: {
                title: {
                    text: 'Company Name'
                },
                categories: year
            },
            yAxis: {
                title: {
                    text: 'No of Registrations'
                }
            },
            series: [{
                name: 'Registration Counts',
                data: count
            }]
        });
    });
}

function plot4()
{
    fetch('principal_buisness_activity.json')
    .then(response => response.json())
    .then(data => {
        buisness_activity = Object.keys(data)
        activity_count = Object.values(data)
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Grouped Bar Plot Of Buisness Activity'
            },
            xAxis: {
                categories: activity_count[5],
                crosshair: true,
                title: {
                    text: 'Grouped Principal Activity'
                }

            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count Per Year'
                }
            },

            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: buisness_activity[0],
                data: activity_count[0]
        
            }, {
                name: buisness_activity[1],
                data: activity_count[1]
        
            }, {
                name: buisness_activity[2],
                data: activity_count[2]
        
            }, 
            {
                name: buisness_activity[3],
                data: activity_count[3]
            },
            {
                name: buisness_activity[4],
                data: activity_count[4]
            }
        ]
        });
    });
}

