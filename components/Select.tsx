import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { IFilter } from '../utils/filterData'
import { useRouter } from 'next/router'

interface SelectedProps {
  item: IFilter
  setProperty: any
  handleButton: any
}

export const Selected: FC<SelectedProps> = ({
  item,
  setProperty,
  handleButton,
}) => {
  const router = useRouter()

  useEffect(() => {
    const queryValue = router.query[item.queryName] ?? ''

    if (typeof queryValue === 'string') {
      setCurrent(queryValue)
    }
  }, [])

  const [current, setCurrent] = useState('')

  const handleChange = async (e: SelectChangeEvent, keyName: any) => {
    setCurrent(e.target.value)
    setProperty((prev: any) => ({
      ...prev,
      ...keyName,
    }))
    handleButton()
  }

  return (
    <>
      <Box sx={{ width: '200px', m: '10px' }}>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel id="demo-simple-select-label">
            {item.placeholder}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={current}
            label={item.placeholder}
            onChange={(e) =>
              handleChange(e, { [item.queryName as string]: e.target.value })
            }
          >
            {item.items.map((option, index) => (
              <MenuItem value={option.value as string} key={index}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  )
}
