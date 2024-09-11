import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Dialog, Icon, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import potionIcon from '../../assets/images/potion.png';
import { GameContext } from '../../contexts/gameContext';
import { BuyConsumablesButton } from '../../helpers/styles';

const POTIONS = [
  {
    name: 'revive potion',
    description: 'Speeds up recovery of a beast by 1 hour.',
    cost: 0.25
  },
]

function BuyConsumables(props) {
  const { open, close } = props
  const [amount, setAmount] = useState(0)
  const game = useContext(GameContext)

  return (
    <Dialog
      open={open}
      onClose={() => { close(false) }}
      maxWidth={'lg'}
      PaperProps={{
        sx: { background: '#feffda', border: '3px solid rgba(0, 0, 0, 0.35)', borderRadius: '10px' }
      }}
    >

      <Box sx={styles.dialogContainer}>
        <Box sx={styles.container}>

          <Box sx={styles.itemsContainer}>
            {React.Children.toArray(
              POTIONS.map(potion => {
                return <Box sx={styles.itemContainer}>
                  <Box sx={styles.itemTitle}>
                    <Typography variant='h3' color='white' letterSpacing={'1px'}>
                      {potion.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'space-between', width: '100%', px: 0.5, boxSizing: 'border-box' }}>
                    <Box sx={styles.imageContainer}>
                      <img src={potionIcon} alt='' width={'90%'} />
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={0.5}>
                      <Box sx={styles.description}>
                        <Typography letterSpacing={'0.5px'} lineHeight={'14px'} sx={{ fontSize: '13px', opacity: 0.8 }}>
                          {potion.description}
                        </Typography>
                      </Box>

                      <Box sx={styles.cost}>
                        <Typography sx={{ letterSpacing: '0.5px', fontSize: '13px', opacity: 0.8 }}>
                          Cost
                        </Typography>
                        <Typography sx={{ letterSpacing: '0.5px', fontSize: '13px', opacity: 0.8 }}>
                          ${potion.cost}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ my: 1, display: 'flex', width: '100%', justifyContent: 'space-between', px: 1, boxSizing: 'border-box' }}>
                    <Box sx={{ display: 'flex' }}>
                      <IconButton onClick={() => setAmount(prev => Math.max(0, prev - 1))}>
                        <RemoveIcon />
                      </IconButton>

                      <IconButton onClick={() => setAmount(prev => prev + 1)}>
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <Input disableUnderline={true} sx={{ color: 'black', width: '80px', fontSize: '18px', textAlign: 'right' }}
                      inputProps={{ style: { textAlign: 'right' } }}
                      value={amount}
                      onChange={e => setAmount(Number(e.target.value))}
                      endAdornment={
                        <InputAdornment position="end">
                          <Typography letterSpacing={'0.5px'}>
                            Selected
                          </Typography>
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Box>
              })
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <Typography variant='h4' letterSpacing={'1px'}>
              Total ${amount * 0.25}
            </Typography>

            <BuyConsumablesButton disabled={amount < 1} onClick={() => { game.setState.totalReward(prev => prev + (amount * 0.25)), close(false); }}>
              Buy Potions
            </BuyConsumablesButton>
          </Box>
        </Box>

      </Box>

    </Dialog >
  )
}

export default BuyConsumables

const styles = {
  dialogContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    minWidth: '500px',
    p: 3
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3
  },
  itemsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: 1
  },
  itemContainer: {
    width: '180px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0.5,
    border: '3px solid #d2ad68',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 2px',
    borderRadius: '5px',
  },
  itemTitle: {
    background: 'black',
    width: '100%',
    textAlign: 'center',
    py: 0.5,
  },
  imageContainer: {
    p: 1,
    width: '90px',
    height: '100%',
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    background: '#f6e6bc',
  },
  description: {
    p: '5px',
    border: '1px solid #c87d3b',
    borderRadius: '4px',
    width: '90px'
  },
  cost: {
    p: 1,
    border: '1px solid #c87d3b',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}