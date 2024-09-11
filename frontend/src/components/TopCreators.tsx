import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "@/image/avatar.png";

function TopCreators() {
    return (
        <div className="top-creators">
            <h3 className="head-title">Top creators</h3>

            <div className="list-creator">
                <Grid container margin={'auto'}>
                    <Grid xs={3}>
                        <Card sx={{ width: 'fit-content', textAlign: 'center', backgroundColor: '#3b3b3b', color: '#ffffff', borderRadius: '20px' }}>
                            <Image src={avatar} alt="" style={{ margin: '20px 50px 0 50px' }} />
                            <CardContent sx={{ padding: '20px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px', letterSpacing: '0.5px', color: '#ffffff' }}>
                                    total card: 40
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card sx={{ width: 'fit-content', textAlign: 'center' }}>
                            <Image src={avatar} alt="" style={{ margin: '20px 50px 0 50px' }} />
                            <CardContent sx={{ padding: '20px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px', letterSpacing: '0.5px' }}>
                                    total card: 40
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card sx={{ width: 'fit-content', textAlign: 'center' }}>
                            <Image src={avatar} alt="" style={{ margin: '20px 50px 0 50px' }} />
                            <CardContent sx={{ padding: '20px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px', letterSpacing: '0.5px' }}>
                                    total card: 40
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card sx={{ width: 'fit-content', textAlign: 'center' }}>
                            <Image src={avatar} alt="" style={{ margin: '20px 50px 0 50px' }} />
                            <CardContent sx={{ padding: '20px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px', letterSpacing: '0.5px' }}>
                                    total card: 40
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default TopCreators;