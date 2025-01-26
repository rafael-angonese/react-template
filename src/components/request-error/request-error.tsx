import React from 'react'

import { Alert, Button } from '@mui/material'
import { RefreshCw } from 'lucide-react'

interface Props {
  tryAgainCallback: () => void
  errorMessage?: string
}

const RequestError: React.FC<Props> = ({ tryAgainCallback, errorMessage }) => {
  return (
    <div className="flex justify-center">
      <Alert severity="error">
        <div className="flex flex-col items-center gap-2">
          <span>
            {errorMessage ||
              'Ocorreu um erro. Tente novamente ou recarregue a página.'}
          </span>
          <Button
            variant="contained"
            startIcon={<RefreshCw />}
            onClick={() => tryAgainCallback()}
          >
            Tentar novamente
          </Button>
        </div>
      </Alert>
    </div>
  )
}

export default RequestError
