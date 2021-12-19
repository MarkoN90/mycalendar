import {TimeFacts, DAYS_IN_WEEK} from "./timeFacts";

export default class MyCalendar {

    constructor(el, config) {
        
        this.el = el;
        this.config = config || {};
        this.date = new Date();
        this.buildCalendar();
    }

    buildCalendar() {
        this.el.innerHTML = '';
        this.calendar = document.createElement('div');
        this.createControls();
        this.createDayGrids();
    }

    createControls() {
        let controls = document.createElement('div');

        let nextBtn = document.createElement('button');
        nextBtn.addEventListener('click', () =>  this.next());
        nextBtn.innerText = "Next";


        let prevBtn = document.createElement('button');
        prevBtn.addEventListener('click', () =>  this.prev());
        prevBtn.innerText = "Prev";

        controls.append(prevBtn);
        controls.append(nextBtn);

        this.calendar.appendChild(controls);
    }

    createDayGrids() {

        let date = this.date;
        let month = TimeFacts.convertToMonth(date.getMonth());

        let firstOfThisMonth = new Date(month + ' 1,' + date.getFullYear()).getDay();
        let daysSection = document.createElement('div');

        let prevMonthDuration = TimeFacts.monthDuration(TimeFacts.convertToMonth(date.getMonth() - 1));
        let prevMonthDays = prevMonthDuration - firstOfThisMonth + 1;

        let dayGridNumber = 0;
        let dayInMonth = 1;
        let daysAfterThisMonth = 1;

        for(let i = 1; i < 6; i++) {

            let monthRow = document.createElement('div');
            monthRow.style.display = 'flex';

            for(let x = 0; x < DAYS_IN_WEEK; x++) {

                let day = document.createElement('div');

                // style the day element
                day.style.width = '14.27%';
                day.style.height = '100px';
                day.style.border = '1px solid gray';
                day.style.position = 'relative';

                if( dayGridNumber < firstOfThisMonth) {
                    day.innerHTML = prevMonthDays;
                    prevMonthDays++;

                } else if ( dayInMonth > TimeFacts.monthDuration(month)) {
                    day.innerHTML = daysAfterThisMonth;
                    daysAfterThisMonth ++;

                } else {
                    day.innerHTML = dayInMonth;
                    dayInMonth++;

                }

                day.addEventListener('click', function (e) {
                    e.target.append(document.createElement('div').innerHTML = 'event')
                })

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

    next() {
        this.date = new Date(this.date.setMonth(this.date.getMonth() + 1))
        this.buildCalendar();
        this.render();
    }


    prev() {
        this.date = new Date(this.date.setMonth(this.date.getMonth() - 1))
        this.buildCalendar();
        this.render();
    }

    render() {
        this.el.append(this.calendar);
    }

  }


