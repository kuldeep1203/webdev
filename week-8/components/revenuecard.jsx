export const RevenueCard = ({


    title,
    showWarning,
    orderCount,
    amount
})=>{
    return <div className="bg-white rounded shadow-sn">
        <div>
            {title}
            ?
        </div>
        <div className="flex justify-between">
            {amount}
        </div>
        {orderCount ? <div>
            {count} order(s) {">"}
            </div> : null}

    </div>
}