import { useRef } from 'react'
import { AlertDialog, Button } from 'native-base'

export const Prompt = ({
  title,
  description,
  cancelText,
  submitText,
  onCancel,
  onSubmit
}) => {
  const cancelRef = useRef(null)

  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen onClose={onCancel}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <AlertDialog.Body>{description}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onCancel}
              ref={cancelRef}
            >
              {cancelText}
            </Button>
            <Button colorScheme="danger" onPress={onSubmit}>
              {submitText}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
