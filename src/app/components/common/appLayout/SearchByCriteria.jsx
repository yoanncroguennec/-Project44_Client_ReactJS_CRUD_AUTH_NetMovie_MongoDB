import React, { useState } from 'react'
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useOutletContext } from 'react-router-dom';
import Sort from '../../../../components/Sort';
import Genre from '../../../../components/Genre';

export default function SearchByCriteria() {
  const [obj, sort, setSort, filterGenre, setFilterGenre] = useOutletContext();
     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Button
        color='warning'
        onClick={() => setIsDrawerOpen(true)}
        variant='contained'
      >
        <Typography variant='h6'>Flitrez & Cherchez par critères</Typography>
      </Button>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography component='div' variant='h6'>
            Filtrez par genres :
            <div className='filter_container'>
              <Sort sort={sort} setSort={(sort) => setSort(sort)} />
              <Genre
                filterGenre={filterGenre}
                genres={obj.genres ? obj.genres : []}
                setFilterGenre={(genre) => setFilterGenre(genre)}
              />
            </div>
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
}
