window.onload = async () => {

    // Canvas
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    // Draw a rectangle fill ayyy
    ctx.fillStyle = '#616161';
    ctx.fillRect(0, 0, width, height);

    // Draw two lines lmao
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(30, height-30);
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(28, height-30);
    ctx.lineTo(width-30, height-30);
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Draw (spit) bars
    fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
        const dataPoints = jsonData.btc_prices.map(point => point.price);
        const dates = jsonData.btc_prices.map(point => point.date);

        const barColor = ctx.createLinearGradient(height, height, height-30, 0);

        barColor.addColorStop(0, "red");
        barColor.addColorStop(0.5, "black");
        barColor.addColorStop(1, "black");

        const barWidth = 20;
        const barMargin = 10;
        const maxValue = Math.max(100000);

        const scaleFactor = height / maxValue;

        dataPoints.forEach((dataPoint, index) => {
            ctx.fillStyle = barColor;
            const barHeight = dataPoint * scaleFactor;
            ctx.fillRect (45 + (barWidth + barMargin) * index, height-32 - barHeight, barWidth, barHeight);

            // Draw the date beneath the bar
            ctx.fillStyle = '#000000';
            ctx.fillText(dates[index], 45 + (barWidth + barMargin) * index, height-10);
        });
    })
    .catch(err => console.error(err));
}; 

const serverURL = 'http://localhost:3000';

const getData = async () => {
    try {
        const response = await fetch (`${serverURL}/data`)
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error)
    }
};

const postData = async () => {
    try {
        const newData = {message: 'New message'};
        const response = await fetch(`${serverURL}/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        const result = await response.json();
        console.log('Server response:', result);
    } catch (error) {
        console.error('Error posting data:', error)
    }
};

const displayData = (data) => {
    const dataContainer = document.querySelector('#data-container')
    dataContainer.innerHTML = `${JSON.stringify(data, null, 2)}`;
};
