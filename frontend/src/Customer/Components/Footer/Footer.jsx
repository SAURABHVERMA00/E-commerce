import { Button, Grid2, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid2
        className="bg-black text-white text-center mt-10 "
        container
  
        sx={{ bgcolor: "black", color: "white", py: 3 ,display:"flex" , flexDirection:'column' }}
      >
      
          {/* 1 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
            <div>
              <Button className="pb-5" variant="h6">
                ABOUT
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                BLOG
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                PRESS
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                JOBS
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                PARTNERS
              </Button>
            </div>
          </Grid2>

          {/* 2 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
            <div>
              <Button className="pb-5" variant="h6">
                Marketing
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Analytics
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Commerce
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Insights
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Support
              </Button>
            </div>
          </Grid2>

          {/* 3 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Documentation
            </Typography>
            <div>
              <Button className="pb-5" variant="h6">
                Guides
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                API Status
              </Button>
            </div>
          </Grid2>

          {/* 4 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Legal
            </Typography>
            <div>
              <Button className="pb-5" variant="h6">
                Claim
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Privacy
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6">
                Terms
              </Button>
            </div>
          </Grid2>
    

        <Grid2 className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by me{" "}
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>
          </Typography>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Footer;
