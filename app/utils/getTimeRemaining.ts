export default function getTimeRemaining(endtime:string) {
        const total:number = Date.parse(endtime) - Date.parse(new Date().toISOString());
        const seconds:number = Math.floor((total / 1000) % 60);
        const minutes:number = Math.floor((total / 1000 / 60) % 60);
        const hours:number = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days:number = Math.floor(total / (1000 * 60 * 60 * 24));



        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }
