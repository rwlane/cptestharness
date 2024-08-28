import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@mui/material';

const MyTextfield = (props: {sendData: any, data: string}) => {
  const [name, setName] = useState<string | null>(props.data);

  const handleChange = (e: any) => {
      console.log("data: "+e.target.value)
      setName(e.target.value);
  }

  const handleClick = () => {
    console.log("name: "+name)
    props.sendData(name);
  }

  return (
    <Box>
      <TextField
        value={name}
        label="Enter your name"
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Load Audio</Button>
    </Box>
  )
}

export {
  MyTextfield,
};