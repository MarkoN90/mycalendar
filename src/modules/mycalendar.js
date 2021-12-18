import {TimeFacts, DAYS_IN_WEEK} from "./timeFacts";

export default class MyCalendar {

    constructor(el, config) {
        
        this.el = el;
        this.config = config || {};
        
        this.buildCalendar();
    }

    buildCalendar() {

        this.calendar = document.createElement('div');
        this.createDayGrids();


        alert ('hello build a calendar');
    }

    createDayGrids() {

        let date = new Date();

        let month = TimeFacts.convertToMonth(date.getMonth());


        let firstOfThisMonth = new Date(month + ' 1,' + date.getFullYear()).getDay();

        alert(firstOfThisMonth);


        let daysSection = document.createElement('div');

        let dayGridNumber = 0;
        let dayInMonth = 1;
        let daysAfterThisMonth = 1;

        for(let i = 1; i < 6; i++) {

            let monthRow = document.createElement('div');
            monthRow.style.display = 'flex';
            

            for(let x = 0; x < DAYS_IN_WEEK; x++) {
                let day = document.createElement('div');
                day.style.width = '14.27%';
                day.style.height = '100px';
                day.style.border = '1px solid gray';
                day.style.position = 'relative';

                if( dayGridNumber < firstOfThisMonth) {

                } else if ( dayInMonth > TimeFacts.monthDuration(month)) {
                    day.innerHTML = daysAfterThisMonth;
                    daysAfterThisMonth ++;

                } else {
                    day.innerHTML = dayInMonth;
                    dayInMonth++;

                }

                dayGridNumber++;

                monthRow.append(day);
            } 

            daysSection.appendChild(monthRow);
        }

  
        let monthDatePanel = document.createElement('div');

        monthDatePanel.innerHTML = month;

        this.calendar.appendChild(monthDatePanel)
        this.calendar.appendChild(daysSection);

    }


    render() {
        this.el.append(this.calendar);
    }

  }


