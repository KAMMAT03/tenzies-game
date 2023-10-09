
export default function Dice(prop){
    return (
        <div onClick={prop.toggleHeld} className={prop.isHeld ? 'held' : 'dice'}>
            {prop.value}
        </div>
    )
}