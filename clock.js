

setInterval(() => {

    let d = new Date();
    indiaTime.innerHTML = d.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }).split(", ")[1];
    americaTime.innerHTML = d.toLocaleString("en-US", { timeZone: "America/New_York" }).split(", ")[1];
    chinaTime.innerHTML = d.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }).split(", ")[1];

    let alarm = document.getElementById('alarm');
    console.log(alarm.value);

    let alarmHr = alarm.value.split(":")[0]
    let alarmMin = alarm.value.split(":")[1]

    if (d.getHours() == alarmHr && d.getMinutes() == alarmMin) {
        console.log("BEEP BEEP ALARM");
        let ringTune= new Audio('ring.mp3')
        ringTune.play();
    }

}, 1000)

//also i want only time to come (not date)



