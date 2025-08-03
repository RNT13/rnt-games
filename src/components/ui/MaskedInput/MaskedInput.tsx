import { useField } from 'formik'
import { IMaskInput } from 'react-imask'

type MaskedInputProps = {
  name: string
  mask?: string
  placeholder?: string
  className?: string
  showError?: boolean
  type?: string
}

export const MaskedInput = ({
  name,
  mask,
  placeholder,
  className,
  showError = false,
  type = 'text'
}: MaskedInputProps) => {
  const [field, meta, helpers] = useField(name)

  const commonProps = {
    ...field,
    placeholder,
    className,
    type,
    onBlur: () => helpers.setTouched(true),
  }

  return (
    <>
      {mask ? (
        <IMaskInput
          {...commonProps}
          mask={mask}
          value={field.value || ''}
          onAccept={(value: string) => helpers.setValue(value)}
        />
      ) : (
        <input
          {...commonProps}
          value={field.value || ''}
          onChange={(e) => helpers.setValue(e.target.value)}
        />
      )}
      {showError && meta.touched && meta.error && (
        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {meta.error}
        </div>
      )}
    </>
  )
}
