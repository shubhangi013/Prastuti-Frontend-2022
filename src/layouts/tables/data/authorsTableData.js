/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";



export default function data() {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1} >
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium" >
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );


  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Participant", accessor: "author", width: "35%", align: "left" },
      { Header: "No. of events", accessor: "status", align: "center" },
      { Header: "College", accessor: "function", align: "left" },
      { Header: "Points", accessor: "employed", align: "center" },
    ],

    rows: [
      {
        author: <Author name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager"  />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2304
          </MDTypography>
        ),
      },
      {
        author: <Author name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1119
          </MDTypography>
        ),
      },
      {
        author: <Author name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Executive"  />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1917
          </MDTypography>
        ),
      },
      {
        author: <Author name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2408
          </MDTypography>
        ),
      },
      {
        author: <Author name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager"/>,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0421
          </MDTypography>
        ),
      },
      {
        author: <Author  name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator"  />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1420
          </MDTypography>
        ),

      },
    ],
  };
}
