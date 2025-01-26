import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material'

export interface IconButtonProps extends MUIIconButtonProps {}

export const IconButton: React.FC<IconButtonProps> = ({ ...props }) => {
  return <MUIIconButton {...props} />
}

IconButton.displayName = 'IconButton'
