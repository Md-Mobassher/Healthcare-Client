import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography component="h1" variant="h4" fontWeight={600}>
          M
          <Box component="span" color="primary.main">
            M
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={3}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/healthplans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagonostics">
            Diagonostics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
