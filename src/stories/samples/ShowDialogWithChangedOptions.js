import React from 'react'
import {Button} from 'react-bootstrap'
import Dialog from '../../index'
import { action } from '@kadira/storybook'

export default class ShowDialogWithChangedOptions extends React.Component {
  constructor () {
    super()
    this.onClickOkCancel = this.onClickOkCancel.bind(this)
  }

  componentDidMount () {
    Dialog.setOptions({
      defaultOkLabel: '確定',
      defaultCancelLabel: '取消',
      primaryClassName: 'btn-success'
    })
  }

  componentWillUnmount () {
    Dialog.resetOptions()
  }

  onClickOkCancel () {
    this.refs.dialog.show({
      body: 'Ok button has handler.',
      actions: [
        Dialog.CancelAction(),
        Dialog.OKAction(() => {
          action('ok button was clicked!')()
        })
      ]
    })
  }

  render () {
    return (
      <div>
        <p>
          Changing options should be executed at first launch.
        </p>
        <p>
          <Button onClick={this.onClickOkCancel}>Show ok cancel dialog</Button>
        </p>

        <Dialog ref='dialog' />
      </div>
    )
  }
}
