import React, { useState } from 'react';
import  i from "./assets/ebIcon.webp" 
const LightBillCalculator = () => {
    const [person1Units, setPerson1Units] = useState('');
    const [totalUnits, setTotalUnits] = useState('');
    const [totalBill, setTotalBill] = useState('');
    const [billPerson1, setBillPerson1] = useState(null);
    const [billPerson2, setBillPerson2] = useState(null);

    const calculateBill = () => {
        let person1Unit = parseFloat(person1Units);
        let totalUnit = parseFloat(totalUnits);
        let totalBillAmount = parseFloat(totalBill);

        if (
            isNaN(person1Unit) || person1Unit < 0 ||
            isNaN(totalUnit) || totalUnit < 0 ||
            isNaN(totalBillAmount) || totalBillAmount < 0 ||
            person1Unit > totalUnit
        ) {
            setBillPerson1('Invalid input. Please enter valid numbers.');
            setBillPerson2(null);
            return;
        }

        const person2Unit = totalUnit - person1Unit;

        const calculateEnergyBill = (unit) => {
            if (unit <= 100) {
                return unit * 6.40;
            } else if (unit <= 300) {
                return 100 * 6.40 + (unit - 100) * 9.10;
            } else {
                return 100 * 6.40 + 200 * 9.10 + (unit - 300) * 11.10;
            }
        };

        const energyAmount = calculateEnergyBill(totalUnits);
        const singleUnit = energyAmount/totalUnits
        const energyBillPerson1 = singleUnit*person1Units
        const energyBillPerson2 = singleUnit*(totalUnits-person1Units)

        const remainingAmount =totalBillAmount - (energyBillPerson1+energyBillPerson2)
        const tax = remainingAmount
        const taxPerPerson = tax/2;

        const finalBillPerson1 = energyBillPerson1 + taxPerPerson ;
        const finalBillPerson2 = energyBillPerson2 + taxPerPerson;

        setBillPerson1(`Person 1: Energy Bill = ₹${energyBillPerson1.toFixed(2)},  Tax = ₹${taxPerPerson.toFixed(2)}, Total = ₹${finalBillPerson1.toFixed(2)}`);
        setBillPerson2(`Person 2: Energy Bill = ₹${energyBillPerson2.toFixed(2)}, Tax = ₹${taxPerPerson.toFixed(2)}, Total = ₹${finalBillPerson2.toFixed(2)}`);
    };

    return (
        <div className="p-4 max-w-sm mx-auto border rounded shadow-md">
            <h1 className="text-lg font-bold mb-4">Surya'S Electricity Bill Calculator</h1>
          <center>  <img src={i} width={200} alt="" /></center>
            <label  style={{textAlign:'left'}}htmlFor="">Person 1</label>
            <input
                type="number"
                value={person1Units}
                onChange={(e) => setPerson1Units(e.target.value)}
                placeholder="Enter Person 1 units consumed"
                className="w-full p-2 border rounded mb-4"
            />
            <label style={{textAlign:'left'}} htmlFor="">Total Units</label>
            <input
                type="number"
                value={totalUnits}
                onChange={(e) => setTotalUnits(e.target.value)}
                placeholder="Enter total units consumed"
                className="w-full p-2 border rounded mb-4"
            />
            <label style={{textAlign:'left'}} htmlFor="">Total Amount</label>
            <input
                type="number"
                value={totalBill}
                onChange={(e) => setTotalBill(e.target.value)}
                placeholder="Enter total bill amount"
                className="w-full p-2 border rounded mb-4"
            />
            <button
                onClick={calculateBill}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Calculate Bill
            </button>
            {billPerson1 && <div className="mt-4 text-lg font-semibold">{billPerson1}</div>}
            {billPerson2 && <div className="mt-2 text-lg font-semibold">{billPerson2}</div>}
        </div>
    );
};

export default LightBillCalculator;
