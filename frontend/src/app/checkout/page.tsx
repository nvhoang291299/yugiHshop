import DeliverComponent from "@/components/Deliver";
import TotalCart from "@/components/TotalCart";

function Checkout() {
    return(
        <div className="checkout-section">
            <DeliverComponent />
            <TotalCart />
        </div>
    )
}

export default Checkout;