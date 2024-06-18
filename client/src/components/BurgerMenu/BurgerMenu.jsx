import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="containerMenuBurger">
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: "pointer" }}
          >
            Fermer
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "md",
            "& > div": { justifyContent: "left" },
          }}
        >
          <ListItemButton sx={{ fontWeight: "lg" }}>
            Toutes les catégories
          </ListItemButton>
          <ListItemButton>Smartphones</ListItemButton>
          <ListItemButton>Ordinateurs</ListItemButton>
          <ListItemButton>Tablettes</ListItemButton>
          <ListItemButton>Son & Vidéo</ListItemButton>
          <ListItemButton>Drônes</ListItemButton>
          <ListItemButton>Consoles</ListItemButton>
          <ListItemButton>Accesoires</ListItemButton>
          <ListItemButton>Réseaux & Connectivités</ListItemButton>
          <ListItemButton>Sécurités</ListItemButton>
          <ListItemButton>Composants internes</ListItemButton>
          <ListItemButton>Appareils ménagers</ListItemButton>
          <ListItemButton />

          <ListItemButton sx={{ color: "#00C3E3" }}>
            Qui sommes-nous{" "}
          </ListItemButton>
          <ListItemButton sx={{ color: "#00C3E3" }}>
            Mode d&rsquo;emploi
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}
