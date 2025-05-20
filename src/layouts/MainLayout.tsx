// DashboardLayout.tsx
import { Grid, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const drawerWidth = 80;

const DashboardLayout = () => {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item sx={{ 
        width: {
          xs: 0,
          sm: 25,
          md: 15,
          lg: 22,
          xl: 22
        }, 
        // flexShrink: 0 
        }}>
        <Sidebar />
      </Grid>

      {/* Main Content Area */}
      <Grid item xs 
        sx={{ ml: `${drawerWidth}px` }}
      >
        <Topbar />
        <Toolbar /> {/* Optional spacer if Topbar is fixed */}
        {/* Your main content here */}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
