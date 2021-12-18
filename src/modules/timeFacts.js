class TimeFacts {


static convertToMonth(monthNum) {

    switch (monthNum) {
        case 10:
            return 'November';
        case 11:
            return 'December';
            default:
                return null;
        
        }

    }

static monthDuration(month) {

    switch (month) {
        case 'December':
            return 31;
    }
}

}






const DAYS_IN_WEEK = 7;

export {TimeFacts, DAYS_IN_WEEK};