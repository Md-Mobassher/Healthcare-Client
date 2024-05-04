import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import instagram from "@/assets/landing_page/instagram.png";
import twitter from "@/assets/landing_page/twitter.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={4}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={3}>
          <Typography color="#FFF" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#FFF" component={Link} href="/healthplans">
            Health Plans
          </Typography>
          <Typography color="#FFF" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#FFF" component={Link} href="/diagonostics">
            Diagonostics
          </Typography>
          <Typography color="#FFF" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack
          py={4}
          direction="row"
          gap="20px"
          justifyContent="center"
          alignItems="center"
        >
          <Link href="https://dev-mobassher.web.app/" target="_blank">
            <Image src={facebook} alt="facebook" width={30} height={30} />
          </Link>
          <Link href="https://dev-mobassher.web.app/" target="_blank">
            <Image src={linkedin} alt="facebook" width={30} height={30} />
          </Link>
          <Link href="https://dev-mobassher.web.app/" target="_blank">
            <Image src={instagram} alt="facebook" width={30} height={30} />
          </Link>
          <Link href="https://dev-mobassher.web.app/" target="_blank">
            <Image src={twitter} alt="facebook" width={30} height={30} />
          </Link>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={3}
          alignItems="center"
        >
          <Typography color="#FFF" component="p">
            &copy; 2024 MM HealthCare. All right regerved
          </Typography>
          <Typography component="h1" color="#FFF" variant="h4" fontWeight={600}>
            M
            <Box component="span" color="primary.main">
              M
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#FFF" component="p">
            Privacy Policy | Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
