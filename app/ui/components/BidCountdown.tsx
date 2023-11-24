import getTimeRemaining from "@/app/utils/getTimeRemaining";
import { lato } from "@/app/ui/fonts/fonts";
const BidCountdown = ({endsAt}:{endsAt:string}) => {
    const timeRemaining = getTimeRemaining(endsAt)


return(
    <p suppressHydrationWarning>
    {timeRemaining.days >= 0
        ? (
            <>
                <span className={`text-red-200 text-bold ${lato.className}`}>Ends in </span>
                {timeRemaining.days} d {timeRemaining.hours} h {timeRemaining.minutes} m
            </>
        )
        : "Ended"
    }
</p>
)


}


export default BidCountdown