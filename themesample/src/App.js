import { ThemeProvider } from 'theme-ui'
import { Theme } from './Theme'
import { Box, Label, Input, Button } from 'theme-ui'
export const App = (props) => (
  <ThemeProvider theme={Theme}>
    <h1
      sx={{
        color: 'primary',
        fontFamily: 'heading',
      }}>
      Hello
    </h1>
    <Box sx={{ mb: 4 }}>
    <Label htmlFor="search">Search</Label>
    <Input id="search" name="search" {...props} />
    <Button>Go</Button>
  </Box>
  </ThemeProvider>
)

export default App