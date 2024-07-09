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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BurgerMenu() {
  const [open, setOpen] = React.useState(false);

  const [dataCategories, setDataCategories] = useState([]);

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    setOpen(false);
    navigate(`/categorie/${categoryId}`);
  };

  const handleAllProductsClick = () => {
    setOpen(false);
    navigate("/categorie/produits");
  };

  useEffect(() => {
    const fetchDataCategories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/categories/");
        const receptionData = await response.json();
        setDataCategories(receptionData);
      } catch (error) {
        console.error("Error fetching dataCategories", error);
      }
    };
    fetchDataCategories();
  }, []);

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
          <ListItemButton
            sx={{ fontWeight: "lg" }}
            onClick={handleAllProductsClick}
          >
            Toutes les produits
          </ListItemButton>
          {dataCategories.map((dataCategory) => (
            <ListItemButton
              key={dataCategory.category_id}
              className="href"
              role="presentation"
              onClick={() => handleCategoryClick(dataCategory.category_id)}
            >
              {dataCategory.category_name}
            </ListItemButton>
          ))}

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
