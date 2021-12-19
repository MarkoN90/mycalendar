class TimeFacts {

    static convertToMonth(monthNum) {

        switch (monthNum) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
            case -1:
                return 'December';
            default:
                return null;
        }
    }

    static monthDuration(month) {

        switch (month) {
            case 'January':
                return 31;
            case 'February':
                return 28;
            case 'March':
                return 31;
            case 'April':
                return 30;
            case 'May':
                return 31;
            case 'June':
                return 30;
            case 'July':
                return 31;
            case 'August':
                return 31;
            case 'September':
                return 30;
            case 'October':
                return 31;
            case 'November':
                return 30;
            case 'December':
                return 31;
        }
    }

}


const DAYS_IN_WEEK = 7;

export {TimeFacts, DAYS_IN_WEEK};