// scripts.js

// Function to calculate NPV
function calculateNPV() {
    const cashFlows = document.getElementById('cashFlows').value.split(',').map(Number);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    let npv = 0;

    for (let i = 0; i < cashFlows.length; i++) {
        npv += cashFlows[i] / Math.pow(1 + rate, i + 1);
    }

    document.getElementById('npv-result').innerText = `NPV: ${npv.toFixed(2)}`;
}

// Function to calculate Investment Growth
function calculateInvestmentGrowth() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const periodicInvestment = parseFloat(document.getElementById('periodicInvestment').value);
    const periods = parseInt(document.getElementById('periods').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value) / 100;
    let futureValue = initialInvestment;

    for (let i = 1; i <= periods; i++) {
        futureValue = (futureValue + periodicInvestment) * (1 + growthRate);
    }

    document.getElementById('investment-result').innerText = `Future Value: ${futureValue.toFixed(2)}`;
}

// Function to calculate Leasing of Equipment
function calculateLeasing() {
    const leasePayment = parseFloat(document.getElementById('leasePayment').value);
    const leasePeriods = parseInt(document.getElementById('leasePeriods').value);
    const leaseRate = parseFloat(document.getElementById('leaseRate').value) / 100;
    let presentValue = 0;

    for (let i = 0; i < leasePeriods; i++) {
        presentValue += leasePayment / Math.pow(1 + leaseRate, i + 1);
    }

    document.getElementById('leasing-result').innerText = `Present Value of Lease: ${presentValue.toFixed(2)}`;
}
