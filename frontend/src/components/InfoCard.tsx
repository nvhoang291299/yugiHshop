import { Grid } from "@mui/material";
import Card from "./Card";

function InfoCard() {
    return(
        <div className="info-card">
            <Grid>
                <Grid xs={6}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    )
}

export default InfoCard;