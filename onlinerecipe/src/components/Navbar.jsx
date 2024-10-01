import React from 'react'
import { AppBar }from '@mui/material/AppBar';

function Navbar() {
  return (
    <div>
       <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={logoSrc}
            alt="Recipe Finder"
            style={{ height: "40px", width: "auto" }}
          />
        </Box>
      

        <SignedIn>
          {user && (
            <>
              <Button
                onClick={toggleTheme}
                variant="contained"
                sx={{ marginRight: 2 }}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              <Avatar
                src={user?.imageUrl}
                alt="Profile"
                onClick={handleProfileClick}
                sx={{ cursor: "pointer" }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar
