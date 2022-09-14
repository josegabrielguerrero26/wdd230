        // daynames array
        const dayNames=[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        
        //month array
        const months =[
            "January",
            "February",
            "March",
            "April",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        
        const todaysdate= new Date();
        const dayName= dayNames[todaysdate.getDay()];
        const monthName= months[todaysdate.getMonth()];
        const currentdate = dayName +", "+ todaysdate.getDate()+ " " + monthName + ", "+ todaysdate.getFullYear();

        const options ={weekday: 'long', day:'numeric', monht:'long', year:'numeric'};

        
        document.getElementById('currentdate').textContent= currentdate;