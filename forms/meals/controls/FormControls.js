import React from 'react';
import { observer } from 'mobx-react';
import Button from 'react-bootstrap/Button';

import { CheckCircleIcon, MinusCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const ctrl = 'inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2';

export default observer(({ form, controls = null }) => {
  const onSuccess = (form) => {
    console.log('onSuccess')
    console.log(form)
    console.log(form.values())
  }

  const onError = (form) => {
    console.log('onError')
  }

  const handleSubmit = (e) => {
    console.log('handleSubmit')
    e.preventDefault()
    form.onSubmit(e, {onSuccess: onSuccess, onError: onError})
  }

  return (
    <div className="flex justify-center items-center">

      {(!controls || controls.onSubmit) &&
        <Button
          type="submit"
          className={ctrl}
          onClick={handleSubmit}
        >
        {(form.submitting || form.validating)
            ? <span>spinning</span>
            : <span className="flex justify-center items-center">Submit</span>}
        </Button>}

      {(!controls || controls.onClear) &&
        <Button
          icon="eraser"
          className={ctrl}
          onClick={form.onClear}>Clear 
        </Button>
      }
      {(!controls || controls.onReset) &&
        <Button
          text={'Reset'}
          icon="refresh"
          className={ctrl}
          onClick={form.onReset}><ArrowPathIcon className="flex-shrink-0 h-5 w-5 text-red-400" aria-hidden="true"/>Reset 
          </Button>
      }
      <div className="f6 db red">
        {form.error}
      </div>

    </div>
  )
});