const AdvancepaymentFooter = () => {
    return (
        <div className="d-flex bg-color-primary m-0 p-0 align-items-center justify-content-between mt-4 p-3">
            <div className="d-flex align-items-center">
                <input type="checkbox" name="condition" id="condition" className="custom-checkbox me-2"/>
                <label htmlFor="condition" className="text-white fs-16 lh-140 ls-0 fw-500">
                    with this you accept our partners and our{" "}
                     <span className="text-decoration-underline">Terms and Conditions</span> 
                </label>
            </div>
            <div className="">
                <div>Pay Rs. 10000</div>
                <div>Just 10% of Estimation</div>
            </div>
        </div>
    )
}

export default AdvancepaymentFooter;