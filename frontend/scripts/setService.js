const createService = async () => {
    const serviceTitleElement = document.getElementById('service-title')
    const serviceBudgetElement = document.getElementById('service-budget')
    const serviceDateRegisterElement = document.getElementById('service-dateRegister')
    const serviceDateLimitElement = document.getElementById('service-dateLimit')
    const serviceDescriptionElement = document.getElementById('service-description')

    const service = {
        title: serviceTitleElement.value,
        description: serviceDescriptionElement.value,
        budget: Number(serviceBudgetElement.value),
        dateRegister: serviceDateRegisterElement.value,
        dateLimit: serviceDateLimitElement.value
    }

    const init = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(service)
    }

    const response = await fetch('http://localhost:3000/service', init)

    const data = await response.json()
    console.log(data)

    window.location.href = "file:///C:/Users/Halys/Desktop/IFPI-PROG-INT-II/frontend/pages/index.html?"
}


window.onload = () => {
    const btnNewService = document.getElementById('btn-new-service')

    btnNewService.onclick = createService
}