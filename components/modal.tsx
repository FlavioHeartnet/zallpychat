import { Button, Modal } from 'semantic-ui-react'
import {useReducer} from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'OPEN_MODAL':
        return { open: true, dimmer: action.dimmer }
      case 'CLOSE_MODAL':
        return { open: false }
      default:
        throw new Error()
    }
  }
export default function CustomModal(props){
    const [state, dispatch] = useReducer(reducer, {
        open: props.dispatch,
        dimmer: 'blurring',
      })
      const { open, dimmer } = state
        
    return(
        <Modal
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>{props.titulo}</Modal.Header>
        <Modal.Content>
          {props.texto}
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    )
}