 // prettier-ignore
// react-routers components

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";



// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";


function ProfilesList({ title, profiles, shadow }) {

//   function toggleDisplay(key){
//   const x = document.getElementsByClassName(key);
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
  

  const renderProfiles = profiles.map(({ image, name, description }) => (
    <div>
    <MDBox key={name} component="li" alignItems="center" py={2} mb={1} className={name}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt="something here" shadow="md" />
      </MDBox>
      <MDBox  flexDirection="column" alignItems="flex-start" justifyContent="center" px={2} r={3} display="flex" >
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {description}
        </MDTypography>
      </MDBox>

  <Stack spacing={1} direction="row" >
  <Button variant="contained" color="success" size="small"   sx={{
      border: "2px green solid"
    }} startIcon={<DoneIcon />} key={name} >Accept</Button>

  <Button variant="contained" color="success" size="small"  sx={{ border: "2px red solid" }} startIcon={<DeleteIcon />} key={name}>Decline</Button>
 </Stack>
   </MDBox>
   </div>

  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize" color="info" textGradient>
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
