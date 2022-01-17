 // prettier-ignore
// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// import { Grid } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function DefaultProjectCard({ image, title, description, action }) {

  return (
    <>
<DashboardNavbar/>
<div style={{ display:'flex', justifyContent:'center' }}>
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        maxWidth: "50%",

      }}
    >
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "50%",
            margin: 2,
            marginLeft: 30,
            marginRight:30,
            boxShadow: ({ boxShadows: { md } }) => md,
            justifyContent: "center",
            display:"flex", 
            // objectFit: "cover",
            objectPosition: "center",
          }}
        />
      <MDBox mt={1} mx={0.5} justifyContent="center">
<div style={{ display:'flex', justifyContent:'center' }}>
        <MDBox mb={1}>
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
              justifyContent="center"
            >
              {title}
            </MDTypography>

        </MDBox>
        </div>
        <MDBox mb={3} lineHeight={0} justifyContent="center" sx={{
          marginLeft: 3,
          marginRight:3,
        }}>
          <MDTypography variant="button" fontWeight="light" color="text" justifyContent="center">
            {description}
          </MDTypography>
        </MDBox>

<div style={{ display:'flex', justifyContent:'center' }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" sx={{
          gap:2,
        }}>
            <MDButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color="black"
              sx={{
                gap: 3,
                marginBottom: 3,
              }}
            >
              Register
            </MDButton>
        </MDBox>
</div>

      </MDBox>
    </Card>
  </div>
    </>
  );
}

// Setting default values for the props of DefaultProjectCard


// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultProjectCard;
