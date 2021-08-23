var employeeLabel =  [], employeeSalaryData = [], employeeAgeData = []

async function chartData(){
await getData()

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Salário',
            data: employeeSalaryData,
            backgroundColor: 'blue',            
            borderColor: 'rgba(255, 159, 64, 1)',            
            borderWidth: 1
        },
        {
            label: 'Idade',
            data: employeeAgeData,
            backgroundColor: 'pink',            
            borderColor: 'rgba(255, 159, 64, 1)',            
            borderWidth: 1
        }]
    },
    options: {
        tooltips: {
            mode: 'index'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
chartData()

//Fetch DATA Dummy Examples REST API
async function getData(){
    const apiUrl= "https://dummy.restapiexample.com/api/v1/employees"

    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const salary = barChartData.data.map( (x) => x.employee_salary)
    const age = barChartData.data.map( (x) => x.employee_age)
    const name = barChartData.data.map( (x) => x.employee_name)

    console.log(salary, age, name)
    

    employeeLabel = name
    employeeSalaryData = salary
    employeeAgeData = age
}

getData()