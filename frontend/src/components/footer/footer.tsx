import { Box, Container, FormControl, Grid, InputLabel, List, ListItem, Menu, MenuItem, OutlinedInput } from "@mui/material";
import Image from "next/image";
import logo from '@/image/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-top">
                    <Box>
                        <Grid container rowGap={5} margin={0} marginTop={0} marginLeft={0}>
                            <Grid xs={12} md={4} sx={{ paddingRight: '84px' }} className="item">
                                <div className="logo">
                                    <Image src={logo} alt="" width={150} height={50} />
                                </div>
                                <div className="pt-30">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, id!</p>
                                </div>
                                <div className="pt-20">
                                    <span>Join our community</span>
                                    <div className="communities-logo pt-15">
                                        <FontAwesomeIcon icon={faDiscord} />
                                        <FontAwesomeIcon icon={faFacebook} />
                                        <FontAwesomeIcon icon={faXTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} md={4} className="item">
                                <h3>Explore</h3>
                                <ul>
                                    <li className="pt-20">Marketplace</li>
                                    <li className="pt-20">Rankings</li>
                                    <li className="pt-20">Connect a wallet</li>
                                </ul>
                            </Grid>
                            <Grid xs={12} md={4} className="item">
                                <h3>join our weekly digest</h3>
                                <p className="pt-25">Subscribe for promotional updates</p>
                                <FormControl variant="outlined">
                                    <OutlinedInput
                                        className="input-email"
                                        type="email"
                                        endAdornment={
                                            <button type="submit">Subscribe</button>
                                        }
                                        placeholder="Enter your email here"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className="footer-bot"></div>
            </Container>
        </footer>
    )
}

export default Footer;