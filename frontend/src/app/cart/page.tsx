import TableCart from "@/components/TableCart";
import TotalCart from "@/components/TotalCart";

function CartPage() {
    return (
        <div className="cart">
            <TableCart />
            <TotalCart />
        </div>
    )
}

export default CartPage;