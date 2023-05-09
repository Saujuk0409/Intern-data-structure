function findout()
{
    let today=new Date();
    let Year=today.getFullYear();
    if(today.getMonth()==11 && today.getDate()>25)
    {
        Year=Year+1;
    }
    let cDate=new Date(Year,11,25);
    let daymilisecond=1000*60*60*24;
    let remainingdays=Math.ceil((cDate.getTime()-today.getTime()) / (daymilisecond));
    return remainingdays;
}
console.log(findout()+" more days to go");