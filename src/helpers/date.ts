export const distance_between_two_dates = (date1: Date, date2: Date) =>{
    var Difference_In_Time = (date2.getTime() - date1.getTime())/1000;
    if(Difference_In_Time < 60){
        return " - " + Difference_In_Time.toFixed(0) + " senconds ago";
    }else if(Difference_In_Time<3600){
        return " - " + (Difference_In_Time/60).toFixed(0) + " minutes ago";;
    }else if(Difference_In_Time<3600*24){
        return " - " + (Difference_In_Time/3600).toFixed(0) + " hours ago";
    }
    return " - " + (Difference_In_Time/(3600*24)).toFixed(0) + " days ago";;
}