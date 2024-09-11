import { Button } from "@mui/material";

function TotalCart() {
    return(
    <div className="total-cart">
        <h2>Total cart</h2>
        <div>
            <div>
                <h4>Subtotal:</h4>
                <p>$26</p>
            </div>
            <div>
                <h4>Fee:</h4>
                <p>$0.01</p>
            </div>
        </div>
        <div>
            <h3>Total:</h3>
            <p>$26.01</p>
        </div>
        <Button variant="contained"> proceed checkout </Button>
    </div>
    )
}

export default TotalCart;