import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";

export default function InputWithIcon(props: any) {
  // const [query, setQuery] = useState("");
  // const [query, setQuery] = [props.query, props.setQuery];

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label="Search for album, artist, song"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={ (e) => props.setQuery(e.target.value) }
      />
    </Box>
  );
}