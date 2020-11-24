function plot1()
{
    fetch('http://0.0.0.0:8000/authorized_company_cap1.json')
    .then(response => response.json())
    .then(data => {
        range_values = Object.keys(data)
        count_auth_cap = Object.values(data)
        Highcharts.chart('container', {
            chart: {
                type:"column",
                // Edit chart spacing
                spacingBottom: 50,
                spacingTop: 80  ,
                spacingLeft: 80,
                spacingRight: 80,
                // Explicitly tell the width and height of a chart
                width: null,
                height: 600 
        },
            title: {
                text: 'Authorized Company Capital',
            style: {
                fontSize: '30px',
                color: '#000',
                fontWeight: 700
            }

            },
            xAxis: {
                labels: {
                    style: {
                        fontSize: '20px',
                        color: '#000',
                    }
                },    
                title: {
                    text: 'Capital',
                    margin:20,
                    style: {
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: 500
                    }
                    
                },
                categories: range_values
            },
            yAxis: {
                labels: {
                    style: {
                        fontSize: '20px',
                        color: '#000',
                    }
                },    
                title: {
                    text: 'No of Companies',
                    margin:30,
                    style: {
                        color: '#000',
                        fontSize: '20px',
                        fontWeight: 500
                    }
                }
            },
            legend: {
                enabled: false
            },
    
            series: [{
                name: 'count of interval',
                data: count_auth_cap,
                color: 'red',
                dataLabels: {
                    enabled: true,
                    rotation: 0,
                    style: {
                        fontSize: '20px',
                        fontWeight: 500
                    }
                },
               
            }]
    
        });
    });
}

function plot2()
{
    fetch('http://0.0.0.0:8000/count_of_registration.json')
    .then(response => response.json())
    .then(data => {
        year = Object.keys(data)
        count = Object.values(data)
        Highcharts.chart('container', {
            chart: {
                type:"column",
                // Edit chart spacing
                spacingBottom: 50,
                spacingTop: 80  ,
                spacingLeft: 80,
                spacingRight: 80,
                // Explicitly tell the width and height of a chart
                width: null,
                height: 600 
        },
            title: {
                text: 'Barplot Of Registrations Per Year',
                margin:10,
                style: {
                    fontSize: '30px',
                    color: '#000',
                    fontWeight: 700
                }
    
            },
            xAxis: {
                    labels: {
                        style: {
                            fontSize: '15px',
                            color: '#000',
                        }
                },
                title: {
                    text: 'Year',
                    margin:10,
                    style: {
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: 500
                    }
                    
                },
                categories: year
            },
            yAxis: {
                labels: {
                    style: {
                        fontSize: '15px',
                        color: '#000',
                    }
                    },
                title: {
                    text: 'Registration Counts',                    margin:30   ,
                    style: {
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: 500
                    }
                }

            },
            legend :{
                enabled:false
            },
            series: [{
                name: 'count of registrations',
                data: count,
                color: 'blue',

               
            }]
        });
    });
}

function plot3()
{
    fetch('http://0.0.0.0:8000/principal_top_ten_count.json')
    .then(response => response.json())
    .then(data => {
        year = Object.keys(data)
        count = Object.values(data)
        year = year.reverse().slice(0,10)
        count = count.reverse().slice(0,10)
        Highcharts.chart('container', {
            chart: {
                type:"bar",
                // Edit chart spacing
                spacingBottom: 50,
                spacingTop: 80  ,
                spacingLeft: 80,
                spacingRight: 80,
                // Explicitly tell the width and height of a chart
                width: null,
                height: 600 
        },
            title: {
                text: 'Bar Plot Of Top Principal Company 2015',
                margin:10,
                style: {
                    fontSize: '30px',
                    color: '#000',
                    fontWeight: 500
                }
            },
            xAxis: {
                labels: {
                    style: {
                        fontSize: '15px',
                        color: '#000',
                    }
                    },
                title: {
                    text: 'Company Name',
                    margin:10,
                style: {
                    fontSize: '20px',
                    color: '#000',
                    fontWeight: 500
                }
                },
                categories: year
            },
            yAxis: {
                labels: {
                    style: {
                        fontSize: '15px',
                        color: '#000',
                    }
                    },
                title: {
                    text: 'No of Registrations',
                    margin:15,
                    style: {
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: 500
                    }

                }
            },
            legend:{
                enabled:false
            },
            series: [{
                name: 'count of interval',
                data: count,
                dataLabels: {
                    enabled: true,
                    rotation: 0,
                    style: {
                        fontSize: '16px',
                        fontWeight: 500
                    }
                },
               
            }]
        });
    });
}

function plot4()
{
    fetch('http://0.0.0.0:8000/principal_buisness_activity.json')
    .then(response => response.json())
    .then(data => {
        buisness_activity = Object.keys(data)
        activity_count = Object.values(data)
        Highcharts.chart('container', {
            chart: {
                type:"column",
                // Edit chart spacing
                spacingBottom: 50,
                spacingTop: 80  ,
                spacingLeft: 80,
                spacingRight: 80,
                // Explicitly tell the width and height of a chart
                width: null,
                height: 600 
        },
            title: {
                text: 'Grouped Bar Plot Of Buisness Activity',
                style: {
                    fontSize: '30px',
                    color: '#000',
                    fontWeight: 700
                }
        
            },
            xAxis: {
                labels: {
                    style: {
                        fontSize: '15px',
                        color: '#000',
                    }
                    },
                categories: activity_count[5],
                crosshair: true,
                title: {
                    text: 'Grouped Principal Activity',
                    margin:20,
                    style: {
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: 500
                    }
                }

            },
            yAxis: {
                labels: {
                    style: {
                        fontSize: '15px',
                        color: '#000',
                    }
                    },
                min: 0,
                title: {
                    text: 'Count Per Year',
                    margin:20,
                    style: {
                        fontSize: '20px',
                        color: '#000',
                        fontWeight: 500
                    }
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

