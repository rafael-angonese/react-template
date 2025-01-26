import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'
import 'dayjs/locale/pt-br'

interface InputDatePickerProps extends DatePickerProps<Date | Dayjs> {}

export const InputDatePicker: React.FC<InputDatePickerProps> = ({
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker {...props} />
    </LocalizationProvider>
  )
}

InputDatePicker.displayName = 'InputDatePicker'
