import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
import useWindowDimensions from "hooks/useWindowDimensions";

function CompetitionCard({ image, label, title, description, action}) {
  const { width } = useWindowDimensions();
  let displayType
  if(width<1096 )
  {
    displayType="column"

  }
  else
  {
    displayType="row"
  }
  return (
    < div style={{ display:'flex', justifyContent:'center' }}>
    <Card
      sx={{
       
        display: "flex",
        flexDirection: `${displayType}`,
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      < div style={{ display:'flex', justifyContent:'center' }}>
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "50%",
            margin: 2,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        </div>
      <MDBox mt={1} mx={0.5}>
        <MDBox mb={1}>
          {action.type === "internal" ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          )}
          <br/>
                  <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </MDTypography>
        </MDBox>
        <MDBox mb={3} lineHeight={0} >
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
           <MDTypography variant="button" fontWeight="light" color="info">
            <a href="/codigo"
            >
              Learn More
            </a>
            </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
    </div>
  );
}

// Typechecking props for the CompetitionCard
CompetitionCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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

export default CompetitionCard;
