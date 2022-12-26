import '../App.css';
import axios from 'axios';
import { Buffer } from 'buffer';
import { Type_Album, Type_fetch_Data } from '../types/@type';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Item from './item';

const client_id = '73f9cb5df36f4f43abe2c844e3a0dac6'; // Your client id
const client_secret = 'b333997d441b4d3faff746b2dbda2653'; // Your secret

async function fetchSpotifyData() {
  const response = await axios.post('https://accounts.spotify.com/api/token', { grant_type: 'client_credentials' }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': '*/*',
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    }
  });

  if (response.status === 200) {
    const token = response.data.access_token;
    // console.log('Retrieved Token: '+token);
    const { data }: { data: Type_fetch_Data } = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Authorization': 'Bearer ' + token
      }
    });
    // const result: Type_fetch_Data = [];
    return data;
  }
}

function MyItems(props: any) {
  // const { data, error, isError, isLoading }: Type_fetch_Data = 
  const [isLoading, SetisLoading] = useState(true);
  const [isError, SetisError] = useState(false);
  const [data, setData] = useState<Type_Album[] | undefined>();

  useEffect(() => {
    SetisLoading(true);
    fetchSpotifyData().then((res) => {
      const data: Type_fetch_Data | undefined = res;
      const filteredData = data?.albums.items.filter((item) => item.name.toLowerCase().includes(props.search.toLowerCase()));
      setData(filteredData)

      SetisLoading(false);
      if (!res) SetisError(true);
    }
    );

  }
    , [props.search]);

  if (isLoading) {
    return <Box> Loading....</Box>
  }
  if(data?.length === 0){
    return <Box>No matching result.</Box>
  }
  if (isError) {
    return <Box> Error !.....</Box>
  }

  return (
    <>{data?.map((item, index)=>(
      <Item  key = { index } name = { item.name } images = { item.images } url = { item.href }/>
    ))}</>
  );

}

export default MyItems;
