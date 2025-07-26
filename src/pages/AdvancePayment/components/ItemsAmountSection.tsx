const ItemsAmountSection = () => {
    return (
        <div className="p-3">
            <table className="table table-borderless">
                <thead className="">
                    <tr className="">
                        <th className="text-start">Items</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="text-start">Food Package</td>
                        <td>Kitty Package @360/Guest</td>
                        <td>Rs. 45,000</td>
                    </tr>
                    <tr className="">
                        <td className="text-start">PartyVerse Event Manager</td>
                        <td>Applied Complimentary</td>
                        <td>FREE</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ItemsAmountSection;