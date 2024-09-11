import { colors, Rating, Table, TableBody, TableCell, TableRow } from "@mui/material";

function TableInfoCard() {
    return(
        <Table sx={{ minWidth: '650px' }}>
            <TableBody>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>Name</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>Beserk Archfiend</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>Attribute</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>Dark</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>Level</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>
                        <Rating name="read-only" value={6} max={6} readOnly />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>Type</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>Fiend/Effect</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>ATK</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>2000</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>DEF</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>0</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '18px', fontWeight: 500}}>Description</TableCell>
                    <TableCell sx={{color: '#ffffff', border: 'none', fontSize: '16px'}}>You can target up to 2 face-up monsters you control, including a Fiend monster; Special Summon this card from your hand, and if you do, destroy those monsters. You can only use this effect of "Berserk Archfiend" once per turn. When a monster(s) is destroyed by this card&apos;s effect: You can target face-up monsters your opponent controls equal to the number destroyed; this card gains ATK equal to their combined original ATK, until the end of your next turn.
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default TableInfoCard;