import { FormikProps } from 'formik'

//adicione no estilo do input
//&.error {
//  border: 2px solid ${theme.colors.baseRed.base};
//  background-color: ${theme.colors.baseRed.light02};
//  }
//
// e adicione no componente o className={checkInputHasError('email', form) ? 'error' : ''}

export const MaskedInputCheck = <T>(fieldName: keyof T, form: FormikProps<T>): boolean => {
  const isTouched = fieldName in form.touched
  const hasError = fieldName in form.errors
  return isTouched && hasError
}
